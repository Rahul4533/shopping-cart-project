import { createContext,useState,useContext } from "react";

const itemcontext=createContext();

function useValue(){
    const value=useContext(itemcontext);
    return value;
}
export {useValue};

function CustumIteamProvider({children}){
   
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    return(
        <itemcontext.Provider value={{total,setTotal,item,setItem}}>
          {children}
        </itemcontext.Provider>
    )
}

export default CustumIteamProvider;
