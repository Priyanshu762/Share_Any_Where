import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <h1 className="text-lg font-bold">My Webpage</h1>
    <button className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded">
      Share
    </button>
  </nav>
  )
}

export default Navbar
