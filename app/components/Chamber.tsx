'use client'
import type { NextComponentType } from "next";
import Image from "next/image";
import tabImages from "../images/tab-mockup-2.png";
// import KidImage from "../images/kid-flying.png";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faXmark } from '@fortawesome/free-solid-svg-icons'

const Chamber: NextComponentType = () => {
    const [isFullScreen, setFullScreen] = useState(false);
    return (
        <>
            <section className="pt-[60px] pb-[60px] md:py-[150px] bg-white clippath-section">
                <div className="innerDiv mx-auto">
                    <div className="flex flex-wrap gap-5 sm:-mx-3 items-center justify-between">
                        <div className="sm:px-3 lg:w-1/2 w-full relative">
                            <div className="relative z-10">
                                <Image src={tabImages} width={800} height={537} alt="" className="rounded-[20px] md:rounded-[30px]" />
                                <div
                                    onClick={() => {
                                        setFullScreen(!isFullScreen);
                                    }}
                                    className="absolute z-[20] cursor-pointer text-white w-[60px] h-[60px] rounded-full flex justify-center items-center text-[24px] border-2 border-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <FontAwesomeIcon icon={faPlay} className="" />
                                </div>
                            </div>
                        </div>
                        <div className="sm:px-3 lg:w-5/12 w-full">
                            <h4 className="text-white text-[36px] xl:text-[50px] lg:text-[42px] md:text-[36px] font-[600] capitalize">the chamber</h4>
                            <p className="xl:text-[19px] text-[17px] text-white mt-3">Association of International Businessmen aims to make significant strides in emphasizing the need for effective use of association in various businesses. Consolidating its position as a center for  promoting bilateral trade, AIB offers a vast range of services fro augmenting skills, creating a plateform for interaction/cooperation, disseminating valuable information and data and in turn enhancing business opportunities.</p>
                            <div className="mt-6">
                                <a className="inline-block py-3 sm:px-8 px-6 font-[500] border-2 border-primary rounded-[30px] text-black bg-secondary cursor-pointer" href="">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={isFullScreen ? "fixed bg-black inset-0 z-[1000] flex justify-center items-center" : "hidden"}>
                {isFullScreen ? (
                    <video autoPlay loop={true} controls className="h-[640px]">
                        <source src="aib-video.mp4" type="video/mp4" />
                    </video>
                ) : null}
                <div className="text-[24px] absolute right-[15px] top-[15px] border-2 border-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                    <button
                        onClick={() => {
                            setFullScreen(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-white" />
                    </button>
                </div>
            </div>
        </>
    );
};
export default Chamber;
