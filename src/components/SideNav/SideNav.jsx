import React from 'react';
import './SideNav.css';
import { ControlPoint, Explore, FavoriteBorderOutlined, Home, Mms, MovieFilter, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';


function SideNav() {
  return (
    <section>
      <div className="logo">
        <img src="public/logotipo.png" alt="Instagram" />
      </div>
      <ul>
        <li>
          <a href='https://www.instagram.com/'>
            <Home className='icon' />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/'>
            <Search className='icon' />
            <span>Search</span>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/'>
            <Explore className='icon' />
            <span>Explore</span>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/'>
            <MovieFilter className='icon' />
            <span>Reels</span>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/'>
            <Mms className='icon' />
            <span>Messages</span>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/'>
            <FavoriteBorderOutlined className='icon' />
            <span>Notifications</span>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/'>
            <ControlPoint className='icon' />
            <span>Create</span>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/'>
            <Avatar className='icon'>M</Avatar>
            <span>Profile</span>
          </a>
        </li>
        <li className='more'>
          <a href='https://www.instagram.com/'>
            <ControlPoint className='icon' />
            <span>More</span></a>
          </li>
      </ul>
    </section>
  );
}

export default SideNav;