import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom"
import VillaIcon from '@mui/icons-material/Villa';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import Search from './Search';
import GuestSelector from './guestSelector';

function formatDate(date) {
  return date.toLocaleDateString("en-GB", { day: 'numeric', month: 'short' });
}

function Header() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [guestSummary, setGuestSummary] = useState("Add guests");
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [dateFlexibility, setDateFlexibility] = useState("Exact dates");
  const [isSelectingCheckIn, setIsSelectingCheckIn] = useState(true);
  return (
    <div className='header'>
      <div className='header__left'>
        <Link to='/'>
          <img className='header__icon' src='/images/airbnbIcon.png' alt='' />
        </Link>
      </div>

      <div className='header__centerBox'>
        <div className='header__nav'>
          <div className='nav__item nav__active'>
            <VillaIcon className='nav__icon' />
            Homes
          </div>
          <div className='nav__item'>
            <Diversity1Icon className='nav__icon' />
            Experiences <sup className='new'>NEW</sup>
          </div>
          <div className='nav__item'>
            <RoomServiceIcon className='nav__icon' />
            Services <sup className='new'>NEW</sup>
          </div>
        </div>

        <div className='header__searchBar'>
          <div className='search__section'>
            <div className='section__title'>Where</div>
            <div className='section__desc'>Search destinations</div>
          </div>
          <div className='search__section' onClick={() => setShowDatePicker(!showDatePicker)}>
            <div className='section__title'>Check in</div>
            <div className='section__desc'>
              {checkInDate ? `${formatDate(checkInDate)} ${dateFlexibility}` : 'Add dates'}
              {checkInDate && <span onClick={() => setCheckInDate(null)}> ✕ </span>}
            </div>
          </div>
          <div className='search__section' onClick={() => setShowDatePicker(!showDatePicker)}>
            <div className='section__title'>Check out</div>
            <div className='section__desc'>
              {checkOutDate ? `${formatDate(checkOutDate)} ${dateFlexibility}` : 'Add dates'}
              {checkOutDate && <span onClick={() => setCheckOutDate(null)}> ✕ </span>}
            </div>
          </div>
          <div className='search__section' onClick={() => setShowGuestSelector(!showGuestSelector)}>
            <div className='section__title'>Who</div>
            <div className='section__desc'>{guestSummary}</div>
          </div>

          <div className='search__icon'>
            <SearchIcon />
          </div>
        </div>
        {showDatePicker && (
          <Search
            isSelectingCheckIn={isSelectingCheckIn}
            setIsSelectingCheckIn={setIsSelectingCheckIn}
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
            dateFlexibility={dateFlexibility}
            setDateFlexibility={setDateFlexibility}
          />
        )}
        {showGuestSelector && (
          <div style={{ position: 'absolute', top: '120px', right: '100px', zIndex: 999 }}>
            <GuestSelector setGuestSummary={setGuestSummary} />
          </div>
        )}
      </div>

      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>

  )
}

export default Header
