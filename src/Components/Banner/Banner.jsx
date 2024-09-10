import React, { useState } from 'react';
import './banner.css';

function Banner() {
    return (
        <div className="Banner">
            <div className="BannerSlider">
                <div className="ContentinsideBannerslider">
                    <div className="BoxInside">
                        <div className="BannerBox">
                            <h1>TEXTILE.PRO</h1>
                            <h3>From loom to luxury</h3>
                        </div>
                        <div className="BannerButtons">
                            <a href="">
                            <button className="BannerButton">Chat With Us</button>
                            </a>
                            <a href="">
                            <button className="BannerButton">Go To Cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="BannerGif">
                    <img src="/images/animation1.gif" alt="gif" />
                </div>
            </div>
            <div className="BannerContents">
                <div className="BannerContentsbox1">
                    <div className="Box">
                        <div className="Image">
                            <img src="/images/kurti.jpg" alt="" className="Img" />
                        </div>
                        <div className="ImageDetails">
                            <h3>Cotton Kurtis</h3>
                            <p>100% Organic Cotton</p>
                            <p>Breathable fabric for all-day comfort</p>
                            <p>Available in a variety of sizes</p>
                            <p>Perfect for casual and office wear</p>
                        </div>
                    </div>
                    <div className="Box">
                        <div className="Image">
                        <img src="/images/silksaree.jpg" alt="" className="Img" />
                        </div>
                        <div className="ImageDetails">
                        <h3>Silk Sarees</h3>
                        <p >Pure Silk with Zari Work</p>
                        <p>Available in multiple colors</p>
                        <p>Lightweight and comfortable</p>
                        <p>Ideal for weddings </p>
                        </div>
                    </div>
                    <div className="Box">
                        <div className="Image">
                        <img src="/images/dupatta.webp" alt="" className="Img" />
                        </div>
                        <div className="ImageDetails">
                        <h3>Handloom Dupattas</h3>
                        <p>Handwoven with natural dyes</p>
                        <p>Ethnic and stylish</p>
                        <p>Available in vibrant colors</p>
                        <p>Pairs well with any attire</p>
                        </div>
                    </div>
                    <div className="Box">
                        <div className="Image">
                        <img src="/images/lehenga.webp" alt="" className="Img" />
                        </div>
                        <div className="ImageDetails">
                        <h3>Embroidered Lehenga</h3>
                        <p>Intricate hand embroidery</p>
                        <p>Made with high-quality fabrics</p>
                        <p>Customizable designs</p>
                        <p>Suitable for bridal wear</p>
                        </div>
                    </div>
                </div>
                <div className="BannerContentsbox2">
                    <div className="BoxinsideBannercontentsbox2">
                        <div className="ContentBox1">
                            <div className="BoxinsideContentbox1">
                                <h2>CONTENTS</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi facere sequi quidem dicta numquam beatae quisquam rem cum in doloremque ullam suscipit quos quo, eveniet aspernatur recusandae? Tempora, illo recusandae?</p>
                            </div>
                        </div>
                        <div className="ContentBox2">
                            <div className="BoxinsideContentbox2">
                                <h2>ABOUT US</h2>
                                <details>
                                <summary>
                                    Welcome to Liora, where fashion meets quality and creativity. We are a dedicated textile brand passionate about crafting fabrics that inspire and elevate your style. At Liora, our purpose is to bring you high-quality textiles that blend innovation with timeless design.
                                </summary>
                                <p>
                                    We believe that the right fabric has the power to transform not just your wardrobe, but your entire outlook. What sets Liora apart is our commitment to excellence in every thread. We meticulously source our materials and work with skilled artisans to ensure that each piece we create is not only beautiful but also durable and sustainable. Our customers are at the heart of everything we do, and we strive to provide an exceptional shopping experience that keeps you coming back. Discover the Liora difference—where every fabric tells a story, and every purchase supports a commitment to quality, style, and sustainability. Let us be the fabric of your life.
                                </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>NEWLY ARRIVED</h2>
            <div className="FirstcardSection">
                <div className="Cards">
                    <a href="">
                    <div className="CardImage">
                        <img src="/images/Anarkali-Kurta.jpg" alt="" className="Img" />
                    </div>
                    </a>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Name : Anarkali Kurta</h4>
                            <span>Price :1500</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Banarasi-Saree.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Name : Banarasi Sarees</h4>
                            <span>Price :6400</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Bodycon-PartyDress.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Name : Bodycon Partydresses</h4>
                            <span>Price :2000</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Chanderi-Saree.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Name : Chanderi Saree</h4>
                            <span>Price :3600</span><br />
                            <span>Order</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Cocktail-Dress.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Cocktail Partdresses</h4>
                            <span>Price :1600</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Kanjeevaram-Saree.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Name : Kanjeevaram Saree</h4>
                            <span>Price :6600</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Maxi-Gown.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Name : Maxi Gown Models</h4>
                            <span>Price :1600</span><br />
                            <span>Order</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <h1>MOST POPULAR</h1>
            <div className="FirstcardSection">
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Maxi-Skirt.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Name : Maxi Skirt Model</h4>
                            <span>Price :1499</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Maxi-Skirt2.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Name : Maxi Skirt Model</h4>
                            <span>Price :1599</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Readymade-Gown.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Name : Gown mModel</h4>
                            <span>Price :1599</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Ruffled-Dupatta.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Ruffled Dupatta</h4>
                            <span>Price :1800</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Sharara-Set.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Sharara</h4>
                            <span>Price :2599</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Straight-Kurta.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Name : Kurata</h4>
                            <span>Price :2600</span><br />
                            <span>Brand : liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Cards">
                    <div className="CardImage">
                        <img src="/images/Straight-Kurta2.jpg" alt="" className="Img" />
                    </div>
                    <div className="CardDetails">
                        <div className="Details">
                            <h4>Kurta</h4>
                            <span>Price :2600</span><br />
                            <span>Brand : Liora</span>
                        </div>
                        <div className="Buttons">
                            <a href="">
                            <button>Buy Now</button>
                            </a>
                            <a href="">
                            <button>Add to cart</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
