import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import styles from "./InputText.module.css";
import {
  GlobalContext,
  postNewChatMessage,
} from "../../data-service/global-context";

export const InputText = ({
  sendAndReceiveChat,
}: {
  sendAndReceiveChat: (message: string) => void;
}) => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(GlobalContext);

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    setValue("");
    sendAndReceiveChat(value);
    dispatch(
      postNewChatMessage({
        sender: "user",
        content: { message: value },
      })
    );
  };

  return (
    <div className={styles.inputText}>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className={styles.inputTextBox}
      />
      <button className={styles.button} onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
      </button>
    </div>
  );
};
