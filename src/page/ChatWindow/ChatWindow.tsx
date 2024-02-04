import { useContext, useEffect } from "react";
import ChatBubble from "../../elements/ChatBubble/ChatBubble";
import styles from "./ChatWindow.module.css";
import useAxiosPost from "../../data-service/hooks/useAxiosPost";
import { GlobalContext, updateChat } from "../../data-service/global-context";
import { InputText } from "../../elements/InputText/InputText";

const ChatWindow: React.FC = () => {
  const { sendPostRequest, loading, error } = useAxiosPost();
  const { state, dispatch } = useContext(GlobalContext);

  const { chats } = state;

  const sendAndReceiveChat = async (message: string) => {
    try {
      const response = await sendPostRequest("/chat", {
        sender: "user",
        content: { message },
      });
      console.log({ response });
      if (response) {
        dispatch(updateChat(response));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.chatWindow}>
      {chats.map((chat, index) => {
        return (
          <ChatBubble
            sender={chat?.sender}
            key={chat?.content?.message! + index}
            lastBubble={chats.length - 1 === index}
            text={chat?.content?.message}
          />
        );
      })}
      <InputText sendAndReceiveChat={sendAndReceiveChat} />
    </div>
  );
};

export default ChatWindow;
