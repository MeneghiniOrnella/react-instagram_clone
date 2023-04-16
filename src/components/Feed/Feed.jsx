import React, { useState } from 'react';
import './Feed.css';
import Post from './Post/Post';
import Suggestions from './Suggestions/Suggestions';

function Feed() {
  const [posts, setPosts] = useState([
    {
      user: 'food_fashion',
      postImg: 'https://cdn.pixabay.com/photo/2016/10/22/13/47/waffles-1760799_1280.jpg',
      likes: '150',
      timestamp: '2d'
    },
    {
      user: 'dogOne',
      postImg: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg',
      likes: '26',
      timestamp: '12h'
    },
    {
      user: 'potter_plus',
      postImg: 'https://cdn.pixabay.com/photo/2018/03/18/21/57/travel-3238442_1280.jpg',
      likes: '5',
      timestamp: '1m'
    }
  ]);

  return (
    <section>
      <div className="left">
        <div className="posts">
          { posts.map((post) => (
            <Post
              user={ post.user }
              postImg={ post.postImg }
              likes={ post.likes }
              timestamp={ post.timestamp }
            />
          )) }
        </div>
      </div>
      <div className="right">
        <Suggestions />
      </div>
    </section>
  );
}

export default Feed;