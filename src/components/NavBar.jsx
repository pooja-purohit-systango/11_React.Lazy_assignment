import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <nav>
      <ul>
      <Link to="/home">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact Us</Link>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar

