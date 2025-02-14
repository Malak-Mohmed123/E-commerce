import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Pages/MainLayout/MainLayout"
import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import CounterContextProvider from "./Context/CounterContext"
import TokenContextProvider from "./Context/TokenContext"
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes"
import Cart from "./Pages/Cart/Cart"
import Categories from "./Pages/Categories/Categories"
import ProductDetails from "./Pages/ProductDetails/ProductDetails"


export default function App() {

 const routes = createBrowserRouter([
    {path:'',element:<MainLayout/>,
     children:[
      {index:true,element:<ProtectedRoutes><Home/>{""}</ProtectedRoutes> },
      {path:'Products',element:<ProtectedRoutes><Products/>{""}</ProtectedRoutes> },
      {path:'Cart',element:<ProtectedRoutes><Cart/>{""}</ProtectedRoutes> },
      {path:'Categories',element:<ProtectedRoutes><Categories/>{""}</ProtectedRoutes> },
      {path:'ProductDetails',element:<ProtectedRoutes><ProductDetails/>{""}</ProtectedRoutes> },
      {path:'Login',element:<Login/> },
      {path:'Register',element:<Register/>},

    ],
    },
]);
  return <TokenContextProvider>
   <CounterContextProvider>
     <RouterProvider router={routes}></RouterProvider>
  </CounterContextProvider>
  </TokenContextProvider>
}






/* 
pages:
MainLayout ..
Home..
Cart..
Products..
Categories..
ProductDetails..
Login..
Register..
NotFound..

components:
Navbar..
Footer..
MainSlider..
CategorySlider..*/