// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import IMAGES from './Swpimages';
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
     
    >
       {
        IMAGES.map((item) =>
        <SwiperSlide >
          <img src={ item.image } />
        </SwiperSlide>
        ) }
    
 
    </Swiper>
  );
};