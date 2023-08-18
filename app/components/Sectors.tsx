import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import network from "../images/network-img.png"

const Sectors: NextComponentType = () => {
    return (
        <section
            className={`section pt-28 max-w-full networkAnim`}
        >
            <div className="innerDiv py-2 md:flex gap-4 items-center">
                <div className="flex flex-col text-black gap-6">
                    <div className="flex items-center lg:block gap-x-2 w-fit mx-auto lg:mx-0">
                        <h3 className="text-[36px] lg:text-[54px] md:text-[42px] font-[700] text-center lg:text-left text-primary capitalize leading-none">AIB</h3>
                        <h3 className="text-[36px] lg:text-[54px] md:text-[42px] font-[700] text-center lg:text-left text-primary capitalize">Sectors</h3>
                    </div>
                    <div className="text-center md:text-base md:text-left">
                        <p className="md:text-[20px] lg:text-[24px] font-[500] leading-normal">
                            We are currently involved in the following sectors -
                        </p>
                        <p className='md:text-[20px] lg:text-[24px] font-[500] leading-normal'>Education, Logistics, Supply Chain,
                            Tourism, IT, ITES, Startup, PSUs, Tea, Chemical, Health, Textile, Jute, Young Leaders.</p>
                    </div>
                    {/* <div className="flex mb-12 md:mt-4">
                        <button
                            type="submit"
                            className="py-3 px-12 m-auto md:ml-0 bg-black text-white rounded-md"
                        >
                            <Link href="/people/connecting" passHref>
                                Explore
                            </Link>
                        </button>
                    </div> */}
                </div>
                <div className="lg:px-6 mt-7 lg:mt-0">
                    <Image src={network} alt="network" className=''></Image>
                </div>
            </div>
        </section>
    )
}

export default Sectors
