'use client'
import { NextComponentType } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import aibLogo from '../images/aib-logo.png'
import themeIndia from '../images/theme-india.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faXmark, faBars, } from '@fortawesome/free-solid-svg-icons'

const Header: NextComponentType = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);

    return (
        <header className='bg-primary'>
            <div id="navbar" className={`py-2 lg:py-3 ${scroll ? "border-b border-b-[#dedede] w-full top-0 z-[99] header-fixed transition-all ease-in-out" : "border-b border-b-[#dedede] w-full top-0 z-[99] transition-all ease-in-out"}`}>
                <div className="innerDiv mx-auto">
                    <nav className="flex justify-between lg:items-center">
                        <a className="inline-block -ml-1">
                            <Image src={aibLogo} alt="" className="w-[100px] lg:w-[120px] invert brightness-0" />
                        </a>
                        <div className="inline-flex items-center">
                            <div className="lg:block hidden">
                                <ul className="flex items-center gap-x-5 text-white">
                                    <li>
                                        <Link className="text-secondary pl-[2px] pr-1 inline-block cursor-pointer" href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="px-1 inline-block cursor-pointer" href="#">
                                            The Chamber
                                        </Link>
                                    </li>
                                    <li className="px-2 py-2 group relative cursor-pointer">
                                        Services
                                        <div
                                            className={
                                                `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                                            }
                                            style={{ minWidth: "12rem" }}
                                        >
                                            <Link
                                                href="/services/business-information-services"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                            // onClick={(e) => e.preventDefault()}
                                            >
                                                Business Information Services
                                            </Link>
                                            <Link
                                                href="/services/certificate-of-origin"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                            // onClick={(e) => e.preventDefault()}
                                            >
                                                Certificate of Origin
                                            </Link>
                                            <Link
                                                href="/services/aib-council-of-arbitration"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                AIB Council of Arbitration
                                            </Link>
                                            <Link
                                                href="/services/investment-matchmaking"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Investment Matchmaking
                                            </Link>
                                            <Link
                                                href="/services/venue-booking"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Venue Booking
                                            </Link>
                                            <Link
                                                href="/services/visa-recommendation"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Visa Recommendation
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="px-2 py-2 group relative cursor-pointer">
                                        International
                                        <div
                                            className={
                                                `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                                            }
                                            style={{ minWidth: "12rem" }}
                                        >
                                            <Link
                                                href="/international/international-business-news"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                            // onClick={(e) => e.preventDefault()}
                                            >
                                                International Business News
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="px-2 py-2 group relative cursor-pointer">
                                        Membership
                                        <div
                                            className={
                                                `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                                            }
                                            style={{ minWidth: "12rem" }}
                                        >
                                            <Link
                                                href="/membership"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                            // onClick={(e) => e.preventDefault()}
                                            >
                                                AIB Membership
                                            </Link>
                                            <Link
                                                href="/membership/charges"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                            // onClick={(e) => e.preventDefault()}
                                            >
                                                Membership Charges
                                            </Link>
                                            <Link
                                                href="/membership/forms"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                Membership Forms
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="px-2 py-2 group relative cursor-pointer">
                                        Publication
                                        <div
                                            className={
                                                `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                                            }
                                            style={{ minWidth: "12rem" }}
                                        >
                                            <Link
                                                href="#"
                                                className={
                                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                                }
                                            // onClick={(e) => e.preventDefault()}
                                            >
                                                Newsletter
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className="px-1 inline-block cursor-pointer" href="/contact">
                                            Contact
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
                                <FontAwesomeIcon icon={faBars} className="text-[22px] sm:text-[28px] text-white" />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>

            <div className={`mobile-menu bg-primary pt-24 transform transition-transform duration-300 ease-in-out ${showMenu ? " fixed effect-code inset-0 w-full sm:h-full h-screen z-[9999] translate-x-0 py-8 sm:overflow-y-visible overflow-y-scroll" : "py-8 fixed inset-0 w-full sm:h-full h-screen z-[9999] effect-code translate-x-full sm:overflow-y-visible overflow-y-scroll"}`}>
                <a
                    className="cursor-pointer text-white absolute top-5 right-4"
                    onClick={() => {
                        setShowMenu(!showMenu);
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} className="text-[24px] sm:text-[30px]" />
                </a>

                <ul className="flex flex-col justify-center items-center gap-y-3 text-[19px] text-white">
                    <li>
                        <Link className="text-secondary pl-[2px] pr-1 inline-block cursor-pointer" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="px-1 inline-block cursor-pointer" href="#">
                            The Chamber
                        </Link>
                    </li>
                    <li className="px-2 py-2 group relative cursor-pointer">
                        Services
                        <div
                            className={
                                `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link
                                href="/services/business-information-services"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // onClick={(e) => e.preventDefault()}
                            >
                                Business Information Services
                            </Link>
                            <Link
                                href="/services/certificate-of-origin"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // onClick={(e) => e.preventDefault()}
                            >
                                Certificate of Origin
                            </Link>
                            <Link
                                href="/services/aib-council-of-arbitration"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                AIB Council of Arbitration
                            </Link>
                            <Link
                                href="/services/investment-matchmaking"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Investment Matchmaking
                            </Link>
                            <Link
                                href="/services/venue-booking"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Venue Booking
                            </Link>
                            <Link
                                href="/services/visa-recommendation"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Visa Recommendation
                            </Link>
                        </div>
                    </li>
                    <li className="px-2 py-2 group relative cursor-pointer">
                        International
                        <div
                            className={
                                `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link
                                href="/international/international-business-news"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // onClick={(e) => e.preventDefault()}
                            >
                                International Business News
                            </Link>
                        </div>
                    </li>
                    <li className="px-2 py-2 group relative cursor-pointer">
                        Membership
                        <div
                            className={
                                `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link
                                href="/membership"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // onClick={(e) => e.preventDefault()}
                            >
                                AIB Membership
                            </Link>
                            <Link
                                href="/membership/charges"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // onClick={(e) => e.preventDefault()}
                            >
                                Membership Charges
                            </Link>
                            <Link
                                href="/membership/forms"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Membership Forms
                            </Link>
                        </div>
                    </li>
                    <li className="px-2 py-2 group relative cursor-pointer">
                        Publication
                        <div
                            className={
                                `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link
                                href="#"
                                className={
                                    "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                }
                            // onClick={(e) => e.preventDefault()}
                            >
                                Newsletter
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link className="px-1 inline-block cursor-pointer" href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
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
