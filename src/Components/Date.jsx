import React from 'react'

const Date = (props) => {
  const content =`Joined ${props.date.slice(0,10)}`
  return (
<div 
className="absolute top-2 right-0 text-base text-white">
          {content}
          </div>
  )
}

export default Date