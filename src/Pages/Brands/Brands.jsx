import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card } from "flowbite-react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { LoaderIcon } from 'react-hot-toast';

const fetchImages = async () => {
  const response = await axios.get('https://ecommerce.routemisr.com/api/v1/brands'); 
  return (response.data.data);;
 
  
};

const Brands = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState(null);

  const {data,isLoading ,isError } = useQuery({
       queryKey: ["images"],
           queryFn:fetchImages,
        
        });
        
  if (isLoading) {
    return <p className='mx-auto flex justify-center items-center text-9xl'><LoaderIcon/></p>;
  }

  if (isError) {
    return <p>Error loading images</p>;
  }


  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleNameClick = (name) => {
    setSelectedName(name);
  };
 
  const handleCloseCard = () => {
    setSelectedImage(null);
  };
 

  return (
    <>
    <Helmet>
    <title>Brands</title>
  </Helmet>
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="m-5 mt-10 text-4xl text-[#4fa74f] font-semibold">All Brands</h1>
      <div className="grid sm:grid-col-2 md:grid-cols-3 xl:grid-cols-4  gap-5 m-10 text-center  ">
        {data.map((data) => (
          <div key={data._id} >
            <div
            onClick={()=> handleNameClick(data?.name)}
            className=" cursor-pointer object-cover rounded-t-lg  border border-spacing-5 border-gray-300 rounded-lg shadow-sm  hover:shadow-gray-500 hover:shadow-lg hover:border-gray-300  ">
          <img
            src={data.image} 
            alt={data.name}
            className="w-full h-full "
            onClick={() => handleImageClick(data?.image)}/> 
            <p  className="m-6">{data.name}</p>
            </div>
            </div>
           
          
        ))}
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <Card className="relative w-96 h-96">
            <div className="flex flex-row items-center justify-between">
            {selectedName && (<div className="text-2xl text-[#4FA75F]">{selectedName}</div>)}
              <img src={selectedImage} alt={selectedImage} className="w-full h-full object-cover border-l-0 border-r-0 border border-spacing-4 border-r-slate-950" />
              
              <button
                className="absolute top-2 right-2 text-gray-700 rounded-full p-1"
                onClick={handleCloseCard}
              > X
              </button>
              <button onClick={handleCloseCard} className=" absolute bottom-1 right-4 px-3 py-2 rounded-md text-white bg-[#6C757D]">Close</button>
            </div>
          </Card>
        </div>
      )}
    </div>
    </>
  );
};

export default Brands;
