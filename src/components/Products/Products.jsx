import React from "react";
import { CiHeart } from "react-icons/ci";
import Cards from "../Cards/Cards";
import ScrollToTop from 'react-scroll-to-top';
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products">
      <div style={{ marginTop: "1vh" }} />
      <ScrollToTop smooth />
      <div className="products-container">
        <div className="product-left">
          <div className="image-div">
            <img id="div1" src="/assets/Products/Shoe1.png" alt="" />
          </div>
          <div className="image-div">
            <img id="div2" src="/assets/Products/Shoe2.png" alt="" />
          </div>
          <div className="image-div">
            <img id="div3" src="/assets/Products/Shoe3.png" alt="" />
          </div>
          <div className="image-div">
            <img id="div4" src="/assets/Products/Shoe4.png" alt="" />
          </div>
        </div>
        <div className="product-right">
          <button>New Release</button>
          <h2>ADIDAS 4DFWD X PARLEY RUNNING SHOES</h2>
          <h4>$125.00</h4>
          <p>Color</p>
          <div className="color">
            <div className="color1"></div>
            <div className="color2"></div>
          </div>
          <div className="size">
            <p>Size</p>
            <div className="size-num">38</div>
            <div className="size-num">39</div>
            <div className="size-num">40</div>
            <div className="size-num">41</div>
            <div className="size-num">42</div>
            <div className="size-num">43</div>
            <div className="size-num">44</div>
            <div className="size-num">45</div>
            <div className="size-num">46</div>
            <div className="size-num">47</div>
          </div>
          <div className="button-div">
          <Link to='/cart' style={{ textDecoration: 'none'}}><button className="cart">ADD TO CART</button></Link>
            <button className="like">
              <CiHeart />
            </button>
          </div>
          <Link to='/check' style={{ textDecoration: 'none'}}><button type="submit" className="buy">BUY IT NOW</button></Link>
          <div className="product-data">
            <h2>ABOUT THE PRODUCT</h2>
            <p>Shadow Navy / Army Green</p>
            <p>
              This product is excluded from all promotional discounts and
              offers.
            </p>
            <ul>
              <li>
                Pay over time in interest-free installments with Affirm, Klarna
                or Afterpay.
              </li>
              <li>
                Join adiClub to get unlimited free standard shipping, returns, &
                exchanges.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Products;