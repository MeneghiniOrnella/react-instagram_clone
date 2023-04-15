import React from 'react';
import './SideNav.css';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ReelsIcon from '@mui/icons-material/MovieFilter';
import MessageIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/FavoriteBorder';
import CreateIcon from '@mui/icons-material/AddBox';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/Menu';

function SideNav() {
  return (
    <section>
      <div className="logo">
        Instagram
      </div>
      <ul>
        <li><HomeIcon /> <span>Home</span></li>
        <li><SearchIcon /> <span>Search</span></li>
        <li><ExploreIcon /> <span>Explore</span></li>
        <li><ReelsIcon /> <span>Reels</span></li>
        <li><MessageIcon /> <span>Messages</span></li>
        <li><NotificationsIcon /> <span>Notifications</span></li>
        <li><CreateIcon /> <span>Create</span></li>
        <li><ProfileIcon /> <span>Profile</span></li>
      </ul>
      <ul>
        <li><MoreIcon /> <span>More</span></li>
      </ul>
    </section>
  );
}

export default SideNav;