<<<<<<< HEAD
import React from 'react';
import './Navbar.css';
import { IoSearch } from "react-icons/io5";
=======
import React from 'react'
import './Navbar.css'
>>>>>>> 08d709029daba0698dba007ba5119058d9397c0f
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Utility function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('isOnline') === 'true';
};

const Navbar = () => {
  const isOnline = isAuthenticated();

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
        {!isOnline ? (
          <Link to='/login'>
            <button className='log'>Log In</button>
          </Link>
        ) : (
          <Link to='/profile'>
            <FaUser />
          </Link>
        )}
        <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}>
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
