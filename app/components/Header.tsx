'use client'
import { NextComponentType } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import aibLogo from '../images/aib-logo.jpg'
import themeIndia from '../images/theme-india.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faXmark, faBars, faCalendarXmark } from '@fortawesome/free-solid-svg-icons'

const Header: NextComponentType = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);

    return (
        <header className='bg-white'>
            <div id="navbar" className={scroll ? "border-b border-b-[#dedede] w-full top-0 z-[99] header-fixed transition-all ease-in-out" : "border-b border-b-[#dedede] w-full top-0 z-[99] transition-all ease-in-out"}>
                <div className="innerDiv mx-auto">
                    <nav className="flex justify-between lg:items-center">
                        <a className="inline-block py-4">
                            <Image src={aibLogo} alt="" className="w-[120px]" />
                        </a>
                        <div className="inline-flex items-center">
                            <div className="lg:block hidden">
                                <ul className="flex items-center gap-x-5 text-black">
                                    <li>
                                        <Link className="text-secondary pl-[2px] pr-1 py-2 inline-block" href="#">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="px-1 py-2 inline-block" href="#">
                                            The Chamber
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="px-1 py-2 inline-block" href="#">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="px-1 py-2 inline-block" href="#">
                                            Sectors
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="px-1 py-2 inline-block" href="#">
                                            International
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="px-1 py-2 inline-block" href="#">
                                            Media
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="px-1 py-2 inline-block" href="#">
                                            States
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="px-1 py-2 inline-block" href="#">
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <a
                                className="inline-block lg:hidden cursor-pointer menu-icon"
                                onClick={() => {
                                    setShowMenu(!showMenu);
                                }}
                            >
                                <FontAwesomeIcon icon={faBars} className="w-[27px] text-primary" />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <div className="w-full h-[101px]" /> */}
            {/* <div className="relative bg-[#DBE2EF]">
                <div className="right-triangle absolute bottom-0 left-1/2 -translate-x-1/2">
                </div>
                <div className="absolute top-0 left-0 -z-1 w-1/2 h-full bg-primary" />
                <div className="innerDiv">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="w-full lg:w-1/2 py-[10px] relative z-10">
                            <span className="text-secondary font-[500]">Events:</span>
                            <span className="text-white ml-3">Something great is happening</span>
                        </div>

                        <div className="w-full bg-[#DBE2EF] border-b-[1.5px] border-b-primary lg:w-1/2 flex items-center justify-end">
                            <input className="bg-[#DBE2EF] py-[10px] placeholder:text-[#646464]" placeholder='Search for anything...' type="text" />
                            <button className="bg-primary w-[44px] h-[44px]">
                                <FontAwesomeIcon className="text-white w-[20px] text-[20px] mx-auto" icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <div className="bg-[#0d0d0d] text-white">
                <div className='innerDiv'>
                    <ul className="flex items-center justify-between text-sm flex-wrap">
                        <li>
                            <Link className="text-secondary pl-[2px] pr-1 py-3 inline-block" href="#">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="px-1 py-3 inline-block" href="#">
                                The Chamber
                            </Link>
                        </li>
                        <li>
                            <Link className="px-1 py-3 inline-block" href="#">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link className="px-1 py-3 inline-block" href="#">
                                Sectors
                            </Link>
                        </li>
                        <li>
                            <Link className="px-1 py-3 inline-block" href="#">
                                International
                            </Link>
                        </li>
                        <li>
                            <Link className="px-1 py-3 inline-block" href="#">
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link className="px-1 py-3 inline-block" href="#">
                                States
                            </Link>
                        </li>
                        <li>
                            <Link className="px-1 py-3 inline-block" href="#">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div> */}
        </header>
    )
}

export default Header

// import type { NextComponentType } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const Header: NextComponentType = () => {
    // const [showMenu, setShowMenu] = useState(false);
    // const [scroll, setScroll] = useState(false);
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setScroll(window.scrollY > 100);
    //     });
    // }, []);
//     return (
//         <>
            // <header id="navbar" className={scroll ? "bg-white fixed w-full top-0 z-[99] header-fixed transition-all ease-in-out" : "bg-white fixed w-full top-0 z-[99] transition-all ease-in-out"}>
            //     <div className="innerDiv mx-auto">
            //         <nav className="flex justify-between lg:items-center">
            //             <a className="inline-block py-4">
            //                 <Image src={aibLogo} alt="" className="w-[100px]" />
            //             </a>
            //             <div className="inline-flex items-center">
            //                 <div className="lg:block hidden">
            //                     <ul className="flex items-center gap-x-5 text-black">
            //                         <li>
            //                             <Link className="text-secondary pl-[2px] pr-1 py-3 inline-block" href="#">
            //                                 Home
            //                             </Link>
            //                         </li>
            //                         <li>
            //                             <Link className="px-1 py-3 inline-block" href="#">
            //                                 The Chamber
            //                             </Link>
            //                         </li>
            //                         <li>
            //                             <Link className="px-1 py-3 inline-block" href="#">
            //                                 Services
            //                             </Link>
            //                         </li>
            //                         <li>
            //                             <Link className="px-1 py-3 inline-block" href="#">
            //                                 Sectors
            //                             </Link>
            //                         </li>
            //                         <li>
            //                             <Link className="px-1 py-3 inline-block" href="#">
            //                                 International
            //                             </Link>
            //                         </li>
            //                         <li>
            //                             <Link className="px-1 py-3 inline-block" href="#">
            //                                 Media
            //                             </Link>
            //                         </li>
            //                         <li>
            //                             <Link className="px-1 py-3 inline-block" href="#">
            //                                 States
            //                             </Link>
            //                         </li>
            //                         <li>
            //                             <Link className="px-1 py-3 inline-block" href="#">
            //                                 Contact us
            //                             </Link>
            //                         </li>
            //                     </ul>
            //                 </div>

            //                 <a
            //                     className="inline-block lg:hidden cursor-pointer menu-icon"
            //                     onClick={() => {
            //                         setShowMenu(!showMenu);
            //                     }}
            //                 >
            //                     <FontAwesomeIcon icon={faBars} className="w-[27px] text-white" />
            //                 </a>
            //             </div>
            //         </nav>
            //     </div>
            // </header>

//             <div className={`mobile-menu bg-black transform transition-transform duration-300 ease-in-out ${showMenu ? " fixed effect-code inset-0 w-full sm:h-full h-screen z-[9999] translate-x-0 py-8 sm:overflow-y-visible overflow-y-scroll" : "py-8 fixed inset-0 w-full sm:h-full h-screen z-[9999] effect-code translate-x-full sm:overflow-y-visible overflow-y-scroll"}`}>
//                 <a
//                     className="cursor-pointer text-white absolute top-5 right-4"
//                     onClick={() => {
//                         setShowMenu(!showMenu);
//                     }}
//                 >
//                     <FontAwesomeIcon icon={faCalendarXmark} className="w-[30px]" />
//                 </a>

//                 <ul className="min-h-[80%] flex flex-col justify-center items-center gap-y-5 text-[19px] text-white">
//                     <li>
//                         <Link className="text-secondary pl-[2px] pr-1 py-3 inline-block" href="#">
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="px-1 py-3 inline-block" href="#">
//                             The Chamber
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="px-1 py-3 inline-block" href="#">
//                             Services
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="px-1 py-3 inline-block" href="#">
//                             Sectors
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="px-1 py-3 inline-block" href="#">
//                             International
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="px-1 py-3 inline-block" href="#">
//                             Media
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="px-1 py-3 inline-block" href="#">
//                             States
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="px-1 py-3 inline-block" href="#">
//                             Contact us
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default Header;
