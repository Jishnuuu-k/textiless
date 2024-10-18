import React, { useState } from 'react';
import './banner.css';
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaCartArrowDown } from "react-icons/fa";
function Click(){
    console.log("Clicked")
}
function Banner() {
    return (
        <div className="Banner">
            


            <marquee behavior="" direction="">WELCOME TO LAVENDER !ㅤㅤ|ㅤㅤFROM LOOM TO LUXURYㅤㅤㅤㅤ
            Discover the Elegance of Lavender: Handcrafted Textiles for Every Occasion!ㅤㅤㅤㅤ
            Experience the Art of Loom Weaving – Luxury Fabrics for the Discerning!ㅤㅤㅤㅤ
            Sustainable Style Meets Timeless Craftsmanship – Explore Our Collection!ㅤㅤㅤㅤ
            From Loom to Luxury: Transform Your Home with Our Exquisite Textiles!ㅤㅤㅤㅤ
            Where Tradition Meets Innovation – Shop Our Premium Fabrics Today!ㅤㅤㅤㅤ
            Luxury You Can Feel – Embrace the Softness of Handwoven Lavender Fabrics!ㅤㅤㅤㅤ
            Elevate Your Lifestyle with Our Custom, Eco-Friendly Textiles!ㅤㅤㅤㅤ
            "Transform Your Wardrobe and Home with the Finest Lavender Designs!"

            </marquee>
            <div className="BannerSlider">
                <div className="ContentinsideBannerslider">
                    <div className="BoxInside">
                        <div className="BannerBox">
                            <img src="/images/lvndrshade.png" alt="Lavender Logo" />
                        </div>
                        <div className="BannerButtons">
                            <a href="https://wa.me/+917902286179" className='wame'> 
                            <button className="BannerButton" onClick={Click}>
                                <div className="Chat">
                                Chat with us 
                                </div>
                                <div className="BtnIcon">
                                <TbBrandWhatsapp className='Icon'/>
                                </div>
                                
                            </button>
                            </a>
                            <button className="BannerButton" onClick={Click}>
                                <div className="Chat">
                                    Go to cart 
                                </div>
                                <div className="BtnIcon">
                                    <FaCartArrowDown className='Icon'/>
                                </div>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div className="BannerGif">
                    <img src="/images/animapic.png" alt="gif" />
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
                                <h2 className='ContentHeading'>CONTENTS</h2>
                                <p>Lavender is a welcoming and user-focused clothing website, designed to make the shopping experience easy and enjoyable. We specialize in custom-made garments, where users can personalize their outfits by selecting colors, styles, and designs that fit their vision. Our interface is intuitive, allowing for a seamless browsing experience, and we ensure clear communication about orders and delivery times. Lavender prioritizes quality, comfort, and a tailored approach, so customers feel confident and satisfied with every purchase right from their first visit.</p>
                            </div>
                        </div>
                        <div className="ContentBox2">
                            <div className="BoxinsideContentbox2">
                                <h2 className='ContentHeading'>ABOUT US</h2>
                                <details>
                                <summary>
                                Welcome to Lavender Makeover Studio & Stitching Center, where beauty meets creativity. At Lavender, we are committed to providing our clients with personalized beauty treatments and custom-made clothing to enhance their unique style. Our studio offers a wide range of services, including hydrafacial, warts removal, dandruff treatment, bridal and party makeup, hair extensions, and more. Whether you're looking for a beauty transformation or a beautifully tailored outfit, we’ve got you covered.
                                </summary>
                                <p>
                                Our stitching center specializes in creating custom ladies' dresses, including churidars, frocks, lachas, crop tops, sarees, and blouses. We prioritize your preferences, allowing you to select the color, design, and fabric to create the perfect outfit that fits your style.

                                With exclusive discounts available for pre-booking through our website and ongoing offers, Lavender is your go-to destination for a complete makeover experience. Our team is passionate about ensuring you leave feeling confident, beautiful, and ready to shine.
                                </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='SectionHeading'>NEWLY ARRIVED</h2>
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
            <h2 className='SectionHeading'>MOST POPULAR</h2>
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
