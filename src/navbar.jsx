import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/' className='text'>Home </Link>
        <Link to='/student' className='text'>Student</Link>
        <Link to='/contact'className='text'>Contact</Link>
    </div>
  )
}

export default Navbar