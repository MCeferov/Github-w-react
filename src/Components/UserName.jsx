import React from 'react'

const UserName = (props) => {
  return (
    <div className="text-blue-600 mt-1">
    <a className="text-base" target="blank" href=""
      >{props.children ? props.children : "No Name"}</a
    >
  </div>
  )
}

export default UserName