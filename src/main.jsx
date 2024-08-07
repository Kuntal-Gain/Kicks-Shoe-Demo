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
import Checkout from './page/Checkout/Checkout.jsx'
import Men from './page/Men/Men.jsx'
import Shops from './page/Shops/Shops.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hero />
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
