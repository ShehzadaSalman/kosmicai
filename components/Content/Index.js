import React, {useState} from 'react'
import Pill from '../Pills'
import RangeSlider from '../RangeSlider'
import Select from '../Select'
import { data} from "@/data";

function Content() {

const [selectedTopic, setSelectedTopic] = useState('Fun');
const [selectedValue, setSelectedValue] = useState('');

  
  const filteredList = () => {
    return data.filter(item => item.title === selectedTopic);
  }

  
  return (
      <div className='bg-[#12111A] px-6 min-h-[90vh]'>
      <div className='pt-[32px] md:pt-[61px] sm:pb-[32px] pb-[20px]  border-b border-[#3A3940]'>
          <h1 className='text-xl font-medium md:text-2xl'>Content Type</h1>
          <p className='text-[#D0CFD1]'>Choose a content type that best fits your needs.</p>  
        </div>  
        <div className='pt-[24px] sm:pt-[40px] pb-12'>
        <h2 className='pb-4 font-medium sm:pb-6 sm:text-lg'>What type of content are you creating ?</h2>
        <div className='flex flex-wrap gap-2 pb-8'>
          {data.map((item, index) => {
            return <span onClick={(e) => {
              setSelectedValue("");
              setSelectedTopic(item.title)
            } } key={index}>
              <Pill value={item.title} active={selectedTopic === item?.title} /> </span>
          })}
        </div>
        <h2 className='pb-4 font-medium sm:pb-6 sm:text-lg'>What type of &quot;{selectedTopic}&quot; content do you want to create ?</h2>        
        <div className='w-[600px] max-w-full'>
          <Select list={filteredList()} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        </div>
        <h2 className='pt-8 sm:text-lg font-medium sm:pb-[36px]'>Set the number of words for output text.</h2>  
        <div className='w-[500px] max-w-full'>
          <RangeSlider />
        </div>
        </div>
   </div>
  )
}

export default Content