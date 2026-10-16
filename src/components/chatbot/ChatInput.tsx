"use client";

import {
  FormEvent,
  useState,
} from "react";

import styles from "@/styles/ChatInput.module.css";

type ChatInputProps = {
  onSend: (message: string) => Promise<void>;
  disabled?: boolean;
};

export default function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || disabled) {
      return;
    }

    setMessage("");

    await onSend(trimmedMessage);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={message}
        onChange={(event) =>
          setMessage(event.target.value)
        }
        placeholder="Ask us anything..."
        className={styles.input}
        disabled={disabled}
        aria-label="Ask a question"
      />

      <button
        type="submit"
        className={styles.sendButton}
        disabled={
          disabled || !message.trim()
        }
        aria-label="Send message"
      >
        →
      </button>
    </form>
  );
}