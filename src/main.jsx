<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import Signup from './page/Signup/Signup.jsx'
import Login from './page/Login/Login.jsx'
import Hero from './components/Hero/Hero.jsx'
import Products from './components/Products/Products.jsx'
import Cart from './page/Cart/Cart.jsx'
import Listing from './components/Listing/Listing.jsx'
=======

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import './index.css';
import Signup from './page/Signup/Signup.jsx';
import Login from './page/Login/Login.jsx';
import Hero from './components/Hero/Hero.jsx';
import Products from './components/Products/Products.jsx';
import Cart from './page/Cart/Cart.jsx';
import Checkout from './page/Checkout/Checkout.jsx';

import Men from './page/Men/Men.jsx'
import Shops from './page/Shops/Shops.jsx'


// Utility function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('isOnline') === 'true';
};

// Component to protect routes
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};


>>>>>>> 1df579837d6770fb9dc00353796c603c34e7af1d

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={<Hero />} />, // Protect this route
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
<<<<<<< HEAD
        path: '/listing',
        element: <Listing />
=======
        path: '/check',
        element: <Checkout />
      },
      {
        path: '/men',
        element: <Men />
      },
      {
        path: '/shops',
        element: <Shops />
>>>>>>> 1df579837d6770fb9dc00353796c603c34e7af1d
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
