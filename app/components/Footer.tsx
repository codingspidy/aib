'use client'
import type { NextComponentType } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const Footer: NextComponentType = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <footer className='bg-primary footer relative pt-[50px] pb-[80px] sm:pt-[80px] sm:pb-[80px] lg:pt-[100px] lg:pb-[100px]'>
                <div className='innerDiv'>
                    <div className='lg:flex justify-between items-center border-b mb-12'>
                        <div className='flex justify-between items-end lg:w-full pb-0 lg:pb-4'>
                            <ul className='flex lg:mb-0 mb-3'>
                                <li className='mr-3 text-white'>Follow us</li>
                                <li className='mr-3'>
                                    <Link href="#" target='_blank' rel='noreferrer' className='text-primary text-xl'>
                                        <i className='fab fa-instagram'></i>
                                    </Link>
                                </li>
                                <li className='mr-3'>
                                    <Link href="#" target='_blank' rel='noreferrer' className='text-primary text-xl'>
                                        <i className='fab fa-twitter'></i>
                                    </Link>
                                </li>
                                <li className='mr-3'>
                                    <Link href="#" target='_blank' rel='noreferrer' className='text-primary text-xl'>
                                        <i className='fab fa-facebook'></i>
                                    </Link>
                                </li>
                                <li className='mr-3'>
                                    <Link href="#" target='_blank' rel='noreferrer' className='text-primary text-xl'>
                                        <i className='fab fa-linkedin'></i>
                                    </Link>
                                </li>
                                <li className='mr-3'>
                                    <Link href="#" target='_blank' rel='noreferrer' className='text-primary text-xl'>
                                        <i className='fab fa-quora'></i>
                                    </Link>
                                </li>
                            </ul>
                            {showTopBtn && (
                                <Link href="#" className='text-white sm:text-4xl text-2xl sm:right-[50px] right-[20px] cursor-pointer' onClick={goToTop}>
                                    <i className='text-[22px] pb-4 lg:pb-0 fat fa-circle-arrow-up'></i>
                                </Link>
                            )}
                        </div>
                        <div className='lg:w-1/2 lg:text-right hidden'>
                            <ul className='flex lg:justify-end items-center lg:mt-0 mt-6'>
                                <li className='hidden mr-3'>
                                    <Link href="#" className='text-primary text-xl'>
                                        <i className='fas fa-globe'></i>
                                    </Link>
                                </li>
                                <li className='hidden mr-3'>
                                    <select className='py-2 px-4 rounded'>
                                        <option>English</option>
                                        <option>हिंदी</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='sm:flex text-white text-sm'>
                        <div className='sm:w-1/3 sm:mb-0 mb-6'>
                            <h4 className='font-medium text-secondary text-[16px] lg:text-xl mb-3'>
                                Contact us
                            </h4>
                            <ul
                                className='footerLink max-w-[250px]'
                            >
                                <li className='mb-2'>
                                    Indian Chamber of Commerce
                                    4, India Exchange Place,
                                    Kolkata-700001
                                </li>
                                <li className='mb-2'>
                                    Phone : +91-33-22303242-44
                                </li>
                                <li className='mb-2'>
                                    Email: ceo@indianchamber.net
                                </li>
                            </ul>
                        </div>
                        <div className='sm:w-1/3 sm:mb-0 mb-6'>
                            <h4 className='font-medium text-secondary text-[16px] lg:text-xl mb-3' >
                                Highlights
                            </h4>
                            <ul
                                className='footerLink'
                            >
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Bits
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Asked
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Study help
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Padhaai
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Group
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='sm:w-1/3'>
                            <h4 className='font-medium text-secondary text-[16px] lg:text-xl mb-3'>
                                Policy
                            </h4>
                            <ul
                                className='footerLink'
                            >
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Cookie Policy
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Terms of Service
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        Community Standards
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="#" target='_blank' className='text-white text-sm'>
                                        How our Business Works
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t mt-9'></div>
                </div>
            </footer>
        </>
    );
};

export default Footer;