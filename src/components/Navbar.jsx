import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { Button } from './elements';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [navState, setNavState] = useState(false)

  return (
    <header className='container m-auto h-20 w-screen flex justify-evenly items-center bg-white bg-opacity-55 bg-blur-3xl'>
      <div className="logo w-1/4 max-w-24">
        <img src={logo} alt="Namaste Remittance - Send money faster Nepal" className='' />
      </div>
      <nav className='flex items-center '>
        <ul className={`absolute flex flex-col lg:flex-row left-0 top-0 m-1 gap-4 h-full w-full bg-red-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 lg:static lg:bg-transparent lg:backdrop-filter-none lg:backdrop-blur-none lg:flex border-none justify-start items-center text-xl lg:text-base font-jakarta font-extrabold lg:font-medium opacity-0 lg:opacity-100 ${navState?'left-0 opacity-100':'-left-full'} transition-all duration-500 `}>
        <RxCross2 className='lg:hidden' style={{marginLeft:'auto', fontSize:'40px', marginRight:'10px', marginTop:'10px'}} onClick={() => setNavState(false)} />
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Home">Service</a>
          </li>
          <li>
            <a href="#Home">About</a>
          </li>
          <li>
            <a href="#Home">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="navigators flex items-center gap-x-3 md:gap-x-3">
        <Button text="Login" className={'border rounded-md p-1 px-2 md:px-3 border-black '} />
        <Button text="Sign Up" className={'rounded-md p-2 px-5 text-white bg-gradient-to-l from-red-600 to-red-700 transition-all duration-[1000ms] ease-in-out hover:shadow-[0px_0px_10px_1px_rgba(255,0,51,1)] border hover:border hover:border-red-300'} />
        <GiHamburgerMenu className="lg:hidden" style={{ fontSize: '30px' }} onClick={() => setNavState(true)} />
      </div>
    </header>
  )
}

export default Navbar