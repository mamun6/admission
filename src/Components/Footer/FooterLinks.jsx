import React from 'react';

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <div className="footer-section">
        <h4>About Us</h4>
        <ul>
          <li><a href="/about">Our Story</a></li>
          <li><a href="/team">Our Team</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/press">Press</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/shipping">Shipping</a></li>
          <li><a href="/returns">Returns</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/cookies-policy">Cookies Policy</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;