import { useContext, useEffect, useRef } from "react";
import ChatBubble from "../../elements/ChatBubble/ChatBubble";
import styles from "./ChatWindow.module.css";
import useAxiosPost from "../../data-service/hooks/useAxiosPost";
import { GlobalContext, updateChat } from "../../data-service/global-context";
import { InputText } from "../../elements/InputText/InputText";
import { ToggleSwitch } from "../../elements/ToggleSwitch/ToggleSwitch";

const ChatWindow: React.FC = () => {
  const { sendPostRequest, loading, error } = useAxiosPost();
  const { state, dispatch } = useContext(GlobalContext);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // scroll to bottom of the screen
    scrollIndicatorRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log({ scrollIndicatorRef });
  }, [state]);

  return (
    <div className={styles.chatWindow}>
      <ToggleSwitch labels={["Write", "Speak"]} />
      {chats.map((chat, index) => {
        return (
          <ChatBubble
            sender={chat?.sender}
            key={chat?.content?.message! + index}
            lastBubble={chats.length - 1 === index}
            firstBubble={index === 0}
            text={chat?.content?.message}
          />
        );
      })}
      <span className={styles.scrollIndicator} ref={scrollIndicatorRef}></span>
      <InputText sendAndReceiveChat={sendAndReceiveChat} />
    </div>
  );
};

export default ChatWindow;
