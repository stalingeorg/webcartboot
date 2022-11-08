// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import sideLeft from'../assets/images/sideleft.jpg';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={sideLeft} /></SwiperSlide>
      <SwiperSlide><img src={sideLeft} /></SwiperSlide>
      <SwiperSlide><img src={sideLeft} /></SwiperSlide>
      <SwiperSlide><img src={sideLeft} /></SwiperSlide>
 
    </Swiper>
  );
};