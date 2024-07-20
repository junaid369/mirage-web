import React from 'react'

function BrandSkelton() {
  return (
    <div className="animate-pulse grid grid-cols-8 gap-4 mx-32  mt-20">
    {/* {Array(14).fill().map((_, index) => ( */}
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
    {/* ))} */}
    </div>
  )
}

export default BrandSkelton
