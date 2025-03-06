import axios from "axios";
import { createContext } from "react";

export const WishListContext = createContext();

const headers ={token:localStorage.getItem("token")};




export function addToWishList(id) {
  return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',
     {productId:id} //body
     ,{headers}   //headers
    ).then((response)=>response.data
    ).catch((error)=>console.log(error));

}
 function getLoggedWishListData() {
  return  axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers})
    .then((response)=>response.data)
    .catch((error)=>error);
}
function removeWishListItem(productId) {
 return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
    headers,
  }).then(response => response.data).catch((error)=>error);
}

export default function WishListProvider({children}) {
    

    return <WishListContext.Provider value={{addToWishList, getLoggedWishListData , removeWishListItem }}>{children}</WishListContext.Provider>
}
