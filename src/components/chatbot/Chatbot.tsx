"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { chatbotMenus } from "@/lib/chatbot/content";

import {
  ChatMessage,
  ChatOption,
} from "@/types/chatbot";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

function createMessage(
  sender: "bot" | "user",
  text: string
): ChatMessage {
  return {
    id: crypto.randomUUID(),
    sender,
    text,
  };
}

export default function Chatbot() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const [currentMenu, setCurrentMenu] =
    useState("welcome");

  const [messages, setMessages] = useState<
    ChatMessage[]
  >([
    createMessage(
      "bot",
      chatbotMenus.welcome.message
    ),
  ]);

  const menu = chatbotMenus[currentMenu];

  function addMessage(
    sender: "bot" | "user",
    text: string
  ) {
    setMessages((previous) => [
      ...previous,
      createMessage(sender, text),
    ]);
  }

  function handleOption(option: ChatOption) {
    addMessage("user", option.label);

    if (option.type === "menu") {
      const nextMenu =
        chatbotMenus[option.target];

      if (!nextMenu) {
        addMessage(
          "bot",
          "Sorry, something went wrong. Please try again."
        );

        return;
      }

      setCurrentMenu(option.target);

      addMessage(
        "bot",
        nextMenu.message
      );

      return;
    }

    if (option.type === "answer") {
      addMessage(
        "bot",
        option.answer
      );

      if (option.next) {
        const nextMenu =
          chatbotMenus[option.next];

        if (nextMenu) {
          setCurrentMenu(option.next);

          addMessage(
            "bot",
            nextMenu.message
          );
        }
      }

      return;
    }

    if (option.type === "link") {
      router.push(option.href);
      return;
    }

    if (option.type === "external") {
      window.open(
        option.href,
        "_blank",
        "noopener,noreferrer"
      );

      return;
    }

    if (option.type === "phone") {
      window.location.href =
        option.href;

      return;
    }

    if (option.type === "email") {
      window.location.href =
        option.href;

      return;
    }
  }

  async function handleSendMessage(
    message: string
  ) {
    addMessage("user", message);

    setIsLoading(true);

    try {
      const response = await fetch(
        "/api/chatbot",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message,
            history: messages,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to process your request."
        );
      }

      addMessage(
        "bot",
        data.response
      );
    } catch (error) {
      console.error(
        "AI chatbot error:",
        error
      );

      addMessage(
        "bot",
        "Sorry, I'm having trouble responding right now. Please try again or contact our customer service team."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleReset() {
    setCurrentMenu("welcome");

    setMessages([
      createMessage(
        "bot",
        chatbotMenus.welcome.message
      ),
    ]);

    setIsLoading(false);
  }

  if (!menu) {
    return null;
  }

  return (
    <>
      {isOpen ? (
        <ChatWindow
          messages={messages}
          options={menu.options}
          onSelect={handleOption}
          onClose={() => setIsOpen(false)}
          onReset={handleReset}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      ) : (
        <ChatButton
          onClick={() => setIsOpen(true)}
        />
      )}
    </>
  );
}