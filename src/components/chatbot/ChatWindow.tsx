"use client";

import {
  ChatMessage as ChatMessageType,
  ChatOption,
} from "@/types/chatbot";

import ChatMessage from "./ChatMessage";
import ChatOptions from "./ChatOptions";
import ChatInput from "./ChatInput";

import styles from "@/styles/ChatWindow.module.css";

type ChatWindowProps = {
  messages: ChatMessageType[];
  options: ChatOption[];
  onSelect: (option: ChatOption) => void;
  onClose: () => void;
  onReset: () => void;
  onSendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
};

export default function ChatWindow({
  messages,
  options,
  onSelect,
  onClose,
  onReset,
  onSendMessage,
  isLoading,
}: ChatWindowProps) {
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <h2 className={styles.title}>
            Agrolocale Customer Service
          </h2>

          <p className={styles.subtitle}>
            We&apos;re here to help
          </p>
        </div>

        <div className={styles.headerActions}>
          <button
            type="button"
            onClick={onReset}
            className={styles.restartButton}
          >
            Restart
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className={styles.closeButton}
          >
            ×
          </button>
        </div>
      </div>

      <div className={styles.messages}>
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            sender={message.sender}
            text={message.text}
          />
        ))}

        {isLoading && (
          <ChatMessage
            sender="bot"
            text="Please wait..."
          />
        )}
      </div>

      <div className={styles.bottomSection}>
        <ChatOptions
          options={options}
          onSelect={onSelect}
        />

        <div className={styles.aiSection}>
          <p className={styles.aiLabel}>
            Ask us anything
          </p>

          <ChatInput
            onSend={onSendMessage}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
}