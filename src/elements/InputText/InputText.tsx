import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import styles from "./InputText.module.css";

export const InputText = ({
  sendAndReceiveChat,
}: {
  sendAndReceiveChat: (message: string) => void;
}) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    setValue("");
    sendAndReceiveChat(value);
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
