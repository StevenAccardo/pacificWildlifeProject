import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Landing from './landing/landing';
import AboutUs from './aboutUs/aboutUs';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Route exact path="/" component={Landing}/>
      <Route path="/about" component={AboutUs}/>
      <Footer />
    </div>
  );
};

export default App;
