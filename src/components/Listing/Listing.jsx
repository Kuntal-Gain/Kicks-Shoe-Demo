import React from 'react';
import topimg from "./assets/TopImg.png";
import "./Listing.css"
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { refine, Size, color, type, gender, Shoedata } from './Data';

function Listing() {
    return (
        <>
            <div className="topimg">
                <div className="text">
                    <p className='top'>Limited time only</p>
                    <h2>Get 30% off</h2>
                    <p>Sneakers made with your comfort in mind so you <br /> can put all of your focus into your next session.</p>
                </div>
                <img src={topimg} alt="" />
            </div>

            <div className="chart">
                <div className="left">
                    <h2>Life Style Shoes</h2>
                    <p>122 items</p>
                </div>

                <div className="right">
                    <div className="sign-check">
                        <select name="Select your gender" id="dropdown">
                            <option value="Male">TRENDING</option>
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
                        {
                            refine.map((item) => {
                                return (
                                    <div>{item}</div>
                                )

                            })
                        }
                    </div>

                    <div className="sizetxt">
                        <h3>SIZE</h3>
                        <IoIosArrowUp />
                    </div>
                    <div className="sizepage">
                        {
                            Size.map((size) => {
                                return (
                                    <div>{size}</div>
                                )
                            })
                        }
                    </div>

                    <div className="color">
                        <h3>COLOR</h3>
                        <IoIosArrowUp />
                    </div>
                    <div className="color-box">
                        {
                            color.map((color) => {
                                return (
                                    <div style={{ background: `${color}` }}></div>
                                )
                            }
                            )
                        }
                    </div>

                    <div className="typetxt">
                        <h3>TYPE</h3>
                        <IoIosArrowUp />
                    </div>

                    <div className="checkbox">
                        {
                            type.map((item) => {
                                return (
                                    <div className='element'>
                                        <input type="checkbox" name="" id="" />
                                        <p>{item}</p>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className="typetxt">
                        <h3>GENDER</h3>
                        <IoIosArrowUp />
                    </div>

                    <div className="checkbox2">
                        {
                            gender.map((item) => {
                                return (
                                    <div className='element'>
                                        <input type="checkbox" name="" id="" />
                                        <p>{item}</p>
                                    </div>

                                )
                            })
                        }
                    </div>

                    <div className="typetxt">
                        <h3>PRICE</h3>
                        <IoIosArrowUp />
                    </div>

                    <div className="range">
                        <input type="range" name="" id="" min={0} max={1000} />
                    </div>
                    <div className="p">
                        <p>$0</p>
                        <p>$1000</p>
                    </div>
                </div>


                <div className="rightsection">
                    {
                        Shoedata.map((item) => {
                            return (
                                <div className="card">
                                    <div className="card-image"> <div className="new" style={{background: item.bagd, color: item.color}}><p>{item.tag}</p></div>
                                        <img src={item.image} alt="" />

                                    </div>
                                   

                                    <div className="card-title">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <button>VIEW PRODUCT - {item.price}</button>
                                </div>
                            )
                        })
                    }

                    <div className="pages">
                        <div><IoIosArrowBack style={{paddingTop: 5, fontSize : "1rem"}}/>Previous</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <p>....</p>
                        <div>10</div>
                        <div>Next<IoIosArrowForward style={{paddingTop: 5, fontSize : "1rem"}}/></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing
