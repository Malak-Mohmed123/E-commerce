import Slider from 'react-slick';
import img1 from './../../assets/41nN4nvKaAL._AC_SY200_.jpg'
import img2 from './../../assets/61cSNgtEISL._AC_SY200_.jpg'
import img3 from './../../assets/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg'
import img4 from './../../assets/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true
};
export default function MainSlider() {
  return ( 
    <div className="row justify-center items-center mx-auto">
      <div className="w-1/4">
      <Slider {...settings}>
        <div>
        <img className='w-72' src={img1} alt />  
        </div>
        <div>
        <img className='w-72' src={img2} alt /> 
        </div>
        </Slider>
      
      </div>
      
      <div className='w-1/4'>
    <img className="h-[250px]" src={img3} alt />    
    <img className=" h-[250px]" src={img4} alt />    
  
     </div>
    </div>
    
  )
}
