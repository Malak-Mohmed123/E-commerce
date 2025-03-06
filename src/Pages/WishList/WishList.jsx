import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader/Loader";
import { MdDelete } from "react-icons/md";
import { WishListContext } from "../../Context/WishListContext";


export default function WishList() {
const {getLoggedWishListData , removeWishListItem} = useContext(WishListContext);
const [WishListData , setWishListData] = useState(null);
console.log(WishListData);




async function getData() {
  const data = await getLoggedWishListData();
  setWishListData(data.data);
  
  
}
async function deleteProduct(id) {
let x=  await removeWishListItem(id);
setWishListData(x.data);

}

useEffect(()=>{
  getData();
}, []);

  return (
    <div>
        <Helmet>
            <title>Wish List</title>
          </Helmet>
          <div className="container my-10 border border-[#F8F9FA] border-spacing-3 bg-[#F8F9FA]">
        {WishListData?(
        <>
          <div className="flex flex-col  my-4">
            <h4 className="text-2xl my-3">Wish List Shop</h4>
            <h5><span className="mx-1">total price:</span>
            <span className="text-[#22db14] mx-1">
            {WishListData.totalCartPrice ? WishListData.totalCartPrice : "0"}
              </span> EGP</h5>
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
    {WishListData.products?.length > 0? WishListData.products.map((product)=> 
    <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
  <td className="p-4">
    <img src={product.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product?.title}/>
  </td>
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
    {product.product?.title}
  </td>
  <td className="px-6 py-4">
    <div className="flex items-center">
      <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
        <span className="sr-only">Quantity button</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
        </svg>
      </button>
      <div>
        <p>{product.count}</p>
      </div>
      <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
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
    <button onClick={()=>{deleteProduct(product.product?._id)}}  className="font-medium text-red-600 dark:text-red-500 hover:underline flex flex-row"><MdDelete className="text-xl" /> <span>Remove</span></button>
  </td>
</tr>
 ): "NO Data Found"} 
    </tbody>
  </table>
         </div>
        </>
      ):<Loader/> }
          </div>
          




            

    </div>
  )
}

