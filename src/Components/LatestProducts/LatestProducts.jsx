import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function LatestProducts() {
  const [products,setProducts] = useState([]);
const {addToCart} = useContext(CartContext);


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
async function addProduct(id) {
  let res = await addToCart(id)
  console.log(res);
  
  if (res.status==='success') {
    toast.success(res.message)
  }else{
    toast.error('Something Wrong')
  }
  
  }
 
  return (
    <div className="row justify-center" >
      {products.length>0 ?
      products.map((product)=>(
      <div key={product.id} className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
    <ProductItem product={product} addProduct={addProduct}  />
        
      </div>
    )):
    <Loader/>
  }
    </div>
  )
}
