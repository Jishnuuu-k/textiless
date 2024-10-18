import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContainer">
        <div className="FooterAbout">
          <h3>About Us</h3>
          <p>
            We are a leading textile company dedicated to providing high-quality fabrics and textiles worldwide. Our mission is to combine tradition with innovation to meet the needs of our customers.
          </p>
        </div>
        <div className="FooterLinks">
          <h3>LAVENDER</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="FooterContact">
          <h3>Our Location</h3>
          <div className="MapContainer">
            <iframe
              title="company-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7859.047984145713!2d76.29483119170055!3d9.973503527258208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872cb5271eca3%3A0x8a6c6b60f667b1e6!2sElamkulam%2C%20Kochi%2C%20Ernakulam%2C%20Kerala%20682020!5e0!3m2!1sen!2sin!4v1725244168685!5m2!1sen!2sin"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className="FooterFeedback">
          <h3>Feedback</h3>
          <form>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder=" Email" required />
            <textarea name="message" placeholder="Your Feedback" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="FooterBottom">
        <p>&copy; 2024 Lavender Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;