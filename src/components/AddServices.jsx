import React from 'react'
import PlayStore from '../assets/PlayStore.png'
import AppStore from '../assets/AppleStore.svg'
import {HCards} from './elements'
import { RiMoneyDollarCircleLine, RiCustomerService2Line } from "react-icons/ri"
import { FaMailBulk } from "react-icons/fa";

function AddServices() {
  return (
    <section className="container m-auto space-y-14 p-4 ">
      <section className="container grid grid-cols-1 grid-rows-auto md:grid-cols-2 md:grid-rows-[auto_auto] bg-rose-600 text-white p-2 py-4 gap-4 md:gap-0 rounded-lg md:p-8 md:py-20">
        <h1 className='font-martel text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug text-right row-span-2'>Quick. Secure.<br />Low-cost.</h1>
        <hr className='sm:hidden' />
        <h2 className="font-martel text-2xl font-bold md:row-start-1 md:m-auto md:text-4xl lg:text-5xl">Download the app.</h2>
        <div className="img flex flex-wrap gap-4 justify-center items-center">
          <img src={AppStore} alt="Namaste Remittance app store download" className="w-40 max-w-40 lg:w-48 lg:max-w-56 " />
          <img src={PlayStore} alt="Namaste Remittance play store download" className='w-40 h-max lg:w-52' />
        </div>
      </section>
      <section className="space-y-10">
        <h1 className="relative text-3xl sm:text-5xl font-inter text-red-400 z-20 lg:text-6xl">
          <span className='text-red-200 absolute bottom-4 left-3 sm:text-6xl font-roboto italic font-thin -z-10 md:bottom-8 md:left-8'>You ask X, we give 2X</span>
          Additional services
        </h1>
        <section className='lg:grid lg:grid-cols-2 md:space-x-10'>
          <p className="text-gray-500 text-lg">Sending money from Nepal to Australia? Prepare yourself for a savings and efficiency journey with Namaste Remittance! We go beyond simply transferring funds across borders at lightning speed while offering competitive rates in the market. <br /> <br />
          But that’s not all. We offer highly competitive rates than the market. Our transparent fee structure and unbeatable Nepal exchange rates give your wallet the thrills it deserves! Know that every penny sent through us will stretch further than ever.</p>
          <br className="lg:hidden"/>
          <div className=" cards full flex flex-wrap gap-6 justify-center items-center">
            < HCards icon={<RiMoneyDollarCircleLine style={{fontSize:"50", margin:"auto"}} />} heading="Currency Exchange Services" text="For added convenience when sending money to Nepal. We also offer currency exchange facilities that enable you to convert them to the desired currency before sending." />
            < HCards icon={<FaMailBulk style={{fontSize:"50", margin:"auto"}} />} heading="Bulk Transfers" text="Need to send Australian currency in Nepal to multiple recipients quickly? Our bulk transfer feature makes the process straightforward and saves you time on repetitive transactions." />
            < HCards icon={<RiCustomerService2Line style={{fontSize:"50", margin:"auto"}} />} heading="Customer Support" text="Need some assistance or just curious? Our customer support team is on standby to assist in any way they can - be it helping with transactions or simply learning more about what services we provide, we're here for you." />
          </div>
        </section>
      </section>
    </section>
  )
}

export default AddServices 