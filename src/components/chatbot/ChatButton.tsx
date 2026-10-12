"use client";

import styles from "../../styles/ChatButton.module.css";

type ChatButtonProps = {
  onClick: () => void;
};

export default function ChatButton({
  onClick,
}: ChatButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open customer service"
      className={styles.button}
    >
      <span className={styles.icon} aria-hidden="true">
        💬
      </span>
    </button>
  );
}