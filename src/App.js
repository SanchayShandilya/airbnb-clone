//import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import FooterLinks from './FooterLinks';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';
// import Search from './Search';

function App() {
  return (
    //BEM
    <div className="App">

      <Router>
        <Header />

        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterLinks />
        <Footer />

      </Router>


      {/*Home*/}


      {/*Header*/}

      {/*Banner*/}

      {/*Cards*/}

      {/*Footer*/}

      {/* SearchPage */}
      {/*...*/}

    </div>
  );
}

export default App;
