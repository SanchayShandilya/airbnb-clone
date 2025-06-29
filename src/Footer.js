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
        <a href="https://www.airbnb.co.in/help/article/2855">Privacy</a>
        <a href="https://www.airbnb.co.in/help/article/2908">Terms</a>
        <a href="https://www.airbnb.co.in/sitemaps/v2">Sitemap</a>
        <a href="https://www.airbnb.co.in/about/company-details">Company details</a>
      </div>

      <div className="footer__right">
        <a href="#"><LanguageIcon /> English (IN)</a>
        <a href="#">₹ INR</a>
        <a href="https://www.facebook.com/AirbnbIndia"><FacebookIcon /></a>
        <a href="https://x.com/airbnb_in"><XIcon /></a>
        <a href="https://www.instagram.com/airbnb/"><InstagramIcon /></a>
      </div>
    </div>
  );
}

export default Footer;
