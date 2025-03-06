import axios from "axios";
import { useEffect, useState } from "react"
import Slider from "react-slick";

const  settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
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
export default function CategorySlider() {

  const [category , setcategory] =useState([]);
  async function getCategory() {
    await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    .then((response)=>setcategory(response.data.data))
    .catch((error)=>(console.log(error)
    ))
  }
  useEffect(()=>{getCategory()
    },[])
  return (
    <>   
    <div className="my-8 mx-10">
    <Slider {...settings}>
    {category.map((category)=>(
          <div key={category._id}>
            {console.log(category)}
            <img className="w-full h-[300px]" src={category.image} alt={category.name}/>
          <h4 className="m-3 font-semibold ">{category.name}</h4>
        </div>
      ))}
    
    
    </Slider>
    </div>
  </>
  )
}
//https://ecommerce.routemisr.com/api/v1/categories