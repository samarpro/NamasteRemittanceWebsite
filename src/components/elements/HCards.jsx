import React from 'react'


function HCards({ icon, heading, text }) {
    return (
        <article className='bg-gray-100 p-4 rounded-md text-center space-y-3 max-w-80 lg:max-w-xl lg:grid lg:grid-cols-[auto_auto] lg:grid-rows-[auto_auto] lg:text-left gap-x-10'>
            <div className='w-full row-span-2 m-auto '>
                {icon}
            </div>
            <h3 className="font-inter font-bold" > {heading} </h3>
            <p className='text-gray-500 px-2'>{text}</p>
        </article>
    )
}

export default HCards