import React, { useState, useEffect } from "react"; // Added useEffect here
import axios from 'axios'; // Make sure to import axios as well
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  const [shoes, setShoes] = useState([]); // State to store shoe data

  useEffect(() => {
    // Fetch the shoe data from the backend
    axios.get('http://localhost:6969/v1/products/fetch')
      .then(response => {
        setShoes(response.data); // Set the shoe data to state
      })
      .catch(error => {
        console.error('There was an error fetching the shoe data!', error);
      });
  }, []);

  return (
    <div className="cards">
      <div className="card-head">
        <h2>
          DON’T MISS OUT <br /> NEW DROPS
        </h2>
        <button>SHOP NEW DROPS</button>
      </div>
      <div className="card-container">
        {shoes.map((item) => {
          return (
            <div className="card" key={item.productId}>
              <div className="card-image">
                <img src={item.productPreview[0]} alt={item.productName} />
              </div>
              <div className="card-title">
                <h2>{item.productName}</h2>
              </div>
              <div className="card-price">
                <Link to='./products' style={{ textDecoration: 'none', color: 'white' }}>
                  <h3>VIEW PRODUCT - <span>{item.price}</span></h3>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
