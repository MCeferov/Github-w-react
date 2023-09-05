import React from 'react'

const Name = (props) => {
  return (
    <div  className="text-2xl font-bold text-white">
{props.children ? props.children : "No Username"}
  </div>
  )
}

export default Name