import { createContext, useState, useContext } from "react";

const itemcontext = createContext();

function useValue() {
  const value = useContext(itemcontext);
  return value;
}
export { useValue };

function CustumIteamProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
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
  return (
    <itemcontext.Provider value={{ total, item, handleAdd, handleRemove ,clearScreen}}>
      {children}
    </itemcontext.Provider>
  );
}

export default CustumIteamProvider;
