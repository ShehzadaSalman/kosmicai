import React from 'react'
import RightArrowIcon from '../Icons/RightArrow'

function Button({  type = 'hollow', value = 'text'}) {
  

  if(type === 'hollow') {
    return (
      <button className='px-6 w-full   py-4 border-[1px] border-[#3A3940]   rounded-[32px] sm:w-[146px] max-w-[100%]'>
        <span className=''>{value}</span>
      </button>
    )    
  }

  return (<button className='px-6 py-4 w-full cursor-pointer max-w-[100%] bg-white hover:bg-gray-300  solid rounded-[32px] flex justify-center sm:justify-between items-center sm:w-[234px]'>
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#523FD7] to-[#FF7DFF]'>{value}</span>   <span className='hidden sm:inline-block'><RightArrowIcon /></span>
  </button>)

}

export default Button