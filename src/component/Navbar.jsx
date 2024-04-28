import React from 'react'
import { Link } from 'react-router-dom'

React
function Navbar() {
  return (
    <div className='flex w-full p-3 justify-around'>

      <h1>Arkan</h1>
      <ul className='flex justify-around gap-9'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar