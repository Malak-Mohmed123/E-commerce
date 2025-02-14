import axios from 'axios'
import { useEffect, useState } from 'react'

export default function LatestProducts() {
  const [products,setProducts] = useState([]);
async function getProducts() {
  //call Api
  await axios.get('https://ecommerce.routemisr.com/api/v1/products')
  .then((response)=>{setProducts(response.data.data)})
 .catch((err)=>{console.log(err);
 })
}
useEffect(()=>{
  getProducts();
},[])
  return (
    <div>
      {products.length>0 &&
      products.map((product)=>(
        <h2>hhhh</h2>
      ))}
    </div>
  )
}
