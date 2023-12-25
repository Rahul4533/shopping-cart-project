import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";
function Navbar() {
  const {total,item,clearScreen}=useValue();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <h1>
      <button style={{width:"6rem", textAlign:"center", height:"2rem", fontSize:"large", background: "skyblue",  color:"white", cursor:"pointer"} } onClick={clearScreen}>Clear</button></h1>
    </div>
  );
}

export default Navbar;
