import React from 'react';
import './Stories.css';
import { Avatar } from '@mui/material';

function Stories(user) {
  return (
    <section>
      <div className="carrousel">
        <div className="story">
          <Avatar className="avatar">{ user.charAt(0).toUpperCase() }</Avatar>
          <p>{ user }</p>
        </div>
      </div>
    </section>
  );
}

export default Stories;