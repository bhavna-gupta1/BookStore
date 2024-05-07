import React from 'react'
import  list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
   
    const FilterData = list.filter((data)=>data.category==="free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
   
  return (
   <>
   
   <div className='max-w-screen-2xl container max-auto md:px-20 px-2'>
   <div>
   <h className='font-semibold text-x pb-5'>Free Offered Courses</h>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus atque debitis odio dolorum quod necessitatibus vel, saepe quaerat, amet accusamus animi, perferendis dicta </p>
    
   </div>
    <div>
    <Slider {...settings}>
       
       {FilterData.map((item)=>(
        
        <Cards   key={item.id} items={item}/>
       ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook