import Header from './components/Header'
import Hero from './components/Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus, faEarthAmericas, faMoneyBillTrendUp, faPlaneDeparture, faTruckRampBox, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import UpcomingEvents from './components/UpcomingEvents'
import Patron from './components/Patron'
import Chamber from './components/Chamber'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section className="py-7 bg-[#f1f3f4]">
        <div className='innerDiv'>
          <div className='flex flex-wrap items-center justify-center gap-6'>
            <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#ccf2ff] text-[#025f80]'>
              <FontAwesomeIcon className="text-[26px]" icon={faCalendarMinus} />
              <p className='text-sm max-w-[130px] text-center'>Current Events</p>
            </div>
            <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#ddffcc] text-[#008000]'>
              <FontAwesomeIcon className="text-[26px]" icon={faUserSecret} />
              <p className='text-sm max-w-[130px] text-center'>Business Advice</p>
            </div>
            <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#e3e2ed] text-[#615AA7]'>
              <FontAwesomeIcon className="text-[26px]" icon={faEarthAmericas} />
              <p className='text-sm max-w-[130px] text-center'>International Busniess & Export Services</p>
            </div>
            <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#F9EDE5] text-[#FF6200]'>
              <FontAwesomeIcon className="text-[26px]" icon={faPlaneDeparture} />
              <p className='text-sm max-w-[130px] text-center'>International Events</p>
            </div>
            <div className='flex py-4 px-6 gap-3 items-center rounded-md facility-card bg-[#ccf2ff] text-[#025f80]'>
              <FontAwesomeIcon className="text-[26px]" icon={faTruckRampBox} />
              <p className='text-sm max-w-[130px] text-center'>Invest & Trade with India</p>
            </div>
          </div>
        </div>
      </section>
      <UpcomingEvents />
      <Chamber />
      <Patron />
    </main>
  )
}
