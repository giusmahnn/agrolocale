import { NextRequest, NextResponse } from "next/server";

import { askGemini } from "@/lib/chatbot/ai";

type ChatHistoryMessage = {
  sender: "bot" | "user";
  text: string;
};

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const message = body.message;
    const history = body.history;

    if (
      typeof message !== "string" ||
      !message.trim()
    ) {
      return NextResponse.json(
        {
          error: "Message is required.",
        },
        {
          status: 400,
        }
      );
    }

    const validHistory: ChatHistoryMessage[] =
      Array.isArray(history)
        ? history.filter(
            (item): item is ChatHistoryMessage =>
              item &&
              (item.sender === "user" ||
                item.sender === "bot") &&
              typeof item.text === "string"
          )
        : [];

    const response = await askGemini(
      message.trim(),
      validHistory
    );

    return NextResponse.json({
      response,
    });
  } catch (error) {
    console.error(
      "========== CHATBOT API ERROR =========="
    );

    console.error(error);

    console.error(
      "========================================"
    );

    return NextResponse.json(
      {
        error:
          "Unable to process your request.",
      },
      {
        status: 500,
      }
    );
  }
}