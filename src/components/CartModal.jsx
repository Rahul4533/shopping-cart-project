import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";

function CartModal() {
  const {toggle,clearScreen,cart,total}=useValue();
  
 console.log(cart);
  return (
    <div className={styles.cartModal}>
     <div className={styles.closeButton} onClick={toggle}>
        Close
  </div> 
      <div className={styles.clearButton} onClick={clearScreen}>
        Clear
</div> 
      <div className={styles.itemContainer}>
        {cart.map((item,i)=>{
          return(
            <div className={styles.cartCard}key={i}>
              <h1>{item.name}</h1>
              <h1>X{item.qty}</h1>
              <h1>X{item.qty * item.price}</h1>
              </div>
          )
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>${total}</div>
      </div>
    </div>
  );
}

export default CartModal;
