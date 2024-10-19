import React from 'react'
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className='bg-[#101D24] text-white py-10 md:py-20 w-screen space-y-10'>
      <section className="flex justify-evenly flex-wrap gap-y-16">
        <section className='w-80 md:w-max'>
          <div className="title flex items-center">
            <img src={Logo} className='w-32 font-extrabold ' alt="Namaste Remittance Logo | Send Money to Nepal" />
            <h2 className='font-jakarta text-xl font-extrabold '>Namaste <br />Remittance</h2>
          </div>
          <nav className='w-80 text-center md:text-left'>
            <ul>
              <li className='flex flex-col md:pl-14 font-inter '>
                <a href="">Privacy Policy</a>
                <a href="">User agreements</a>
              </li>
            </ul>
          </nav>
        </section>

        <nav className='w-80 md:w-max text-center md:text-left'>
          <h2 className='font-jakarta text-xl font-extrabold'>Company</h2>
          <ul>
            <li className='flex flex-col font-inter'>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Career</a>
              <a href="">Become an affiliate</a>
            </li>
          </ul>
        </nav>

        <nav className='w-80 md:w-max text-center md:text-left'>
          <h2 className='text-xl font-extrabold font-jakarta' >Service</h2>
          <ul>
            <li className='flex flex-col font-inter '>
              <a href="">Log in</a>
              <a href="">Sign up</a>
              <a href="">Rates & charges</a>
              <a href="">Security</a>
            </li>
          </ul>
        </nav>

        <section className='w-80 md:w-max text-center md:text-left'>
          <h2 className='text-xl font-extrabold font-jakarta' >Contact links</h2>
        </section>
      </section>
      <p className="container m-auto text-center text-gray-400 ">
        Namaste Remittance is regulated under Australian Securities & Investments Commission (ASIC) and registered with Australian Transaction Reports and Analysis Centre (AUSTRAC) in Australia works with licensed remittance operators in each country. Pursuant to section 75C (2) of the Australian Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (AML/CTF Act).
        <br /> <br />
        © 2023 Namaste Remittance, Australia. All Rights Reserved.
      </p>
    </footer>

  )
}

export default Footer