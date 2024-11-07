import React from 'react'

function Navbar() {
  return (
    <div className="flex py-3 flex-wrap justify-around">
        <h1 className="text-lg font-semibold">Todo App</h1>
        <ul className="flex gap-[40px] tet-m">
        <li>Home</li>    
        <li>Contact</li>
        <li>Services</li>
        <li>About</li>
        </ul>    
    </div>
  )
}

export default Navbar