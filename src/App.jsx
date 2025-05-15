import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./FoodItems";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";
import ItemInput from "./ItemInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItem] = useState(["Egg", "Milk", "Ghee"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFood = event.target.value;
      event.target.value = "";
      let newItem = [...foodItems, newFood];
      setFoodItem(newItem);
    }
  };
  return (
    <>
      <center>
        <Container>
          <div className="Container">
            <h1 className="heading">Healthy Foods</h1>
            <ItemInput handleKeyDown={onKeyDown} />
            <FoodItems items={foodItems} />
            <ErrorMessage items={foodItems} />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
