// create a toggleswitch element which toggles a button
import React from "react";
import styles from "./ToggleSwitch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";

interface IToggleSwitch {
  labels: string[];
}

export const ToggleSwitch = ({ labels }: IToggleSwitch) => {
  const [label1, label2] = labels;
  console.log({ label1 });
  return (
    <div className={styles.switchesContainer}>
      <input
        type="radio"
        id={"switch" + label1}
        name="switchPlan"
        value={label1}
        defaultChecked={true}
      />
      <input
        type="radio"
        id={`switch${label2}`}
        name="switchPlan"
        value={label2}
      />
      <label htmlFor={"switch" + label1}>{label1}</label>
      <label htmlFor={`switch${label2}`}>{label2}</label>
      <div className={styles.switchWrapper}>
        <div className={styles.switch}>
          <div>
            <FontAwesomeIcon icon={faKeyboard} size="lg" /> {label1}
          </div>
          <div>
            <FontAwesomeIcon icon={faMicrophoneAlt} size="lg" /> {label2}
          </div>
        </div>
      </div>
    </div>
  );
};
