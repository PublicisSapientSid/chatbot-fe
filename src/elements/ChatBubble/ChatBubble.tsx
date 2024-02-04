import styles from "./ChatBubble.module.css";
import avatar from "./avatar.png";

interface IChatBubble {
  sender: "user" | "maya";
  text: string | undefined;
  lastBubble?: boolean;
  firstBubble?: boolean;
}

const ChatBubble = ({
  sender = "maya",
  text = "",
  lastBubble = false,
  firstBubble = false,
}: IChatBubble) => {
  return (
    <>
      <div
        className={`${styles[sender]} ${styles.chatBubble} ${
          lastBubble ? styles.lastBubble : ""
        } ${firstBubble ? styles.firstBubble : ""}`}
      >
        {sender === "maya" && (
          <img src={avatar} className={styles.avatarLogo} alt="logo" />
        )}
        {text}
      </div>
    </>
  );
};

export default ChatBubble;
