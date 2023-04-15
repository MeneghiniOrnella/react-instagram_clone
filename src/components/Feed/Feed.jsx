import React from 'react';
import './Feed.css';
import Post from './Post/Post';
import Suggestions from './Suggestions/Suggestions';

function Feed() {
  return (
    <section>
      <div className="left">
        <Post />
      </div>
      <div className="right">
        <Suggestions />
      </div>
    </section>
  );
}

export default Feed;