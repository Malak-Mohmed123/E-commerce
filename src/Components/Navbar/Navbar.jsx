import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { tokenContext } from "../../Context/TokenContext";
import { GiShoppingCart } from "react-icons/gi";


export default function Navbar() {


const {token ,settoken}= useContext(tokenContext);
const navigate =useNavigate();
console.log(token);
function logoutUser(){
  // remove localstorage
  //set context null
  //navigate to Login
  localStorage.removeItem('token')
  settoken(null);
  navigate('/Login')
}


  return ( <>
  
<nav className="bg-green-100 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">

<div className="flex items-center">

<Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                <GiShoppingCart className="w-10 h-10 text-green-600" />


      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mx-2">FreshMarket</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
   {token &&<div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 mx-3">
        <li>
          <NavLink to={'/'} className="block py-2 px-3 text-white bg-green-700 rounded-sm md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500" aria-current="page"><span className="m-1">Home</span></NavLink>
        </li>
        <li>
          <NavLink to={'Cart'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</NavLink>
        </li>
        <li>
          <NavLink to={'WishList'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Wish List</NavLink>
        </li>
        <li>
          <NavLink to={'Products'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</NavLink>
        </li>
        <li>
          <NavLink to={'Categories'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</NavLink>
        </li>
        <li>
          <NavLink to={'brands'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</NavLink>
        </li>
      </ul>
    </div>} 
</div>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
        <li>
          <NavLink to={'login'} className="block py-2 px-3  bg-green-700 rounded-sm md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500 text-black" aria-current="page"><FaFacebook className="text-black"/></NavLink>
        </li>
        <li>
          <NavLink to={'login'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><FaInstagram /></NavLink>
        </li>
        <li>
          <NavLink to={'login'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><FaYoutube/></NavLink>
        </li>
        <li>
          <NavLink to={'login'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><FaLinkedin/></NavLink>
        </li>
        <li>
          <NavLink to={'login'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><FaTiktok/></NavLink>
        </li>
        {token &&(
          <li>
          <div onClick={() =>{logoutUser();

            }} className=" cursor-pointer block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SignOut</div>
        </li>
        )}
        {!token &&(
        <>
        <li>
          <NavLink to={'Login'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
        </li>
        <li>
          <NavLink to={'Register'} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</NavLink>
        </li></>)}
      </ul>
    </div>
  </div>
</nav>


  </>
  )
}
