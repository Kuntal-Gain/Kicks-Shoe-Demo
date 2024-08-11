import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { FaCartPlus, FaBuyNLarge } from "react-icons/fa";
import ScrollToTop from 'react-scroll-to-top';
import "./Products.css";

const Products = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:6969/v1/products/fetch/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product data!', error);
      });
  }, [productId]);

  const handleColorClick = (index) => {
    setSelectedColorIdx(index);
  };

  const handleSizeClick = (index) => {
    setSelectedSizeIdx(index);
  };

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
          <button className="new-release">New Release</button>
          <h2>{product.productName}</h2>
          <h4>${product.price}</h4>
          <p>Color</p>
          <div className="color">
            {product.colorOptions?.map((color, index) => (
              <div
                className={`color-box-container ${selectedColorIdx === index ? 'selected' : ''}`}
                key={index}
                onClick={() => handleColorClick(index)}
              >
                <div
                  className="color-box"
                  style={{
                    background: color,
                  }}
                />
              </div>
            )) || <div>No color options available</div>}
          </div>

          <p>Size</p>
          <div className="size">
            {product.sizes?.map((size, index) => (
              <div
                className={`size-num ${selectedSizeIdx === index ? 'selected' : ''}`}
                key={index}
                onClick={() => handleSizeClick(index)}
              >
                {size}
              </div>
            )) || <div>No size options available</div>}
          </div>
          <div className="button-div">
            <button className="cart">
              <FaCartPlus /> ADD TO CART
            </button>
            <button className="like">
              <CiHeart />
            </button>
          </div>
          <button type="submit" className="buy">
            <FaBuyNLarge /> BUY IT NOW
          </button>
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
