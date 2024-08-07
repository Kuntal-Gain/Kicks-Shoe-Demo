import React from "react";
import "./Cart.css";
import cartData from "../../data.json";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="cart-top">
        <h3>Saving to celebrate</h3>
        <p>
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
      </div>
      <div className="cart-order">
        <div className="bag">
          <h2>Your Bag</h2>
          <p>
            Items in your bag not reserved- check out now to make them yours.
          </p>
          <div className="bag-details">
            <div className="bag-img">
              <img src="/assets/shoe1.png" alt="" />
            </div>
            <div className="bag-data">
              <h3>DROPSET TRAINER SHOES</h3>
              <p>Men's Road Running Shoes</p>
              <p>Enamel Blue/ University White</p>
              <div className="select-div">
                <select id="">
                  <option value="">Size 10</option>
                  <option value="">Size 11</option>
                  <option value="">Size 12</option>
                </select>
                <select id="quantity">
                  <option value="">Quantity 1</option>
                  <option value="">Quantity 2</option>
                  <option value="">Quantity 3</option>
                </select>
              </div>
            </div>
            <div className="price">
              <p>$130.00</p>
            </div>
          </div>
        </div>
        <div className="order-details">
          <h2>Order Summary</h2>
          <div className="item-details">
            <div className="item-left">
              <h4>1 ITEM</h4>
              <h4>Delivery</h4>
              <h4>Sales Tax</h4>
              <h4>Total</h4>
            </div>
            <div className="item-right">
              <h4>$120.00</h4>
              <h4>$6.99</h4>
              <h4>-</h4>
              <h4>$126.99</h4>
            </div>
          </div>
          <Link to='/check' style={{ textDecoration: 'none'}}><button type="submit">CHECKOUT</button></Link>
          <p>Use a Promo Code</p>
        </div>
      </div>
      <div className="carts">
        <div className="cart-head">
          <h2>You may also like</h2>
          <div className="cart-btn">
            <button>
              SEE MORE
            </button>
          </div>
        </div>
        <div className="cart-container">
          {cartData.map((item) => {
            return (
              <div className="cart">
                <div className="cart-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-title">
                  <h2>{item.title}</h2>
                </div>
                <div className="cart-price">
                  <h3>VIEW PRODUCT - <span>{item.price}</span></h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;