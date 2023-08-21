import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus, faEarthAmericas, faMoneyBillTrendUp, faPlaneDeparture, faTruckRampBox, faUserSecret } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <section className="py-[60px] md:py-[100px] bg-white">
            <div className="innerDiv mx-auto">
                <div className='flex flex-col lg:flex-row gap-16 lg:items-start'>
                    <div className=''>
                        <h2 className="text-[36px] font-semibold text-primary">About Us</h2>
                        <p className='mt-4'>Association of International Businessmen aims to make
                            significant strides in emphasizing the need for effective use of association in
                            various businesses. Consolidating its position as a center for  promoting bilateral trade, AIB offers a vast range of services fro augmenting skills, creating a plateform for interaction/cooperation, disseminating
                            valuable information and data and in turn enhancing business opportunities.</p>
                        <p>AIB is part of  programme where as 3000
                            business people get together for B2B meetings
                            from140 countries.
                            AIB with its branches take delegation to the other countries.
                            Along With Headquarter AIB  has 8 branches in India. Delhi, Bangalore, Hyderabad, Kolkata, Kochi,Chennai, Mumbai and Pune.
                            AIB organizes country and event promotion programs, workshops, working breakfasts and luncheons.
                        </p>
                        <div className="mt-12">
                            <h3 className="text-[30px] font-semibold text-primary">What AIB does for members?
                            </h3>
                            <ul className='list-disc mt-4'>
                                <li>AIB Provides a platform to all members to interect with other members in sector of their interest.</li>
                                <li>Invitation to participate in the events of their business interest.</li>
                                <li>Networking opportunities with corporate leaders and government authorities.</li>
                                <li>Speaking opportunities in different events wherever possible.</li>
                                <li>Regular information on various policy issues and developments in their respective sector.</li>
                                <li>AIB’s thought leadership initiatives</li>
                                <li>Delegations – National & International</li>
                                <li>Dissemination of important notifications etc., from all states and the centre.</li>
                                <li>                                Inputs from members shared with the state and government for all major policy initiatives.</li>
                                <li>Enable building up their brand image through trade fairs and exhibition.</li>
                                <li>Provide Publicity in trade fair and exhibitions.</li>
                                <li>Members Helpline</li>
                                <li>Visa recommendations to members for their business- related travel abroad.</li>
                                <li>We also give preference to new start ups. And help their business to grow up.</li>
                                <li>Every week provide Newsletter for members.</li>
                                <li>Mostly provide services in central asia (CIS) countries.</li>
                                <li>As soon enquiries come immediately we take action on that enquiry. </li>
                            </ul>
                        </div>
                        <div className="mt-12">
                            <h3 className="text-[30px] font-semibold text-primary">What AIB does for members?
                            </h3>
                            <ul className='list-disc mt-4'>
                            </ul>
                        </div>
                    </div>
                    <div className='shrink-0 w-full lg:max-w-[300px]'>
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

export default About

