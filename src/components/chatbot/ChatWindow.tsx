"use client";

import {
    ChatMessage as ChatMessageType,
    ChatOption
} from "@/types/chatbot";
import ChatMessage from "./ChatMessage";
import ChatOptions from "./ChatOptions";
import styles from "../../styles/ChatWindow.module.css";

type ChatWindowProps = {
    messages: ChatMessageType[];
    options?: ChatOption[];
    onSelect: (option: ChatOption) => void;
    onClose: () => void;
    onReset: () => void;
};


export default function ChatWindow({
    messages,
    options,
    onSelect,
    onClose,
    onReset
}: ChatWindowProps) {
    return (
        <div className={styles.window}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerInfo}>
                    <h2 className={styles.title}>
                        Customer Service
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

            {/* Conversation */}
            <div className={styles.messages}>
                {messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        sender={message.sender}
                        text={message.text}
                    />
                ))}
            </div>

            {/* Options */}
            <div className={styles.optionsContainer}>
                <ChatOptions
                    options={options ?? []}
                    onSelect={onSelect}
                />
            </div>
        </div>
    );
}