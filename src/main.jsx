<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';
import Signup from './page/Signup/Signup.jsx';
import Login from './page/Login/Login.jsx';
import Hero from './components/Hero/Hero.jsx';
import Products from './components/Products/Products.jsx';
import Cart from './page/Cart/Cart.jsx';
import Checkout from './page/Checkout/Checkout.jsx';
import Layout from "./Layout.jsx";
import Listing from "./components/Listing/Listing.jsx"
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



=======
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
import ProtectedRoute from './components/ProtectedRoute.jsx'
>>>>>>> a8470df3d958e3ab4dd11553033f3c1d25d27d85

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
        path: '/listing',
<<<<<<< HEAD
        element: <Listing/>,
      },
      {  
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
=======
        element: <Listing />
>>>>>>> a8470df3d958e3ab4dd11553033f3c1d25d27d85
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
