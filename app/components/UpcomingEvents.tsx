'use client'

import { NextComponentType } from 'next'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import event1 from "../images/conf-1.jpg"
import event2 from "../images/conf-2.jpg"
import event3 from "../images/conf-3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const UpcomingEvents: NextComponentType = () => {
    return (
        <section id="campaigns">
            <div className="pb-12 sm:pb-20 pt-32 sm:pt-40 px-4 bg-light-primary">
                <div className="relative max-w-screen-lg mx-auto campaign-slider">
                    <div className="max-w-[950px] mx-auto">
                        <h3 className="text-4xl text-primary font-semibold mb-8">
                            Upcoming Events
                        </h3>
                        <Swiper
                            slidesPerView={1}
                            modules={[Autoplay, Navigation]}
                            navigation={{ nextEl: "#next-slider", prevEl: "#prev-slider" }}
                            autoplay={{
                                delay: 2000,
                            }}
                            breakpoints={{
                                480: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            <SwiperSlide className="px-1 w-fit">
                                <div className="w-fit">
                                    <div className="mb-[9px]">
                                        <Image
                                            className="object-cover lg:w-72 h-56 rounded-xl"
                                            src={event1}
                                            width={333}
                                            height={500}
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-lg lg:text-[22px] font-medium mb-[7px]">
                                        Empowering Women
                                    </div>
                                    <div className='text-secondary font-[500]'>
                                        19.08.2022
                                    </div>
                                    {/* <Link href="" className="text-primary text-lg lg:text-xl">
                                        <span>Read more</span>
                                        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                                    </Link> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="px-1 w-fit">
                                <div className="w-fit">
                                    <div className="mb-[9px]">
                                        <Image
                                            className="object-cover lg:w-72 h-56 rounded-xl"
                                            src={event2}
                                            width={333}
                                            height={500}
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-lg lg:text-[22px] font-medium mb-[7px]">
                                        Empowering Women
                                    </div>
                                    <div className='text-secondary font-[500]'>
                                        19.08.2022
                                    </div>
                                    {/* <Link href="" className="text-primary text-lg lg:text-xl">
                                        <span>Read more</span>
                                        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                                    </Link> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="px-1 w-fit">
                                <div className="w-fit">
                                    <div className="mb-[9px]">
                                        <Image
                                            className="object-cover lg:w-72 h-56 rounded-xl"
                                            src={event3}
                                            width={333}
                                            height={500}
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-lg lg:text-[22px] font-medium mb-[7px]">
                                        Empowering Women
                                    </div>
                                    <div className='text-secondary font-[500]'>
                                        19.08.2022
                                    </div>
                                    {/* <Link href="" className="text-primary text-lg lg:text-xl">
                                        <span>Read more</span>
                                        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                                    </Link> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="px-1 w-fit">
                                <div className="w-fit">
                                    <div className="mb-[9px]">
                                        <Image
                                            className="object-cover lg:w-72 h-56 rounded-xl"
                                            src={event1}
                                            width={333}
                                            height={500}
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-lg lg:text-[22px] font-medium mb-[7px]">
                                        Empowering Women
                                    </div>
                                    <div className='text-secondary font-[500]'>
                                        19.08.2022
                                    </div>
                                    {/* <Link href="" className="text-primary text-lg lg:text-xl">
                                        <span>Read more</span>
                                        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                                    </Link> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="px-1 w-fit">
                                <div className="w-fit">
                                    <div className="mb-[9px]">
                                        <Image
                                            className="object-cover lg:w-72 h-56 rounded-xl"
                                            src={event2}
                                            width={333}
                                            height={500}
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-lg lg:text-[22px] font-medium mb-[7px]">
                                        Empowering Women
                                    </div>
                                    <div className='text-secondary font-[500]'>
                                        19.08.2022
                                    </div>
                                    {/* <Link href="" className="text-primary text-lg lg:text-xl">
                                        <span>Read more</span>
                                        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                                    </Link> */}
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <button
                        className="swiper-button-prev sm:block hidden shadow-2xl"
                        id="prev-slider"
                    ></button>
                    <button
                        className="swiper-button-next sm:block hidden shadow-2xl"
                        id="next-slider"
                    ></button>
                </div>
            </div>
        </section>
    )
}

export default UpcomingEvents
