import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
    className={`${
      isSidebarOpen ? "w-1/5" : "w-16"
    } bg-gray-800 text-white p-4 transition-all duration-300 relative min-h-screen`}
  >
    {/* Burger Menu Button */}
    <button
      className="absolute top-4 left-4 focus:outline-none"
      onClick={toggleSidebar}
    >
      {/* Hamburger Menu Icon */}
      <div className="space-y-1">
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
      </div>
    </button>

    {/* Sidebar content (conditionally rendered based on state) */}
    <div className={`${isSidebarOpen ? "block" : "hidden"} mt-12 `}>
      <h2 className="text-xl font-bold mb-4">Otions</h2>
      <ul className='flex flex-col py-16 justify-between h-[80vh]  '>
        <Link to='/'><li className='mb-4 text-blue-500 font-bold bg-[#FFFFFF] text-[#333333] py-6 pl-4 rounded-2xl cursor-pointer'> Text</li></Link>
        <Link to='/image'><li className="mb-4 text-blue-500 font-bold bg-[#FFFFFF] text-[#333333] py-6 pl-4 rounded-2xl cursor-pointer"> Image</li></Link>
        <Link to='/video'><li className="mb-4 text-blue-500 font-bold bg-[#FFFFFF] text-[#333333] py-6 pl-4 rounded-2xl cursor-pointer"> Video</li></Link>
        <Link to='/document'><li className="mb-4 text-blue-500 font-bold bg-[#FFFFFF] text-[#333333] py-6 pl-4 rounded-2xl cursor-pointer"> Document</li></Link>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar
