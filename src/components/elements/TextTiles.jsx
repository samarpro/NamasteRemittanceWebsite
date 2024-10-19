import React from 'react'

function TextTiles({number, text, className}) {
  return (
        <span className={`flex items-center font-inter h-fit ${className}`} >
            <div className="strong-text">
                <strong className='font-inter text-6xl'>{number}</strong>
            </div>
            <div className="text w-3 mx-3">
                {text}
            </div>
        </span>
  )
}

export default TextTiles


