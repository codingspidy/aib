'use client'

import { NextComponentType } from 'next'
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import patron3 from "../images/pnb.png"
import patron4 from "../images/jsw.jpg"
import patron5 from "../images/itc.jpg"
import patron1 from "../images/jsw.jpg"
import patron2 from "../images/itc.jpg"
import patron6 from "../images/aditya.png"
import patron7 from "../images/tata.png"
import Image from 'next/image';

const Patron:NextComponentType = () => {
  return (
    <section id="patronSection" className={`section news-section py-16 md:py-28`}>
    <div className='innerDiv mx-auto'>
      <h3 className='text-center sm:text-3xl text-2xl text-primary font-medium mb-[50px] md:text-4xl'>Patron Members</h3>
      <div className=''>
        <Swiper
          className='mySwiper flex items-center justify-between mb-2'
          modules={[Autoplay, Pagination]}
          //spaceBetween={30}
          //slidesPerView={8}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 2,
             // spaceBetween: 15,
            },
            640: {
              width: 640,
              slidesPerView: 3,
              //spaceBetween: 20,
            },
            768: {
              width: 768,
              slidesPerView: 4,
             // spaceBetween: 20,
            },
            1024: {
              width: 1024,
              slidesPerView: 6,
             // spaceBetween: 30,
            },
            // 1140: {
            //   width: 1024,
            //   slidesPerView: 8,
            //  // spaceBetween: 30,
            // },
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay
          loop
          >
          <SwiperSlide>
            <div className='mx-6'>
              <Image src={patron1} height='48' width='110' alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='mx-6'>
              <Image src={patron2} height='44' width='110' alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='mx-6'>
              <Image src={patron3} height='35' width='110' alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='mx-6'>
              <Image src={patron4} height='59' width='110' alt='' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='mx-6'>
              <Image src={patron5} height='110' width='110' alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='mx-6'>
              <Image src={patron6} height='61' width='110' alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='mx-6'>
              <Image src={patron7} height='120' width='110' alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='mx-6'>
              <Image src={patron3} width='110' height='42' alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='mx-6'>
              <Image src={patron4} width='110' height='42' alt='' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
  //   <section>
  //   <div id="clientsSlider" className='mt-12 w-fit mx-auto'>
  //     <Swiper
  //       className=''
  //       modules={[Autoplay]}
  //       //spaceBetween={30}
  //       slidesPerView={3}
  //       breakpoints={{
  //         480: {
  //           width: 320,
  //           slidesPerView: 4,
  //           // spaceBetween: 15,
  //         },
  //         640: {
  //           width: 640,
  //           slidesPerView: 5,
  //           //spaceBetween: 20,
  //         },
  //       }}
  //       autoplay
  //     >
  //       <SwiperSlide>
  //         <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={patron1} alt='' />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={patron2} alt='' />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={patron3} alt='' />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={patron4} alt='' />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={patron5} alt='' />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={patron1} alt='' />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={patron2} alt='' />
  //       </SwiperSlide>
  //     </Swiper>
  //   </div>
  // </section>
  )
}

export default Patron
