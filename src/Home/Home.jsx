import React from 'react';
import './Home.css';
import Feed from '../components/Feed/Feed';
import SideNav from '../components/SideNav/SideNav';

function Home() {
  return (
    <div className="home">
          <SideNav className="sideNav" />
          <Feed className="feed" />
    </div>
  );
}

export default Home;