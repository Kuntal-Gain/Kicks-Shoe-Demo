import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import ScrollToTop from 'react-scroll-to-top';
import "./Products.css";

const Products = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product data based on productId
    axios.get(`http://localhost:6969/v1/products/fetch/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product data!', error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products">
      <div style={{ marginTop: "1vh" }} />
      <ScrollToTop smooth />
      <div className="products-container">
        <div className="product-left">
          {product.productPreview?.map((image, index) => (
            <div className="image-div" key={index}>
              <img id={`div${index + 1}`} src={image} alt={`Product image ${index + 1}`} />
            </div>
          )) || <div>No images available</div>}
        </div>
        <div className="product-right">
          <button>New Release</button>
          <h2>{product.productName}</h2>
          <h4>${product.price}</h4>
          <p>Color</p>
          <div className="color">
            {product.colorOptions?.map((color, index) => (
              <div
                className="color-box"
                key={index}
                style={{
                  background: color,
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  margin: '5px',
                  border: '1px solid #ddd' // Optional: to make color boxes more visible
                }}
              >
                {/* Optional: add text or icon */}
              </div>
            )) || <div>No color options available</div>}
          </div>
          <div className="size">
            <p>Size</p>
            {product.sizes?.map((size, index) => (
              <div className="size-num" key={index}>{size}</div>
            )) || <div>No size options available</div>}
          </div>
          <div className="button-div">
            <button className="cart">ADD TO CART</button>
            <button className="like">
              <CiHeart />
            </button>
          </div>
          <button type="submit" className="buy">BUY IT NOW</button>
          <div className="product-data">
            <h2>ABOUT THE PRODUCT</h2>
            <p>{product.description || 'No product description available'}</p>
            <ul>
              <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
              <li>Or pay in full today using our secure checkout.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
