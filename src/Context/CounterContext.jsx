import { createContext, useState } from "react";

export const CounterContext = createContext(0);

export default function CounterContextProvider(props){
console.log(props);
const[counter ,setcounter] = useState(1);

    return <CounterContext.Provider  value={{counter , setcounter}}>
        {props.children}
    </CounterContext.Provider>
}
