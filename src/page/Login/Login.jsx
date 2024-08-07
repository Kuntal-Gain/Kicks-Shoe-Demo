import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="log-left">
        <h2>Login</h2>
        <p className='log-para'>Forgot your password ?</p>
        <div className="log-input">
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </div>
        <div className="log-check">
          <input type="checkbox" name="" id="" />
          <p>Keep me logged in - applies to all log in options below. More info</p>
        </div>
        <button className='email' type='submit'>LOGIN</button>
        <div className="log-buttons">
          <button><i><FcGoogle /></i></button>
          <button><i><FaApple /></i></button>
          <button><i><FaFacebook /></i></button>
        </div>
        <p className='log-conf'>By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</p>
        <p className='create-acc'>Don't have an account ? <Link to='/signup' style={{ textDecoration: 'none'}}><span>Create an account</span></Link></p>
      </div>
      <div className="log-right">
        <h2>Join Kicks Club Get Rewarded Today.</h2>
        <p>As kicks club member you get rewarded with what you love for doing what you love. Sign up today and receive immediate access to these Level 1 benefits:</p>
        <ul>
          <li>Free Shipping</li>
          <li>A 15% off voucher for your next purchase​</li>
          <li>Access to Members Only products and sales​</li>
          <li>Access to adidas Running and Training apps</li>
          <li>Special offers and promotions​</li>
        </ul>
        <p className='para'>Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.​</p>
        <button className='join' type='submit'>JOIN THE CLUB</button>
      </div>
    </div>
  )
}

export default Login
