import React from 'react'
import {Link} from 'react-router-dom'

function FallBack() {
  return (
    <div className="flex flex-col justify-center text-center items-center h-screen  text-xl lg:text-3xl before:content-[''] relative before:absolute before:w-1/2 before:h-1/2 before:bg-black before:-z-10 text-white before:animated-background before:bg-gradient-to-r before:from-red-500 before:via-red-500 before:to-rose-500 before:rounded-xl " >
        <p>Thanks for visiting.</p>
        <h1 className='text-2xl font-bold lg:text-4xl text-stroke'>Namaste Remittance Website</h1>
        <p>is under-making</p>
        <p>Please contact <span className='font-bold'>@samguptakanu@gmail.com</span></p>
        <p>for more information</p>
        <Link  to='/' className='bg-blue-400 text-base m-2 p-2 px-6 rounded-xl'>Visit Webpage</Link>
        
    </div>
  )
}

export default FallBack