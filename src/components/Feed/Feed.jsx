import React, { useState } from 'react';
import './Feed.css';
import Post from './Post/Post';
import Suggestion from '../Suggestions/Suggestions';

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

  const [suggestions, setSuggestions] = useState([
    {
      user: 'food_fashion',
      relation:''
    },
    {
      user: 'dogOne',
      relation:''
    },
    {
      user: 'potter_plus',
      relation:''
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
        <div>
          <div className="title">Suggestions for you</div>
          <a href='https://www.instagram.com/' className="seeAll">See All</a>
        </div>
        { suggestions.map((suggestion) => (
          <Suggestion
            user={ suggestion.user }
            relation={ suggestion.relation }
          />
        )) }
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
    </section>
  );
}

export default Feed;