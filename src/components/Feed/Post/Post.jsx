import React from 'react';
import './Post.css';

import { Avatar } from '@mui/material';
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, MoreHoriz, Send } from '@mui/icons-material';

function Post({ user, postImg, likes, timestamp }) {
  return (
    <div className='post'>
      <div className="header">
        <div className="left">
          <Avatar className="icon">{ user.charAt(0).toUpperCase() }</Avatar>
          { user } • <span>{ timestamp }</span>
        </div>
        <div className="right">
          <MoreHoriz className="icon" />
        </div>
      </div>
      <div className="media">
        <img src={ postImg } alt={ user } />
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
        Liked by { likes } people
      </div>
    </div>
  )
}

export default Post;