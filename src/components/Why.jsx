import React from 'react'
import { Cards, TextTiles } from './elements'
import { FaMoneyBillWave } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiEasyeda } from "react-icons/si";
function Why() {
  return (
    <article className="p-3 md:p-1 min-h-screen max-w-7xl m-auto">
      <div className="Namaste-Remittance-why flex flex-col justify-center items-center bg-rose-600 p-3 rounded-md">
        <h2 className="text-white text-3xl text-center font-inter font-extrabold tracking-wide my-5">Why millions choose Namaste Remittance</h2>
        <div className="cards flex flex-wrap justify-center items-center sm:justify-evenly sm:w-full">
          <Cards title="Ease & Conveniance" desc="Transfer money to Nepal quickly and easily from Australia using your phone or laptop. No more paperwork, just a few clicks to send funds home." icon={<SiEasyeda style={{ fontSize: '35px' }} />} />
          <Cards title="Great Rates" desc="Enjoy top exchange rates and low fees when you send money to Nepal. With Namaste Remittance, your money goes further for your family." icon={<FaMoneyBillWave style={{ fontSize: '35px' }} />} />
          <Cards title="Safe and Secure" desc="Every transfer is protected by advanced security, ensuring your money reaches Nepal safely and fast. Trust us for reliable remittance to Nepal." icon={<RiSecurePaymentFill style={{ fontSize: '35px' }} />} />
        </div>
      </div>
      <div className="Namaste-Remittance-who m-1 grid grid-cols-1 grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto] md:grid-cols-2 gap-4">
        <h2 className="font-inter font-bold text-5xl bg-gradient-to-r from-black from-10% via-red-600 via-40% to-red-400 bg-clip-text text-transparent md:col-span-2 inline-block w-fit">Who we are?</h2>
        <section className="left h-fit grid gap-10 md:grid-cols-2">
          <TextTiles number="10" text="Years Experience" className="md:col-span-2"/>
          <TextTiles number="10k" text="Transaction served" />
          <TextTiles number={4.2} text="User Satisfaction" />
        </section>
        <article className='md:pl-5 lg:p-0'>
          <p>Namaste Remittance is of “Namaste Remittance” ACN 600292804 licensed by Australian Securities & Investments Commission (ASIC). Australian based business and remittance service company (AUSTRAC Registration Number:IND 100-535014 ).</p>
          <p>It’s business philosophy is to be committed to provide diligent and attentive foreign exchange service for Neplease people all over Australia. Since establishment, Namaste Remittance operated according to the law and a formal operation program, while equipped with advanced facilities and professional staff. Providing services to transfer money to Nepal and settlement needs for personal, international students and residents providing quality service and assistance.</p>
          <p>Whether it's Australian dollars to NPR and other major currencies, we can provide the best rate at the lowest cost in the shortest time possible.</p>
        </article>
      </div>
    </article>
  )
}

export default Why