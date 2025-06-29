import React from 'react';
import './FooterLinks.css';

function FooterLinks() {
  return (
    <div className="footerLinks">
      <div className="footerLinks__tabs">
        <span className="activeTab">Unique stays</span>
        <span>Categories</span>
      </div>

      <div className="footerLinks__grid">
        <div>
          <a href="#">Yurt Rentals</a><span>United States</span>
          <a href="#">Farm Houses</a><span>United States</span>
          <a href="#">Cottage Rentals</a><span>United States</span>
        </div>
        <div>
          <a href="#">Yurt Rentals</a><span>United Kingdom</span>
          <a href="#">Farm Cottages</a><span>United Kingdom</span>
          <a href="#">Holiday Cottages</a><span>United Kingdom</span>
        </div>
        <div>
          <a href="#">Castle Rentals</a><span>United States</span>
          <a href="#">Cabin Rentals</a><span>Australia</span>
          <a href="#">Mansion Rentals</a><span>United States</span>
        </div>
        <div>
          <a href="#">Houseboats</a><span>United States</span>
          <a href="#">Luxury Cabins</a><span>United Kingdom</span>
          <a href="#">Villa Rentals</a><span>United Kingdom</span>
        </div>
        <div>
          <a href="#">Holiday Caravans</a><span>United Kingdom</span>
          <a href="#">Luxury Cabins</a><span>United States</span>
          <a href="#">Holiday Bungalows</a><span>United Kingdom</span>
        </div>
        <div>
          <a href="#">Private Island Rentals</a><span>United States</span>
          <a href="#">Holiday Chalets</a><span>United Kingdom</span>
        </div>
      </div>

      <div className="footerLinks__info">
        <div>
          <h4>Support</h4>
          <a href="https://www.airbnb.co.in/help">Help Centre</a>
          <a href="https://www.airbnb.co.in/help/article/3218">AirCover</a>
          <a href="https://www.airbnb.co.in/against-discrimination">Anti-discrimination</a>
          <a href="#">Disability support</a>
          <a href="#">Cancellation options</a>
          <a href="#">Report neighbourhood concern</a>
        </div>
        <div>
          <h4>Hosting</h4>
          <a href="#">Airbnb your home</a>
          <a href="#">Airbnb your experience</a>
          <a href="#">Airbnb your service</a>
          <a href="#">AirCover for Hosts</a>
          <a href="#">Hosting resources</a>
          <a href="#">Community forum</a>
          <a href="#">Hosting responsibly</a>
        </div>
        <div>
          <h4>Airbnb</h4>
          <a href="#">2025 Summer Release</a>
          <a href="#">Newsroom</a>
          <a href="#">Careers</a>
          <a href="#">Investors</a>
          <a href="#">Airbnb.org emergency stays</a>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
