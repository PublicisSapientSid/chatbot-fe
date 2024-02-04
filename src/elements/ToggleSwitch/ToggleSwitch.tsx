// create a toggleswitch element which toggles a button
import React from "react";
import styles from "./ToggleSwitch.module.css";

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
          <div>{label1}</div>
          <div>{label2}</div>
        </div>
      </div>
    </div>
  );
};
