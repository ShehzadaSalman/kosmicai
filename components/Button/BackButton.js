import React from 'react'
import LeftArrowSharp from '../Icons/LeftArrowSharp'

function BackButton() {
  return (
    <button className='h-[47px] w-[47px] bg-lightdark rounded-xl flex justify-center items-center cursor-pointer'>
        <LeftArrowSharp/>
    </button>
  )
}

export default BackButton