import React from 'react'
import Logo from '../assets/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {Link} from 'react-router-dom'

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
                <Link to="">Privacy Policy</Link>
                <Link to="">User agreements</Link>
              </li>
            </ul>
          </nav>
        </section>

        <nav className='w-80 md:w-max text-center md:text-left'>
          <h2 className='font-jakarta text-xl font-extrabold'>Company</h2>
          <ul>
            <li className='flex flex-col font-inter'>
              <Link to="upcoming/">Home</Link>
              <Link to="upcoming/">About</Link>
              <Link to="upcoming/">Contact</Link>
              <Link to="upcoming/">Career</Link>
              <Link to="upcoming/">Become an affiliate</Link>
            </li>
          </ul>
        </nav>

        <nav className='w-80 md:w-max text-center md:text-left'>
          <h2 className='text-xl font-extrabold font-jakarta' >Service</h2>
          <ul>
            <li className='flex flex-col font-inter '>
              <Link to="https://namasteremittance.com.au/admin/login.php">Log in</Link>
              <Link to="https://namasteremittance.com.au/admin/register.php">Sign up</Link>
              <Link to="https://namasteremittance.com.au/termcondition.php">Rates & charges</Link>
              <Link to="https://namasteremittance.com.au/termcondition.php">Security</Link>
            </li>
          </ul>
        </nav>

        <section className='w-80 md:w-max text-center md:text-left'>
          <h2 className='text-xl font-extrabold font-jakarta' >Contact links</h2>
          <div className="links flex  gap-x-3 justify-center">
          <Link to="https://www.instagram.com/namaste_remittance/"><FaInstagram  style={{fontSize:'30px'}} /></Link>
          <Link to="https://www.facebook.com/Namasteremittanc/"><FaFacebook  style={{fontSize:'30px'}} /></Link>
          <Link to="##"><FaWhatsapp  style={{fontSize:'30px'}} /></Link>
          </div>
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