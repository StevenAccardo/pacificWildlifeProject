import React from 'react';
import ContactUs from './contactUs';
import Navigation from './navigation';

const Header = props => {
  return (
    <div className="header">
      <ContactUs />
      <Navigation />
      <h1>Header</h1>
    </div>
  );
};

export default Header;
