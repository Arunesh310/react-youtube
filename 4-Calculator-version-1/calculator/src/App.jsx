import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
import { useState } from "react";

let App = () => {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (event) => console.log("button clicked" + event);
  return (
    <div className={styles.calculator}>
      <Display dispayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
};

export default App;
