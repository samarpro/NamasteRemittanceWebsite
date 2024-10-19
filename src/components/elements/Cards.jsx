import React from 'react'


function Cards({ title, desc, icon }) {
  return (
    <div className='flex flex-col justify-center items-center w-full sm:w-80 h-72 bg-white my-5 text-center rounded-xl p-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] max-h-96 '>
      <div className="img p-5 bg-slate-200 rounded-full">
        {icon}
      </div>
      <h2 className='font-inter font-extrabold text-xl p-3'>{title}</h2>
      <p className='text-slate-500'>{desc}</p>
    </div>
  )
}

export default Cards