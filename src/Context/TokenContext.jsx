import { createContext, useState } from "react";

export const tokenContext = createContext();

export default function TokenContextProvider({children}){


    const [token , settoken] = useState(localStorage.getItem('token'));
    //or
    // useEffect(()=>{
    //    if(localStorage.setItem('token')){
    //     settoken(localStorage.getItem('token'));
    //    } 
    // },[])

    return <tokenContext.Provider value={{token ,settoken}}>
        {children}
    </tokenContext.Provider>
 }