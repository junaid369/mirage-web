import React from 'react'

function DeptSketon() {
  return (
    <div className="animate-pulse grid grid-cols-2 gap-4  max-sm:mx-5 mx-32  mt-20">
    {Array(14).fill().map((_, index) => (
      <div key={index} className="w-full max-sm:h-24 h-52 bg-gray-300 rounded-lg"></div>
    ))}
    </div>
  )
}

export default DeptSketon
