import React from 'react'

function Pill({active, value}) {
  return (
      <div className={`h-[50px] border border-[#616066] flex cursor-pointer justify-start items-center rounded-[30px] px-6 ${active ? "bg-[#523FD7] border-[#523fd7]" : ""}`}>{value}</div>
  )
}

export default Pill