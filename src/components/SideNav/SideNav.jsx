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
        <li><a href='https://www.instagram.com/'><HomeIcon /><span>Home</span></a></li>
        <li><a href='https://www.instagram.com/'><SearchIcon /><span>Search</span></a></li>
        <li><a href='https://www.instagram.com/'><ExploreIcon /><span>Explore</span></a></li>
        <li><a href='https://www.instagram.com/'><ReelsIcon /><span>Reels</span></a></li>
        <li><a href='https://www.instagram.com/'><MessageIcon /><span>Messages</span></a></li>
        <li><a href='https://www.instagram.com/'><NotificationsIcon /><span>Notifications</span></a></li>
        <li><a href='https://www.instagram.com/'><CreateIcon /><span>Create</span></a></li>
        <li><a href='https://www.instagram.com/'><ProfileIcon /><span>Profile</span></a></li>
        <li className='more'><a href='https://www.instagram.com/'><MoreIcon /><span>More</span></a></li>
      </ul>
    </section>
  );
}

export default SideNav;