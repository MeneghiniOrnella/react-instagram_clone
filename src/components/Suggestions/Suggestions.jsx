import React from 'react';
import './Suggestions.css';
import { Avatar } from '@mui/material';

function Suggestions({ user, relation }) {
  return (
    <div className='suggestions'>
      <div className="usernames">
        <div className="username">
          <div className="left">
            <Avatar className='avatar'>{ user.charAt(0).toUpperCase() }</Avatar>
            <div className="info">
              <span className="username1">{ user }</span>
              <span className="relation">{ relation }</span>
            </div>
          </div>
          <a href='https://www.instagram.com/' className="follow">Follow</a>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;