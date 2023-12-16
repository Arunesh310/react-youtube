import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

let App = () => {
  let [textToShow, setTextState] = useState("");
  let [foodItems, setFoodItems] = useState(["dal", "Green vegetable", "Roti"]);

  const onKeyDown = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        {/* Correct the prop name to match the function */}
        <FoodInput onKeyDown={onKeyDown} />
        {/* Remove the semicolon at the end of the line */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is the list of healthy food that are good for your health and
          wealth
        </p>
      </Container> */}
    </>
  );
};

export default App;
