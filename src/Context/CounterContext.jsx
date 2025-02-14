import { createContext, useState } from "react";

export const CounterContext = createContext(0);

export default function CounterContextProvider(props){
console.log(props);
 let x =4
const[counter ,setcounter] = useState(x);

    return <CounterContext.Provider  value={{counter , setcounter}}>
        {props.children}
    </CounterContext.Provider>
}
