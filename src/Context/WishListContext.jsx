import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const WishListContext = createContext();
const headers ={token:localStorage.getItem("token")};


export default function WishlistContextProvider({children}) {
const[WishlistId,setWishlistId]= useState(null);


function addToWishlist(id) {
  return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',
     {productId:id} //body
     ,{headers}   //headers
    ).then((response)=>response.data
    ).catch((error)=>console.log(error));

}
 function getLoggedWishlistData() {
  return  axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers,})
    .then((response)=>response.data)
    .catch((error)=>error);
}
function removeWishlistItem(productId) {
 return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
    headers,
  }).then(response => response.data).catch((error)=>error);
}



async function getData(){
let response = await getLoggedWishlistData();
setWishlistId(response.wishlistId)


}

useEffect(()=>{
  getData();
}, []);


    

    return <WishListContext.Provider value={{addToWishlist, getLoggedWishlistData , removeWishlistItem  }}>
      {children}</WishListContext.Provider>
}
