import React from 'react'

const Bio = (props) => {
  return (
    <div id="bio" className="w-[480px] text-white mb-8">{props.children ? props.children : "No bio"}</div>
  )
}

export default Bio