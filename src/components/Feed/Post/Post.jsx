import React from 'react';
import './Post.css';

import { Avatar } from '@mui/material';
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, MoreHoriz, Send } from '@mui/icons-material';

function Post() {
  return (
    <div className='post'>
      <div className="header">
        <div className="left">
          <Avatar className="icon">D</Avatar>
          radian_ • <span>1h</span>
        </div>
        <div className="right">
          <MoreHoriz className="icon" />
        </div>
      </div>
      <div className="media">
        <img src="https://www.forestryengland.uk/sites/default/files/styles/forest_slide_wide_wide/public/media/jamie-street-562280-unsplash.jpg?h=ff2dbe58&itok=bYxQpe5j" alt="dog" />
      </div>
      <div className="footer">
        <div className="left">
          <FavoriteBorder className="icon" />
          <ChatBubbleOutline className="icon" />
          <Send />
        </div>
        <div className="right">
          <BookmarkBorder className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Post;