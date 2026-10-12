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

  const [currentMenu, setCurrentMenu] =
    useState("welcome");

  const [messages, setMessages] = useState<ChatMessage[]>([
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
    /*
     * Display the visitor's selected option
     * inside the conversation.
     */
    addMessage("user", option.label);

    /*
     * MENU
     *
     * Move to another chatbot menu.
     */
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

    /*
     * ANSWER
     *
     * Display a predefined answer.
     */
    if (option.type === "answer") {
      addMessage(
        "bot",
        option.answer
      );

      /*
       * Some answers can lead to another
       * chatbot menu.
       */
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

    /*
     * LINK
     *
     * Send the visitor to another page
     * on the website.
     */
    if (option.type === "link") {
      router.push(option.href);

      return;
    }

    /*
     * EXTERNAL
     * Send the visitor to an external website.
     */
    if (option.type === "external") {
        window.open(
        option.href,
        "_blank",
        "noopener,noreferrer"
        );

        return;
    }

    if (option.type === "phone") {
        window.location.href = option.href;
        return;
    }

    if (option.type === "email") {
        window.location.href = option.href;
        return;
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
  }

  /*
   * Safety check in case a menu is referenced
   * incorrectly.
   */
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
        />
      ) : (
        <ChatButton
          onClick={() => setIsOpen(true)}
        />
      )}
    </>
  );
}