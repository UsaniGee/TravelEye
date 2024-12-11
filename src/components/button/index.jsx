import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={` ${props.style}`}>
        {props.title} <img src={props.image} alt="" />
      </button>
    </div>
  )
}

export default Button
