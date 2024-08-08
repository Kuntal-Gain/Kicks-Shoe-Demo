import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';
import Categories from './components/Categories/Categories';
import Review from './components/Reviews/Review';
import Footer from './components/Footer/Footer';
import Signup from './page/Signup/Signup';
import Login from './page/Login/Login';

const App = () => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('isOnline') === 'true';

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Hero /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes here */}
        </Routes>
        {isAuthenticated && (
          <>
            <Cards />
            <Categories />
            <Review />
          </>
        )}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
