/* const Item =(props)=>{
    return<>
        <li className="list-group-item">{props.foodItem}</li>
    </>
}
export default Item;**/
// 2nd method
import styles from "./Item.module.css";
const Item = ({ foodItem, bought, buyButnHandle }) => {
  //   const buyButnHandle = (foodItem) => {
  //     alert(`${foodItem} being bought`);
  //   };
  return (
    <>
      <center>
        <div className={`${styles["list-div"]}`}>
          <li
            className={`${styles["my-list"]} list-group-item ${
              bought && "active"
            }`}
          >
            {foodItem}
            <button
              //   className={`${styles.button} btn btn-info`} onClick={() => buyButnHandle(foodItem)}
              className={`${styles.button} btn btn-info`}
              onClick={buyButnHandle}
            >
              Buy
            </button>
          </li>
        </div>
      </center>
    </>
  );
};
export default Item;
// 3rd method
/*const Item = (props)=>{
    let {fkoodItem}= props;
    return<>
    <li className="list-group-item">{foodItem}</li>
    </>
}
export default Item; **/
