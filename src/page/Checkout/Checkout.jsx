import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <h2>Contact Details</h2>
        <p>We will use these details to keep you inform about your delivery.</p>
        <input type="email" placeholder="Email" />
        <div className="shipping">
          <h2>Shipping Address</h2>
          <div className="name">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="First Name" />
          </div>
          <div className="address">
            <input type="text" placeholder="Find Delivery Address" />
            <input type="number" id="num" placeholder="Phone Number" />
          </div>
        </div>
        <h2>Delivery Details</h2>
        <div className="standard">
          <div className="stan-details">
            <h3>Standard Delivery</h3>
            <h3>$5.00</h3>
          </div>
          <p>Enter your address to see when you'll get your order</p>
        </div>
        <div className="standard" id="stan2">
          <div className="stan-details">
            <h3>Collect in store</h3>
            <h3>Free</h3>
          </div>
          <p>Pay now, collect in store</p>
        </div>
        <button type="submit">REVIEW AND PAY</button>
      </div>
      <div className="checkout-right">
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
         <h1>Order Details</h1>
        <div className="orders-details">
          <div className="orders-img">
            <img src="/assets/shoe1.png" alt="" />
          </div>
          <div className="orders-data">
            <h3>DROPSET RUNNING SHOES</h3>
            <p>Men's Road Running Shoes</p>
            <p>Enamel Blue/ University White</p>
            <div className="user-details">
              <p>Size 10</p>
              <p>Quantity 1</p>
            </div>
            <h4 className="price-para">$120.00</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
