import styles from "./ChatBubble.module.css";

interface IChatBubble {
  sender: "user" | "maya";
  text: string | undefined;
}

const ChatBubble = ({ sender = "maya", text = "" }: IChatBubble) => {
  return <div className={`${styles[sender]} ${styles.chatBubble}`}>{text}</div>;
};

export default ChatBubble;
