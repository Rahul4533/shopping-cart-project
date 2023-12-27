import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";

const itemcontext = createContext();

function useValue() {
  const value = useContext(itemcontext);
  return value;
}
export { useValue };

function CustumIteamProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showcart,setShowcart]=useState(false);
  const handleAdd = (price) => {
    setTotal(price + total);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    setTotal((prevState) => prevState - price);
    setItem(item - 1);
  };
  const clearScreen=()=>{
      setItem(0);
      setTotal(0);

  }
    
  const toggle=()=>{
     setShowcart(!showcart);

  }
  
  return (
    <itemcontext.Provider value={{ total, item, handleAdd, handleRemove ,clearScreen,toggle}}>
      {showcart && <CartModal toggle={toggle}/>}
      {children}
    </itemcontext.Provider>
  );
}

export default CustumIteamProvider;
