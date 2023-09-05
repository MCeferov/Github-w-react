import React from 'react'

const Info = (props) => {
  return (
    <div>
    <div className="text-sm text-white">{props.title}</div>
    <div  className="text-2xl font-bold text-white">
      {props.data}
    </div>
  </div>
  )
}

export default Info