import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom"
import VillaIcon from '@mui/icons-material/Villa';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import RoomServiceIcon from '@mui/icons-material/RoomService';


function Header() {
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
          <div className='search__section'>
            <div className='section__title'>Check in</div>
            <div className='section__desc'>Add dates</div>
          </div>
          <div className='search__section'>
            <div className='section__title'>Check out</div>
            <div className='section__desc'>Add dates</div>
          </div>
          <div className='search__section'>
            <div className='section__title'>Who</div>
            <div className='section__desc'>Add guests</div>
          </div>
          <div className='search__icon'>
            <SearchIcon />
          </div>
        </div>
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
