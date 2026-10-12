import { ChatOption } from '@/types/chatbot';
import styles from "../../styles/ChatOptions.module.css"



type ChatOptionsProps = {
    options: ChatOption[];
    onSelect: (option: ChatOption) => void;
};

export default function ChatOptions({
    options,
    onSelect
}: ChatOptionsProps) {

    return (
        <div className={styles.options}>
            {options.map((option) => (
                <button
                    key={option.id}
                    type="button"
                    onClick={() => onSelect(option)}
                    className={styles.optionButton}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}