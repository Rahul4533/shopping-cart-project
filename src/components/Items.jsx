import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";
function Items() {
  
  return (
    <>
      {data.map((item,i)=>(
        <div className={styles.wrapper} key={i}>
        <ItemCard name={item.name} price={item.price}/>
        </div>
      ))}
      
   </>
  );
}

export default Items;
