import React from 'react'

const Top = (props) => {

    let className = props.logo + " text-xl bg-black text-white rounded-full py-1 px-2"
    
  return (
    <div className='flex items-center w-full gap-2 p-2 border-b border-gray-300'>
        <i className={className}></i>
        <h3 className='font-semibold text-lg tracking-tight'>{props.heading}</h3>
    </div>
  )
}

export default Top
