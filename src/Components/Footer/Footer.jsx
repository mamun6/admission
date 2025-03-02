import React from 'react';
import './Footer.css';
import FooterLinks from './FooterLinks';
import SocialIcons from './SocialIcons';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Links Section */}
        <FooterLinks />

        {/* Newsletter Section */}
        <NewsletterForm />

        {/* Social Media Section */}
        <SocialIcons />
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} M-teach. All rights and reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;