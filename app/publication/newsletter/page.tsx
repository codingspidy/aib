import Image from 'next/image'
import React from 'react'
import newsletter1 from "../../images/newsletter1.png"
const Newsletter = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="innerDiv">
                <div className="flex flex-wrap">
                    <a className="border border-[#dedede] w-[90%] max-w-[300px] mx-auto md:mx-0" href="/aug-newsletter-2.pdf" download="aug-newsletter2">
                        <Image src={newsletter1} alt="aug-newsletter2" />
                        <div className='px-2 py-3 mt-4 text-sm bg-primary text-white'>
                            <p>August Newsletter 2</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
