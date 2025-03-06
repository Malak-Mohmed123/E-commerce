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
import NotFound from "./Pages/NotFound/NotFound"
import { Offline} from "react-detect-offline"
import { CiWifiOff } from "react-icons/ci"
import CartContextProvider from "./Context/CartContext"
import { Toaster } from "react-hot-toast"
import Brands from "./Pages/Brands/Brands"
import WishList from "./Pages/WishList/WishList"
import WishListProvider from "./Context/WishListContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Checkout from "./Pages/Checkout/Checkout"
import ALLOrders from "./Pages/ALLOrders/ALLOrders"



export default function App() {

 const routes = createBrowserRouter([
    {path:'',element:<MainLayout/>,
     children:[
      {index:true,element:<ProtectedRoutes><Home/>{""}</ProtectedRoutes> },
      {path:'Products',element:<ProtectedRoutes><Products/>{""}</ProtectedRoutes> },
      {path:'Cart',element:<ProtectedRoutes><Cart/>{""}</ProtectedRoutes> },
      {path:'checkout',element:<ProtectedRoutes><Checkout/>{""}</ProtectedRoutes> },
      {path:'allorders',element:<ProtectedRoutes><ALLOrders/>{""}</ProtectedRoutes> },
      {path:'Categories',element:<ProtectedRoutes><Categories/>{""}</ProtectedRoutes> },
      {path:'brands',element:<ProtectedRoutes><Brands/>{""}</ProtectedRoutes> },
      {path:'WishList',element:<ProtectedRoutes><WishList/>{""}</ProtectedRoutes> },
      {path:'ProductDetails/:productId',element:<ProtectedRoutes><ProductDetails/>{""}</ProtectedRoutes> },
      {path:'Login',element:<Login/> },
      {path:'Register',element:<Register/>},
      {path:'*',element:<NotFound/>},


    ],
    },
]);
const queryClient = new QueryClient()
  return (
  <QueryClientProvider client={queryClient}>
   <TokenContextProvider>
    <CartContextProvider>
      <WishListProvider>
    <CounterContextProvider>
    <Offline>
    <div className="offline fixed bottom-2 right-4 bg-green-100 p-3 font-semibold rounded z-50">
    <CiWifiOff className="inline mx-3 text-xl" />
     You Are Now Offline !
    </div>
  </Offline>
  <Toaster position="top-center"/>  
  <ReactQueryDevtools initialIsOpen={false} />
     <RouterProvider router={routes}></RouterProvider>
  </CounterContextProvider>
  </WishListProvider>
    </CartContextProvider>
  </TokenContextProvider>
  </QueryClientProvider>
  );
}






