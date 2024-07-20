import React from "react";

function Skelton() {
  return (
    <div className="animate-pulse mx-5 h-96 max-sm:h-40 mt-5">
      <div className="w-full h-2/4 bg-gray-300 rounded-lg mb-4"></div>
      <div className="w-4/4 h-1/6 bg-gray-300 rounded mb-2"></div>
      <div className="w-4/4 h-1/6 bg-gray-300 rounded"></div>
      <div className="w-4/4 h-1/6 bg-gray-300 rounded"></div>
    </div>
  );
}

export default Skelton;
