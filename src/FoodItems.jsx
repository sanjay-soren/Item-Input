import { useState } from "react";
import Item from "./Item";

function FoodItems({ items }) {
  let [activeItem, setActiveItem] = useState([]);
  let onBuyBtn = (item) => {
    let newItem = [...activeItem, item];
    setActiveItem(newItem);
  };
  return (
    <>
      <ul className="list-group list-group-flush my-list">
        {items.map((items) => (
          <Item
            key={items}
            foodItem={items}
            bought={activeItem.includes(items)}
            buyButnHandle={(event) => onBuyBtn(items, event)}
          />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
