import React from 'react';
import SocialBar from './socialBar/socialBar';
import Navigation from './navigation/navigation';

const Header = props => {
  return (
    <div className="header">
      <SocialBar />
      <Navigation />
    </div>
  );
};

export default Header;
