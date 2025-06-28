import React from 'react';
import './Footer.css';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>© 2025 Airbnb, Inc.</p>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Sitemap</a>
        <a href="#">Company details</a>
      </div>

      <div className="footer__right">
        <a href="#"><LanguageIcon /> English (IN)</a>
        <a href="#">₹ INR</a>
        <a href="#"><FacebookIcon /></a>
        <a href="#"><XIcon /></a>
        <a href="#"><InstagramIcon /></a>
      </div>
    </div>
  );
}

export default Footer;
