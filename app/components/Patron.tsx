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
import patron1 from "../images/jia-logo.jpg"
import patron2 from "../images/founder-club.png"
import Image from 'next/image';

const Patron: NextComponentType = () => {
  return (
    <section id="patronSection" className={`section pt-10 pb-7 md:pt-16 md:pb-10`}>
      <div className='innerDiv mx-auto'>
        <h3 className='text-center sm:text-3xl text-2xl text-primary font-[600] mb-[20px] md:text-4xl'>Patron Members</h3>
        <div className=''>
          <Swiper
            className='mySwiper'
            modules={[Autoplay]}
            //spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                // spaceBetween: 15,
              },
              // 640: {
              //   width: 640,
              //   slidesPerView: 3,
              //   //spaceBetween: 20,
              // },
              // 768: {
              //   width: 768,
              //   slidesPerView: 4,
              //   // spaceBetween: 20,
              // },
              // 1024: {
              //   width: 1024,
              //   slidesPerView: 6,
              //   // spaceBetween: 30,
              // },
              // 1140: {
              //   width: 1024,
              //   slidesPerView: 8,
              //  // spaceBetween: 30,
              // },
            }}
            autoplay
            loop
          >
            <SwiperSlide>
              <div className='md:mx-6'>
                <Image src={patron1} className="object-contain min-w-[270px] max-w-[280px]" alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='md:mx-6'>
                <Image src={patron2} className="object-contain min-w-[250px] max-w-[260px]" alt='' />
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
