//import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import FooterLinks from './FooterLinks';
import BottomNav from './BottomNav';
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';
// import Search from './Search';

function App() {
  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomOffset = document.documentElement.offsetHeight - 100; 
      if (scrollPosition >= bottomOffset || scrollPosition <= 100) {
        setShowBottomNav(true);
      } else {
        setShowBottomNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div className="App">

      <Router>
        <Header />

        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterLinks />
        <Footer />
        {showBottomNav && (
          <div className="mobile-nav-wrapper">
            <BottomNav />
          </div>
        )}

      </Router>
      


    </div>
  );
}

export default App;
