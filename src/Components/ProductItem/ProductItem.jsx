import { useContext,  useState } from "react";
import toast from "react-hot-toast";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WishListContext } from "../../Context/WishListContext";


export default function ProductItem(props) {

  const {product ,addProduct   } = props ;
  const {addToWishList}= useContext(WishListContext);
  const [liked, setLiked] = useState(false);
  
  

  const handleClick = () => {
    setLiked(!liked);
  };


  async function added(id) {
    const add =await addToWishList(id)
    if (add.status==='success') {
      console.log(add.data);
      
      toast.success('it has been successfully added❤️')
    }else{
      toast.error('Something Wrong')
    }
  }

 
      

  return (
    <div className="inner product p-2 border border-transparent rounded-md ">
      <Link to={`/ProductDetails/${product.id}`}>
    <img src={product.imageCover} className='w-full' alt={product.name} />
    <small className="text-green-600">{product.category?.name}</small>
    <h5 className='font-semibold my-3 '>{product.title.split(" ").slice(0,3).join(" ")}</h5>
    <div className="flex justify-between">
      <p>{product.price}EGP</p>
      <div className='flex items-center'>{" "}<span className='mx-1' >{" "}<FaStar className='text-yellow-400' /> </span>{product.ratingsAverage}</div>
     </div>
    </Link>

      <div onClick={handleClick}  className={`text-2xl transition-colors duration-200 ${liked ? 'text-red-500' : ''}`}>
        <span onClick={()=>{added(product.id)}} className="row justify-end text-2xl my-1  disabled:text-black  cursor-pointer ">
      <FaHeart />
      {console.log(product.id)}
      
      </span>
      </div>
      
    <div onClick={()=>{addProduct(product.id)}} className="btn ">Add to cart</div>

  </div>
  )
}
