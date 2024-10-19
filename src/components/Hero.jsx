import React from 'react'
import { Button } from './elements'
import google from '../assets/Google.svg'
import { FaStar, FaRegStar } from 'react-icons/fa'
import WorldMap from '../assets/WorldMap.svg'
import WorldMapLarge from '../assets/WorldMapLarge.svg'

function Hero() {
  let gradient_bg = 'bg-gradient-to-tr from-red-600 to-red-700'
  return (
    <div className="container rounded-3xl flex-grow flex justify-center overflow-hidden md:bg-[url('assets/WorldMapLarge.svg')] md:bg-right lg:bg-right-top bg-no-repeat m-auto md:bg-rose-200">
      <section className='flex-grow flex flex-col justify-center px-4 overflow-hidden hero-component-background'>
        <p className="font-monsterrat mb-3 text-xl">Skip the Wait, Skip the Fees</p>
        <h1 className={`font-extrabold text-4xl md:text-5xl lg:text-6xl font-dmSans leading-[46px]`}>Send money <br /> home <span className={`${gradient_bg} bg-clip-text text-transparent`}>Fast,</span> and<br />at the <span className={`${gradient_bg} bg-clip-text text-transparent`}>Best Rates</span></h1>

        <div className='mt-9'>
          <Button text="Send Money" className={'border rounded-md p-2 border-black mr-5 relative before:content-[" "] before:absolute before:w-full before:h-full z-30 before:-z-50 before:bg-black before:top-0 before:transition-all before:left-[100%] overflow-hidden transition-all duration-[200ms] hover:before:left-0 hover:text-white hover:border-white'} />
          <Button text="Sign Up" className={'rounded-md p-2 px-5 text-white bg-gradient-to-l from-red-600 to-red-700 transition-all duration-[1000ms] ease-in-out hover:shadow-[0px_0px_10px_1px_rgba(255,0,51,1)] border hover:border hover:border-red-300'} />
        </div>
        {/* Google Logo */}
        <div className="review mt-5 flex">
          <img src={google} alt="Namaste Remittance-Google, Remittance" className='w-14' />
          <div className="text p-2 text-gray-500">
            <p className='leading-3'>Google review 4 out of 5</p>
            <FaStar style={{ color: 'gray', display: 'inline' }} />
            <FaStar style={{ color: 'gray', display: 'inline' }} />
            <FaStar style={{ color: 'gray', display: 'inline' }} />
            <FaStar style={{ color: 'gray', display: 'inline' }} />
            <FaRegStar style={{ color: 'gray', display: 'inline' }} />
          </div>
        </div>
      </section>
      <img src={WorldMap} alt="Send Money from Australia to Nepal - Namaste Remittance" className='absolute top-0 -z-10 w-full h-full object-cover md:hidden' />
      
      
      <div className={`w-full h-full absolute top-0 -z-10 opacity-90 blur-lg bg-gradient-to-r from-slate-50 to-slate-50 md:hero-component-background`} ></div>
    </div>
  )
}

export default Hero;
