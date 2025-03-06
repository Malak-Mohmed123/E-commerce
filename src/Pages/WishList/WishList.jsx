import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader/Loader";
import { MdDelete } from "react-icons/md";
import { WishListContext } from "../../Context/WishListContext";
import toast from "react-hot-toast";
import { CartContext } from "../../Context/CartContext";



export default function WishList() {
const [WishlistId , setWishlistId] = useState(null);
const {getLoggedWishlistData , removeWishlistItem} =useContext(WishListContext);
const {addToCart,setCartId,setNumOfCartItems} =useContext(CartContext);


async function getData() {
  const data = await getLoggedWishlistData();
  setWishlistId(data.data);
  
}

async function deleteProduct(id) {
const data=  await removeWishlistItem(id);
setWishlistId(data.data);


}

async function addProduct(id) {
  let response = await addToCart(id)
 
  if (response.status==='success') {
    toast.success(response.message)
    setNumOfCartItems(response.numOfCartItems);
    setCartId(response.cartId)
  }else{
    toast.error('Something Wrong')
  }
  
  }
useEffect(()=>{
  getData();
}, []);

  return (
    <div>
        <Helmet>
            <title>Wishlist</title>
          </Helmet>
          <div className="container w-3/4 my-10 border border-[#F8F9FA] border-spacing-3 bg-[#F8F9FA]">
        {WishlistId?(
        <>
          <div className=" overflow-x-auto shadow-md sm:rounded-lg">
  <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
   
    <div>
    {WishlistId?.length > 0? WishlistId?.map((product)=> 
    <div key={product._id}
     className=" relative flex flex-row border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
  
  <div className="p-4">
    <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product?.title}/>
  </div>

  <div className="flex flex-row"> 
  <div className=" px-6 py-4 flex flex-col justify-center  font-semibold text-gray-900 dark:text-white">
    <span className="text-md font-[system-ui]">{product?.title}</span>
    <p>{product.count}</p>
    <span className="px-6 py-4 font-semibold text-[#198754] dark:text-white">
    {product.price} EGP
  </span>
  <div className="px-6 py-4">
    <button onClick={()=>{deleteProduct(product?.id)}}  className="font-medium text-red-600 dark:text-red-500 hover:underline flex flex-row"><MdDelete className="text-xl" /> <span>Remove</span></button>
  </div>
 
  </div>
  <button
  onClick={()=>addProduct(product.id)}
  className="absolute top-24 right-16 text-xl text-black border border-[#198754] rounded p-2">
   <span  onClick={()=>{deleteProduct(product?.id)}}> add To Cart</span>
    </button>
 </div>
   
  
</div>

 ): "NO Data Found"} 
    </div>
  </div>
 
         </div>
        </>
      ):<Loader/> }
          </div>
          




            

    </div>
  )
}
