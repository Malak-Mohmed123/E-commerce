import {useContext} from "react"
import { CounterContext } from "../../Context/CounterContext"
import LatestProducts from "../../Components/LatestProducts/LatestProducts";

export default function Home() {
let {counter ,setcounter} = useContext(CounterContext)
console.log(counter);

  return (
    <div>
    <LatestProducts/>
    </div>
  )
}
