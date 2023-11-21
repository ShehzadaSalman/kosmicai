import React from 'react'
import BackButton from '../Button/BackButton'
import PencilIcon from '../Icons/Pencil'
import DpImage from "@/Images/DpImage.png";
import Image from "next/image"
import Link from 'next/link';

function Header() {
  return (
      <div className='min-h-[111px] bg-[#09090D] md:border-b border-[#3A3940] px-6 flex  items-center justify-between'>
        
        {/* Left Section */}
        <div className='flex items-start justify-start gap-x-4'>
              <BackButton />
              <div>
                <h2 className='flex items-center justify-start gap-x-2'>Media Management <PencilIcon/> </h2>
                  <p className='text-[#D0CFD1]'>Draft Campaign</p>
              </div>
        </div>

        {/* Right Section */}
          <div className='flex items-center justify-start gap-x-4'>
              <div className='hidden md:block'>
          <h2 className='text-right text-[#FF7DFF]'>Jane Cooper </h2>
                  <Link href={'/'} className='text-[#FF7DFF] underline'>Change Profile</Link>
              </div>
              <Image src={DpImage} height={40} width={40} alt='Display Image' />
          </div>
      
      
      </div>
  )
}

export default Header