import React from 'react';
import SocialBar from './socialBar/socialBar';
import Navigation from './navigation/navigation';

const Header = props => {
  return (
    <div className="header">
      <SocialBar />
      <Navigation />
      <h1>Header</h1>
    </div>
  );
};

export default Header;
