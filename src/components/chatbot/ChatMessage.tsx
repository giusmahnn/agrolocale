import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import styles from "@/styles/ChatMessage.module.css";

type ChatMessageProps = {
  sender: "bot" | "user";
  text: string;
};

export default function ChatMessage({
  sender,
  text,
}: ChatMessageProps) {
  const isBot = sender === "bot";

  return (
    <div
      className={`${styles.messageRow} ${
        isBot
          ? styles.botRow
          : styles.userRow
      }`}
    >
      <div
        className={`${styles.message} ${
          isBot
            ? styles.botMessage
            : styles.userMessage
        }`}
      >
        {isBot ? (
          <div className={styles.markdown}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            >
              {text}
            </ReactMarkdown>
          </div>
        ) : (
          text
        )}
      </div>
    </div>
  );
}