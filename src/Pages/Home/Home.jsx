import {useContext} from "react"
import { CounterContext } from "../../Context/CounterContext"
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import MainSlider from "../../Components/MainSlider/MainSlider";
import { Helmet } from "react-helmet";

export default function Home() {
let {counter ,setcounter} = useContext(CounterContext)
console.log(counter);
console.log(setcounter);

  return (
    <div className="container"> 
      <Helmet>
                <title>HomePage</title>
            </Helmet>
      <MainSlider/>
      <CategorySlider/>
    <LatestProducts/>
    </div>
  )
}
