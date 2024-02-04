import styles from "./ChatBubble.module.css";

interface IChatBubble {
  sender: "user" | "maya";
  text: string | undefined;
  lastBubble?: boolean;
}

const ChatBubble = ({
  sender = "maya",
  text = "",
  lastBubble = false,
}: IChatBubble) => {
  return (
    <div
      className={`${styles[sender]} ${styles.chatBubble} ${
        lastBubble ? styles.lastBubble : ""
      }`}
    >
      {text}
    </div>
  );
};

export default ChatBubble;
