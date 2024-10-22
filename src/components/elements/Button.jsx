import React from 'react'
import { Link } from 'react-router-dom'


function Button({text, className, link }) {
  return (
    <button className={`${className} `}  >
      <Link to={link} className=''>{text}</Link>
      </button>
  )
}

export default Button