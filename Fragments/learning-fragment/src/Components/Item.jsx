import React from "react";
import styles from "./item.module.css";

const Item = ({ foodItem, handleBuyButton }) => {
  console.log(`${foodItem} is being bought`);

  return (
    <li className={`${styles["kg-item"]} list-item list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
