import React from 'react';
import './Footer.css';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__right">
        <div className="footer__lang-currency">
          <a href="#"><LanguageIcon /> English (IN)</a>
          <a href="#">₹ INR</a>
        </div>

        <div className="footer__social-icons">
          <a href="https://www.facebook.com/AirbnbIndia"><FacebookIcon /></a>
          <a href="https://x.com/airbnb_in"><XIcon /></a>
          <a href="https://www.instagram.com/airbnb/"><InstagramIcon /></a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 Airbnb, Inc.</p>
        <div className="footer__links">
          <a href="https://www.airbnb.co.in/help/article/2855">Privacy </a>&middot;
          <a href="https://www.airbnb.co.in/help/article/2908">Terms</a>&middot;
          <a href="https://www.airbnb.co.in/sitemaps/v2">Sitemap</a>&middot;
          <a href="https://www.airbnb.co.in/about/company-details">Company details</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
