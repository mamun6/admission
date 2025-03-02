import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='container' >
        <img src={assets.logo} alt="" className='logo' />
        <ul> 
            <li> <Link  to='/home' >Home </Link> </li>
            <li> <Link to='/about' >About </Link> </li>
            <li> <Link to='/program' > Program </Link> </li>
            <li><Link to='/university'>University</Link></li>
            <li> <button className='btn' > <Link to='/contact' >Contact</Link> </button> </li>
        </ul>
        
    </nav>
  )
}

export default Navbar