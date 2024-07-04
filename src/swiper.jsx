import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function App() {
  return (
    <div className='flex items-center m-auto h-[340px] w-[95%]  '>
      <Swiper navigation={true} className="mySwiper h-[300px] w-[100%] rounded-[10px]">
        <SwiperSlide style={{ backgroundImage: 'url("/swiperwan.webp")' }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url("/two.webp")' }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url("/sri3.webp")' }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url("/sw4.webp")' }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url("/sw5.webp")' }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url("/sw6.webp")' }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url("/sw7.webp")' }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url("/sw8.webp")' }}></SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url("/sw9.webp")' }}></SwiperSlide>
      </Swiper>
    </div>
  );
}
