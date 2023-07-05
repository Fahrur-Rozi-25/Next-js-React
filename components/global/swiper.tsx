'use client'
// Import Swiper React components
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation , EffectCards } from 'swiper/modules';

export default function Swipers() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s : number, time : number, progress : number) => {
    if (progressCircle.current) {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        
    }
    if (progressContent.current) {
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <>
      <Swiper
      effect={'cards'}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation , EffectCards]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://webtopup-3.vercel.app/img/1204924.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://webtopup-3.vercel.app/img/stretched-1920-1080-1149777.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://webtopup-3.vercel.app/img/slider-5.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://webtopup-3.vercel.app/img/stretched-1920-1080-1123246.jpg" alt="" /></SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}