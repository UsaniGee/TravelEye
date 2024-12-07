import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={` ${props.style}`}>
        {props.title}
      </button>
    </div>
  )
}

export default Button
