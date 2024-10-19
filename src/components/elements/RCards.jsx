import React from 'react'
function RCards({ name, image, text, opacity}) {
    return (
        <figure className={`w-full flex-shrink-0 space-y-4 md:space-y-3 md:grid md:grid-cols-2 md:grid-rows-2 ${opacity} transition-all duration-1000`} >
            <div className="img bg-rose-300 w-52 md:w-64 m-auto p-[10px] rounded-full rounded-br-2xl md:row-span-2 md:-translate-y-10" >
                <img src={image} alt={name} className=" w-full md:w-64 rounded-full  m-auto" />
            </div>
            <blockquote><p className="font-inter text-gray-600 p-1">{text}</p></blockquote>
            <figcaption className='font-martel font-extrabold text-2xl'>@{name}</figcaption>
        </figure>
    )
}

export default RCards