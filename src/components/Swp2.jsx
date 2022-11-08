import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import IMAGES from './Swpimages';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swp2.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper"; 

export default () => {
    return (
   
      <div className='container-fluid scroll_page' style={{height: "100vh",background:"#000"}}>
        <div className="row h-100 justify-content-center align-items-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
       IMAGES.map((item) =>
        
        <SwiperSlide>
          <img src={ item.image } />
        </SwiperSlide>
        ) }
       
      </Swiper>
   </div>
   </div>
  );
};
