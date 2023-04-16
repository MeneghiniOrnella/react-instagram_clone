import React from 'react';
import './Suggestions.css';
import { Avatar } from '@mui/material';

function Suggestions() {
  return (
    <div className='suggestions'>
      <div>
        <div className="title">Suggestions for you</div>
        <a href='https://www.instagram.com/' className="seeAll">See All</a>
      </div>
      <div className="usernames">
        <div className="username">
          <div className="left">
            <Avatar>A</Avatar>
            <div className="info">
              <span className="username">username</span>
              <span className="relation">relation</span>
            </div>
          </div>
          <a href='https://www.instagram.com/' className="follow">Follow</a>
        </div>
      </div>
      <div className="footer">
        <a href="https://www.instagram.com/">About</a>
        <a href="https://www.instagram.com/">Help</a>
        <a href="https://www.instagram.com/">Press</a>
        <a href="https://www.instagram.com/">API</a>
        <a href="https://www.instagram.com/">Jobs</a>
        <a href="https://www.instagram.com/">Privacy</a>
        <a href="https://www.instagram.com/">Terms</a>
        <a href="https://www.instagram.com/">Locations</a>
        <a href="https://www.instagram.com/">Language</a>
        <a href="https://www.instagram.com/">Meta Verified</a>
        <p>© 2023 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
}

export default Suggestions;