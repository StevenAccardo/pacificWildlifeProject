import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Landing from './landing/landing';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
};

export default App;
