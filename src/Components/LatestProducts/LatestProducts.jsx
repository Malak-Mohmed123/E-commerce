import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../Context/WishListContext";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import ProductItem from "../../Components/ProductItem/ProductItem";

export default function Products() {
const {addToCart ,setNumOfCartItems ,setCartId} = useContext(CartContext);
const {addToWishList } = useContext(WishListContext);
const [liked, setLiked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]);

const handleClick = () => {
  setLiked(!liked);
};

  async function handleLike(id) {
    let add = await  addToWishList(id)
    if (add.status==='success') {
      toast.success('it has been successfully added❤️')
    }else{
      toast.error('Something Wrong')
    }
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

  async function addProductWishList(id) {
    let add = await addToWishList(id)
    if (add.status==='success') {
      toast.success('it has been successfully added❤️')
    }else{
      toast.error('Something Wrong')
    }
    }
    
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://ecommerce.routemisr.com/api/v1/products"); 
      setProducts(response.data.data); 
      setFilteredProducts(response.data.data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  fetchProducts();
}, []);

useEffect(() => {
  if (searchTerm === "") {
    setFilteredProducts(products);
  } else {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFilteredProducts(filtered); 
  }
}, [searchTerm, products]);

const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
};
    


 
  return (
    <>
      <div className="container  my-5 " >
       <div className="mx-auto text-center">
        <input
          type="text"
          className="w-[65%] my-10 rounded-lg border border-slate-300 focus:shadow-2xl focus:border-[#4FA74F] focus:shadow-[#4FA74F]"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange} 
        />
        <div className="grid sm:grid-col-2 md:grid-cols-3 xl:grid-cols-4  gap-5 m-10 text-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  color: product.title
                    .toLowerCase()
                    .startsWith(searchTerm.toLowerCase()) 
                    ? "gren"
                    : "black",
                }}>
                <div className="w-full p-2 ">
         <ProductItem product={product} addProduct={addProduct} addProductWishList={addProductWishList} handleLike={handleLike} handleClick={handleClick}  /> 
         </div>
              </div>
            ))
          ) : (
            <div>No products match your search</div> 
          )}
        </div>
      </div>
  
     
      </div>
    </>
   
  )
}

 