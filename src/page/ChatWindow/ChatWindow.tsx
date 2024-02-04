import { useContext, useEffect } from "react";
import ChatBubble from "../../elements/ChatBubble/ChatBubble";
import styles from "./ChatWindow.module.css";
import useAxiosPost from "../../data-service/hooks/useAxiosPost";
import { GlobalContext, updateChat } from "../../data-service/global-context";

const ChatWindow: React.FC = () => {
  const { sendPostRequest, loading, error } = useAxiosPost();
  const { state, dispatch } = useContext(GlobalContext);

  const { chats } = state;

  useEffect(() => {
    sendAndReceiveChat();
  }, []);

  const sendAndReceiveChat = async () => {
    try {
      const response = await sendPostRequest("/chat", {
        sender: "user",
        content: { message: "Hello" },
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
      {chats.map((chat) => {
        return (
          <ChatBubble sender={chat?.sender} text={chat?.content?.message} />
        );
      })}
    </div>
  );
};

export default ChatWindow;
