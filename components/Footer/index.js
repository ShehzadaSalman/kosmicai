import React from 'react'
import Button from '../Button'

function Footer() {
  return (
      <div className="bg-[#09090D] py-6 gap-y-4 sm:gap-0 border-t border-[#3A3940] min-h-[116px] max-w-[14400px] px-6 flex-wrap flex items-center justify-between">
        <Button value='Back'  />
        <Button value='Next' type='contrained' />
      </div>
    )
}

export default Footer