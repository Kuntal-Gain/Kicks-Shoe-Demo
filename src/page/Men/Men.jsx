import React from 'react'
import Cards from '../../components/Cards/Cards.jsx'
import './Men.css'

const Men = () => {
  return (
    <div className='men'>
      <div className="men-banner">
        <div className="men-text">
            <h3>Limited time only</h3>
            <h1>Get 30% off</h1>
            <p> Sneakers made with your comfort in mind so you <br /> can put all of your focus into your next session.</p>
        </div>
      </div>
      <div className="men-para">
        <h1>Life Style Shoes</h1>
        <select id="select">
            <option value="all">Trending</option>
            <option value="all">New Arrivals</option>
            <option value="all">Best Sellers</option>
            <option value="all">Casual</option>
        </select>
      </div>
      <div className="men-left">
        <h1>Filters</h1>
        <h2>REFINE BY</h2>
        <div className="refine">
            <button>Golf</button>
            <button>Casual</button>
            <button>Jogging</button>
            <button>Sports</button>
            <button>Outdoor</button>
        </div>
        <h2>CATEGORY</h2>
        <div className="input">
            <input type="checkbox" name="" id="" />
            <p>Men Shoes</p>
        </div>
        <div className="input">
            <input type="checkbox" name="" id="" />
            <p>Casual Shoes</p>
        </div>
        <div className="input">
            <input type="checkbox" name="" id="" />
            <p>Runners</p>
        </div>
        <div className="input">
            <input type="checkbox" name="" id="" />
            <p>Hiking</p>
        </div>
        <div className="input">
            <input type="checkbox" name="" id="" />
            <p>Sneaker</p>
        </div>
        <div className="input">
            <input type="checkbox" name="" id="" />
            <p>Basketball</p>
        </div>
      </div>
      <div className="men-right">
        <Cards />
      </div>
    </div>
  )
}

export default Men
