import axios from "axios"
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { WishListContext } from "../../Context/WishListContext";
import Slider from "react-slick";

export default function ProductDetails() {

const {productId} = useParams();
const [liked, setLiked] = useState(false);
const{addToCart,setNumOfCartItems,setCartId} = useContext(CartContext);
const {addToWishlist}= useContext(WishListContext);
 const [ProductDetail ,setProductDetails] = useState([]);

 const  settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplaySpeed:1000,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

  
async function addProduct(id) {
let response = await addToCart(id)

if (response.status==='success') {
  toast.success(response.message)
  setNumOfCartItems(response.numOfCartItems);
setCartId(response.cartId);
}else{
  toast.error('Something Wrong')
}

}



const handleClick = () => {
  setLiked(!liked);
};
  async function handleLike(id) {
    let add = await  addToWishlist(id)
    if (add.status==='success') {
      toast.success('it has been successfully added❤️')
    }else{
      toast.error('Something Wrong')
    }
    }
   
 async function getProductDetails() {
await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
  .then((response)=>setProductDetails(response.data.data))
  .catch((error)=> console.log(error));
  };
  useEffect(() => {
    getProductDetails();
    
  },[]);
  
  return (
    <div className="container">
  <div className="row my-14 items-center">
          <Helmet>
                <title>{ProductDetail.title}</title>
            </Helmet>
        <div className="w-full md:w-1/4 ">
        <Slider {...settings}>
          {ProductDetail.images?.map((img,i)=>(<img src={img} key={i} />))}
        </Slider>
        
        </div>
        <div className="w-full  md:w-3/4 px-4">
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
            <div onClick={()=>{handleLike(ProductDetail.id)}} >
              <div onClick={()=>handleClick(ProductDetail.id)}  className={` text-[#1F513B] text-3xl transition-colors duration-200 ${liked ? 'text-red-500' : ''}`}>
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
