import axios from "axios"
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { WishListContext } from "../../Context/WishListContext";

export default function ProductDetails() {

const {productId} = useParams();
console.log({productId});

const{addToCart} = useContext(CartContext);
const {addToWishList}= useContext(WishListContext);
const [ProductDetail ,setProductDetails] = useState([]);



  
async function addProduct(id) {
let res = await addToCart(id)
console.log(res);

if (res.status==='success') {
  toast.success(res.message)
}else{
  toast.error('Something Wrong')
}

}

const [liked, setLiked] = useState(false);

const handleClick = () => {
  setLiked(!liked);
};


 async function added(id) {
  const add =await addToWishList(id)
  if (add.status==='success') {
    toast.success('it has been successfully added❤️')
  }else{
    toast.error('Something Wrong')
  }
}

//حلجه الي راجعه من context اعملها كوبري دايما async , await

 async function getProductDetails() {
await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
  .then((response)=>setProductDetails(response.data.data))
  .catch((error)=> console.log(error));
  };
  useEffect(() => {
    getProductDetails();
    
  },[]);
  
//   useEffect(()=>{
    
//     document.title = ProductDetail.title
//   },[ProductDetail])
  return (
    <div className="container">
  <div className="row my-14 items-center">
          <Helmet>
                <title>{ProductDetail.title}</title>
            </Helmet>
        <div className="w-1/4 ">
        <img src={ProductDetail.imageCover} alt={ProductDetail.name} />
        </div>
        <div className="w-3/4 p-4">
        <div className="inner">
            <h2 className="text-2xl text-[#212529] font-bold font-[system-ui] ">{ProductDetail.title}</h2>
            <p className="text-gray-700 text-md my-4">{ProductDetail.description}</p>
            <small>{ProductDetail.category?.name}</small>
            <div className="flex justify-between mt-4">
                <p >{ProductDetail.price}{" "}EGP</p>
           
            <div className="flex items-center">
            <FaStar className="text-yellow-300 mx-2"/>     
            <span>{ProductDetail.ratingsAverage}</span>
            
            </div>
            </div>
            <div className="row text-center justify-between items-baseline ">
            <div className="btn2 w-3/4 " onClick={()=>{addProduct(ProductDetail.id)}} >+Add To Cart</div>
            <div onClick={()=>{added(ProductDetail.id)}} >
              <div onClick={handleClick} className={` text-[#1F513B] text-3xl transition-colors duration-200 ${liked ? 'text-red-500' : ''}`}>
              <FaHeart />
              </div>
              </div>     
            </div>
           
        </div>
        </div>
    </div>
    </div>
  
  )
}
