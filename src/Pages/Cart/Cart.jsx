import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CartContext } from "../../Context/CartContext";
import Loader from "../../Components/Loader/Loader";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export default function Cart() {
const {getLoggedCartData , removeCartItem ,numOfCartItems,updataProductQuantity ,ClearYourCart,setNumOfCartItems,setCartId}  = useContext(CartContext);
const [cartData , setcartData] = useState(null);
const navigate = useNavigate();
const[paymentMethod,setPaymentMethod]=useState('cashe')

async function getData() {
  const data = await getLoggedCartData();
  setcartData(data.data);
  
}

async function deleteProduct(id) {
let response=  await removeCartItem(id);
setcartData(response.data);
setNumOfCartItems(response.numOfCartItems);
setCartId(response.cartId);

}
async function ClearProducts() {
const clear =  await ClearYourCart();
setcartData(clear);

}
async function updataProduct( id , count) {
const data =  await updataProductQuantity( id , count);
setcartData(data.data);

}

useEffect(()=>{
  getData();
}, []);

  return (
    <div>
        <Helmet>
            <title>Cart</title>
          </Helmet>
          <div className="container my-10 border border-[#F8F9FA] border-spacing-3 bg-[#F8F9FA] ">
        {cartData?(
        <>
        <div className="flex flex-row justify-between">
        <div className="flex flex-col my-4 ml-10">
            <h4 className="text-2xl my-3">Card Shop</h4>
            <h5><span className="mx-1">total price:</span>
            <span className="text-[#22db14] mx-1">
            {cartData.totalCartPrice ? cartData.totalCartPrice : "0"}
              </span> EGP</h5>
          </div>
          <div >
            <select name="payment" id="payment" onChange={(e)=>{setPaymentMethod(e.target.value)}}>
              <option value="cashe">cashe</option>
              <option value="online">online</option>
            </select>
            <button
            onClick={()=>{navigate('/checkout',{state:paymentMethod})}}
            className="text-center text-md text-white bg-[#0D6EFD] hover:bg-[#0B5ED7] mr-20 mt-10 p-3 rounded-md mx-3">check out</button>
            <h5 className="text-md mr-20 text-center p-2"> total number of items:<span className="text-[#22db14] mx-1">{numOfCartItems}</span></h5>
          </div>
        </div>
          
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    {cartData.products?.length > 0? cartData.products.map((product)=> 
    <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
  <td className="p-4">
    <img src={product.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product?.title}/>
  </td>
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
    {product.product?.title}
  </td>
  <td className="px-6 py-4">
    <div className="flex items-center">
      <button
      disabled={product.count ===1}
      onClick={()=>{updataProduct(product.product.id,product.count-1)}} className="disabled:cursor-not-allowed  inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-[#22db14] rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
        <span className="sr-only">Quantity button</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
        </svg>
      </button>
      <div>
        <p>{product.count}</p>
      </div>
      <button
       onClick={()=>{updataProduct(product.product.id,product.count+1)}}
      className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-[#22db14] rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
        <span className="sr-only">Quantity button</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
        </svg>
      </button>
    </div>
  </td>
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
    {product.price} EGP
  </td>
  <td className="px-6 py-4">
    <button onClick={()=>{deleteProduct(product.product?.id)}}  className="font-medium text-red-600 dark:text-red-500 hover:underline flex flex-row"><MdDelete className="text-xl" /> <span>Remove</span></button>
  </td>
</tr>

 ): "NO Data Found"} 
    </tbody>
  </table>
  <button
  onClick={()=>{ClearProducts()}}
  className="text-center mx-auto flex justify-center my-7 text-xl border p-2 rounded border-[#22db14]">Clear Your Cart</button>
         </div>
        </>
      ):<Loader/> }
          </div>
          


            

    </div>
  )
}
