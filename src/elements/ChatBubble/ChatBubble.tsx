import { useContext } from "react";
import {
  GlobalContext,
  postNewChatMessage,
} from "../../data-service/global-context";
import styles from "./ChatBubble.module.css";
import avatar from "./avatar.png";

interface IChatBubble {
  sender: "user" | "maya";
  text: string | undefined;
  lastBubble?: boolean;
  firstBubble?: boolean;
  buttons?: { text: string; value: string }[];
  sendAndReceiveChat: (message: string) => void;
}

const ChatBubble = ({
  sender = "maya",
  text = "",
  lastBubble = false,
  firstBubble = false,
  buttons = [],
  sendAndReceiveChat,
}: IChatBubble) => {
  const { dispatch } = useContext(GlobalContext);

  const handleButtonClick = (value: string) => {
    sendAndReceiveChat(value);
    dispatch(
      postNewChatMessage({
        sender: "user",
        content: { message: value },
      })
    );
  };
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
        {buttons.length > 0 && (
          <div className={styles.buttonChoices}>
            {buttons.map((button) => {
              return (
                <div
                  className={styles.choiceButton}
                  onClick={() => handleButtonClick(button.value)}
                >
                  {button.text}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBubble;
