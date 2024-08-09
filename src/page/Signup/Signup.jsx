import React, { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [gender, setGender] = useState('Select');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:6969/v1/auth/register', {
        fname,
        lname,
        gender,
        email,
        password
      });
      console.log(response.data);
      // Set user as online and navigate to home
      localStorage.setItem('isOnline', 'true');
      navigate('/');
    } catch (error) {
      console.error('Error registering:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className='login'>
      <div className="log-left">
        <h2>Register</h2>
        <p className='sign-para'>Sign up with</p>
        <div className="log-buttons">
          <button><i><FcGoogle /></i></button>
          <button><i><FaApple /></i></button>
          <button><i><FaFacebook /></i></button>
        </div>
        <p className='name-para'>Or</p>
        <p className='name-para'>Your Details</p>
        <div className="sign-input">
          <input
            type="text"
            placeholder='First Name'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder='Last Name'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
        <div className="sign-check">
          <p>Gender</p>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="Select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <p className='name-para'>Login Details</p>
        <div className="sign-input">
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="check-confirm">
          <input type="checkbox" name="" id="" required />
          <p>By clicking 'Register' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</p>
        </div>
        {error && <p className="error-message">{error}</p>}
        <p className='create-acc'>Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}><span>Log in</span></Link></p>
        <button className='email' type='button' onClick={handleRegister}>REGISTER</button>
      </div>
      <div className="sign-right">
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
  );
};

export default Signup;