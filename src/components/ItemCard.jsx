import styles from "../styles/ItemCard.module.css";

import { useValue } from "../itemContext";
function ItemCard({ name, price }) {
  let { setItem, item ,total,setTotal} = useValue();
  

  const handleAdd = () => {
    setTotal(price + total);
    setItem((item += 1));
  };

  const handleRemove = () => {
    if (total <= 0) {
      return;
    }
    setTotal((prevState) => prevState - price);
    setItem((item -= 1));
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={(i) => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
