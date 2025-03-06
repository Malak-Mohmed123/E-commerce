import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader/Loader";



export default function Categories() {


  async function getCategory() {
 const response = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
 return (response.data.data);;
  }

const {data ,isLoading } = useQuery({
  queryKey: ["categories"],
  queryFn:getCategory,

});


 

  return (
    <>
     <Helmet>
            <title>Catgories</title>
       </Helmet>
<div className="flex flex-col items-center justify-center   ">
<h1 className="m-5 mt-5 text-4xl text-[#4fa74f] font-semibold"></h1>
<div className="grid sm:grid-col-2 md:grid-cols-2 xl:grid-cols-3 gap-16 m-2 text-center ">
  {isLoading && <Loader/>}
  {data?.map((data) => (
    <div key={data.id}
     className="w-80 h-96 flex overflow-hidden text-2xl cursor-pointer object-cover relative rounded-t-lg  border border-t-0 border-spacing-4 border-gray-300 rounded-lg shadow-sm   hover:shadow-[#4fa74f]  hover:shadow-lg hover:border-gray-300 " >
      <div className="w-80 h-80 overflow-hidden ">
    <img src={data.image} alt={data.name}  className="w-full h-80 overflow-hidden"/> 
      <p  className="w-full text-[#198754]  absolute bottom-3 z-40 ">{data.name}</p>
      </div>
      </div>
     
    
  ))}
</div>   
</div>  

</>
  )
};


