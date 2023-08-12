import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus, faEarthAmericas, faMoneyBillTrendUp, faPlaneDeparture, faTruckRampBox, faUserSecret } from '@fortawesome/free-solid-svg-icons'

const AIBCouncil = () => {
    return (
        <section className="py-[60px] md:py-[100px] bg-white">
            <div className="innerDiv mx-auto">
                <div className='flex flex-col lg:flex-row gap-16 lg:items-start'>
                    <div className=''>
                        <h2 className="text-[36px] font-semibold text-primary">AIB Services: <span className="text-secondary">AIB Council Of Arbitration</span></h2>
                        <p className='mt-7'>The ICC provides customized investment facilitation services to the corporate sector. These include, among other things, providing specific product information, identification of joint venture partners, facilitating procedural matters with the respective authorities, matchmaking, etc.
                            ICC intends to emerge as a one-stop centre providing investment-related information and services. The Chamber has contributed significantly towards investment matchmaking by facilitating business delegation exchanges between India and South-East Asian countries like Thailand and Vietnam. Apart from providing information related to business matchmaking to interested companies, the Chamber thus, has been instrumental in creating real platforms for establishing business-to-business linkages, through various Buyer-Seller Meets, One-on-One Investor meetings, etc.
                            Through its linkages and partnerships with Trade & Industry Associations from rest of Asia, and the World, the Indian Chamber, can truly act as an effective mediator between Corporates from India and abroad.
                            This Department is headed by Rajarshi Ghosh</p>
                    </div>
                    <div className='shrink-0 w-full lg:max-w-[300px]'>
                        <div className='bg-[#f1f3f4] text-black py-8 px-4'>
                            <h3 className="text-[22px] text-primary font-[600] mb-4">Contact us</h3>
                            <p>Rajarshi Ghosh</p>
                            <p>Email: rajarshi.ghosh@gmail.com</p>
                        </div>
                        <div className="bg-[#f1f3f4] py-8 px-4 mt-7">
                            <h3 className="text-[22px] font-[600] text-primary">Are you looking for?</h3>
                            <div className='mt-4 flex flex-wrap gap-6'>
                                <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#ccf2ff] text-[#025f80]'>
                                    <FontAwesomeIcon className="text-[26px]" icon={faCalendarMinus} />
                                    <p className='text-sm max-w-[160px] text-center'>Current Events</p>
                                </div>
                                <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#EFE1D1] text-[#331D2C]'>
                                    <FontAwesomeIcon className="text-[26px]" icon={faUserSecret} />
                                    <p className='text-sm max-w-[160px] text-center'>Business Advice</p>
                                </div>
                                <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#e3e2ed] text-[#615AA7]'>
                                    <FontAwesomeIcon className="text-[26px]" icon={faEarthAmericas} />
                                    <p className='text-sm max-w-[160px] text-center'>International Busniess & Export Services</p>
                                </div>
                                <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#F9EDE5] text-[#FF6200]'>
                                    <FontAwesomeIcon className="text-[26px]" icon={faPlaneDeparture} />
                                    <p className='text-sm max-w-[160px] text-center'>International Events</p>
                                </div>
                                <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#ddffcc] text-[#008000]'>
                                    <FontAwesomeIcon className="text-[26px]" icon={faTruckRampBox} />
                                    <p className='text-sm max-w-[160px] text-center'>Invest & Trade with India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AIBCouncil

