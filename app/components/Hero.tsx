'use client'
import { NextComponentType } from 'next'
import React from 'react'
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import slide1 from "../images/event1.jpg";
import slide2 from "../images/event2.jpg";
import slide3 from "../images/event3.jpg";
import slide4 from "../images/event4.jpg";
import slide5 from "../images/event6.jpg";
import slide6 from "../images/event7.jpg";
import slide7 from "../images/event8.jpg";

import Image from "next/image";
import Link from 'next/link';

const Hero: NextComponentType = () => {
    return (
        <section className=''>
            <div className="innerDiv">
                <div className="flex flex-col lg:flex-row gap-6 pt-20 lg:pt-36 pb-20">
                    <div>
                        <h1 className="text-[36px] font-[600] text-primary leading-none">Welcome to Association of International Businessmen</h1>
                        <p className="text-secondary font-[500] mt-10">Facilitating Business Since 2021</p>
                        <p className="text-primary mt-2">Association of International Businessmen aims to make significant strides in emphasizing the need for effective use of association in various businesses. Consolidating its position as a center for  promoting bilateral trade, AIB offers a vast range of services fro augmenting skills, creating a plateform for interaction/cooperation, disseminating valuable information and data and in turn enhancing business opportunities.
                        </p>
                        <Link href='#' className="bg-secondary text-white font-500 inline-block mt-3 py-2 px-4">Know More</Link>
                    </div>
                    <div id="introSwiper" className="relative h-[300px] w-full lg:max-w-[600px]">
                        {/* <div className="absolute w-full h-full inset-0 z-10 bg-black/50"></div> */}
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            slidesPerView={1}
                            navigation={true}
                            autoplay={{
                                delay: 4000,
                            }}
                        >
                            <SwiperSlide>
                                <Image
                                    className=" h-[300px] w-full max-w-[600px] product-image object-cover"
                                    src={slide2}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className=" h-[300px] w-full max-w-[600px] product-image object-cover"
                                    src={slide1}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className=" h-[300px] w-full max-w-[600px] product-image object-cover"
                                    src={slide3}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="h-[300px] w-full max-w-[600px] product-image object-cover object-top"
                                    src={slide4}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="h-[300px] w-full max-w-[600px] product-image object-cover"
                                    src={slide5}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="h-[300px] w-full max-w-[600px] product-image object-cover object-top"
                                    src={slide6}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="h-[300px] w-full max-w-[600px] product-image object-cover"
                                    src={slide7}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/navigation";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import slide1 from "../images/conf-1.jpg";
// import slide2 from "../images/conf-2.jpg";
// import slide3 from "../images/conf-3.jpg";
// import Image from "next/image";
// import Link from "next/link";
// import { useRef } from "react";

// export default function Hero() {
//   const swiperPagination = useRef(null);

//   return (
//     <section id="introSlider">
//       <div className="relative">
//         <div className="absolute z-20 inset-0 bg-black/50" />
//         <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           <h1 className="text-[36px] text-secondary">Welcome to Association of International Businessmen</h1>
//           <p className="text-[20px] text-primary">Facilitating Business Since 1925</p>
//           <p className="text-white">The Indian Chamber of Commerce, or ICC as it is popularly known, is the premier body of business and industry and only National Chamber of Commerce having headquarter in Kolkata.</p>
//           <Link href='#' className="bg-secondary inline-block py-2 px-4">Know More</Link>
//         </div>
//         <div>
//           <div className="">
//             <Swiper
//               slidesPerView={1}
//               // navigation={true}
//               pagination={{
//                 el:
//                   swiperPagination.current ||
//                   "#swiper-pagination.swiper-pagination",
//                 clickable: true,
//               }}
//               autoplay={{
//                 delay: 4000,
//               }}
//               modules={[Navigation, Pagination, Autoplay]}
//               className="reviewsSlider"
//             >
//               <SwiperSlide>
//                 <div className="text-left relative">
//                   {/* <div className="overlay-gradient-b-intro absolute inset-0 z-10" />
//                   <div className="overlay-gradient-t-intro absolute z-10 inset-0" /> */}
//                   <Image
//                     width={1200}
//                     height={500}
//                     className="w-full h-screen object-cover object-top"
//                     src={slide1}
//                     alt=""
//                   />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="text-left relative">
//                   {/* <div className="overlay-gradient-b-intro absolute inset-0 z-10" />
//                   <div className="overlay-gradient-t-intro absolute z-10 inset-0" /> */}
//                   <Image
//                     width={1200}
//                     height={500}
//                     className="w-full h-screen object-cover"
//                     src={slide2}
//                     alt=""
//                   />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="text-left relative">
//                   {/* <div className="overlay-gradient-b-intro absolute inset-0 z-10" />
//                   <div className="overlay-gradient-t-intro absolute z-10 inset-0" /> */}
//                   <Image
//                     width={1200}
//                     height={500}
//                     className="w-full h-screen object-cover"
//                     src={slide3}
//                     alt=""
//                   />
//                 </div>
//               </SwiperSlide>
//               <div
//                 ref={swiperPagination}
//                 id="swiper-pagination"
//                 className="swiper-pagination"
//               />
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
