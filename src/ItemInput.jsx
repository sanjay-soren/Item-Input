// import styles from"./ItemInput.module.css";
// const ItemInput =()=>{
//     const changeMethod =(event)=>{
//         console.log(event.target.value)
//     }

//     return <>
//     <input className={styles.input} type="text" placeholder="Enter your food" onChange={changeMethod}/>
// </>
// };
// export default ItemInput;
function ItemInput({ handleKeyDown }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Enter food item"
      onKeyDown={handleKeyDown}
    />
  );
}

export default ItemInput;
