import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';

function BottomNav() {
  return (
    <div className="bottom-nav">
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        <BottomNavigationAction label="Wishlists" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Log in" icon={<LoginIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default BottomNav;
