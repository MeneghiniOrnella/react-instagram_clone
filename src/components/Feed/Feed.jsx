import React from 'react';
import './Feed.css';
import Suggestions from '../Suggestions/Suggestions';

function Feed() {
  return (
    <section>
      <div className="left">Feed left</div>
      <div className="right">Feed right</div>
      <Suggestions />
    </section>
  );
}

export default Feed;