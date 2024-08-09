import React, { useEffect, useState } from 'react';
import axios from 'axios';
import topimg from "./assets/TopImg.png";
import "./Listing.css";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { refine, Size, color, type, gender } from './Data';
import { Link } from 'react-router-dom';

function Listing() {
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
    }, []); // Empty dependency array to run only once on mount

    return (
        <>
            <div className="topimg">
                <div className="text">
                    <p className='top'>Limited time only</p>
                    <h2>Get 30% off</h2>
                    <p>Sneakers made with your comfort in mind so you <br /> can put all of your focus into your next session.</p>
                </div>
                <img src={topimg} alt="Sneakers promotion" />
            </div>

            <div className="chart">
                <div className="left">
                    <h2>Life Style Shoes</h2>
                    <p>{shoes.length} items</p> {/* Display the number of items */}
                </div>

                <div className="right">
                    <div className="sign-check">
                        <select name="Select your gender" id="dropdown">
                            <option value="TRENDING">TRENDING</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
            </div>

            <section className="filter">
                <div className="leftsection">
                    <h2>FILTERS</h2>
                    <div className='refine'>
                        <h3>REFINE BY</h3>
                        <IoIosArrowUp />
                    </div>

                    <div className="btn">
                        {refine.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </div>

                    <div className="sizetxt">
                        <h3>SIZE</h3>
                        <IoIosArrowUp />
                    </div>
                    <div className="sizepage">
                        {Size.map((size, index) => (
                            <div key={index}>{size}</div>
                        ))}
                    </div>

                    <div className="color">
                        <h3>COLOR</h3>
                        <IoIosArrowUp />
                    </div>
                    <div className="color-box">
                        {color.map((color, index) => (
                            <div key={index} style={{ background: color }}></div>
                        ))}
                    </div>

                    <div className="typetxt">
                        <h3>TYPE</h3>
                        <IoIosArrowUp />
                    </div>

                    <div className="checkbox">
                        {type.map((item, index) => (
                            <div key={index} className='element'>
                                <input type="checkbox" id={`type-${index}`} />
                                <label htmlFor={`type-${index}`}>{item}</label>
                            </div>
                        ))}
                    </div>
                    <div className="typetxt">
                        <h3>GENDER</h3>
                        <IoIosArrowUp />
                    </div>

                    <div className="checkbox2">
                        {gender.map((item, index) => (
                            <div key={index} className='element'>
                                <input type="checkbox" id={`gender-${index}`} />
                                <label htmlFor={`gender-${index}`}>{item}</label>
                            </div>
                        ))}
                    </div>

                    <div className="typetxt">
                        <h3>PRICE</h3>
                        <IoIosArrowUp />
                    </div>

                    <div className="range">
                        <input type="range" min={0} max={1000} />
                    </div>
                    <div className="p">
                        <p>$0</p>
                        <p>$1000</p>
                    </div>
                </div>

                <div className="rightsection">
                    {shoes.map((item, index) => (
                        <div key={index} className="card">
                            <div className="card-image">
                                <div className="new" style={{ background: item.colorOptions[0] }}>
                                    <p>New</p>
                                </div>
                                <img src={item.productPreview[0]} alt={item.productName} />
                            </div>
                            <div className="card-title">
                                <h2>{item.productName}</h2>

                            </div>
                            <Link to={`/products/${item.productId}`} style={{ textDecoration: 'none' }}>
                                <button>VIEW PRODUCT - ${item.price}</button>
                            </Link>
                        </div>
                    ))}

                    <div className="pages">
                        <div><IoIosArrowBack style={{ paddingTop: 5, fontSize: "1rem" }} />Previous</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <p>....</p>
                        <div>10</div>
                        <div>Next<IoIosArrowForward style={{ paddingTop: 5, fontSize: "1rem" }} /></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Listing;
