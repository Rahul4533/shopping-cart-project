import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";
function Items() {
  
  return (
    <>
      
        <div className={styles.wrapper} >
        {data.map((item,i)=>(
          <div key={i}>
        <ItemCard name={item.name} price={item.price} />
        </div>
        
      ))}
      </div>
      
   </>
  );
}

export default Items;
