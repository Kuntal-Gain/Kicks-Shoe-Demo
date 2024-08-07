import React from 'react'
import './Navbar.css'
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <Link to='/men' style={{ textDecoration: 'none', color: 'black'}}><p>New Drops</p></Link>
        <p>Category</p>
        <Link to='/shops' style={{ textDecoration: 'none', color: 'black'}}><p>Stores</p></Link>
      </div>
      <div className="nav-center">
        <Link to='/'><img className='nav-logo' src="/assets/logo-kicks.png" alt="" /></Link>
      </div>
      <div className="nav-right">
        <Link to='/login'><button className='log'>Log In</button></Link>
        <Link to='/cart' style={{ textDecoration: 'none', color: 'black'}}><FaShoppingCart /></Link>
      </div>
    </div>
  )
}

export default Navbar
