import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './hamburger';
import AboutUs from './aboutUs';
import Donate from './donate';
import Emergency from './emergency';
import Resources from './resources';
import Volunteer from './volunteer';
import Sanctuary from './sanctuary';
import Education from './education';
//add hamburger
//hamburger display none
//at media query hamburger display
//onclick hamburger drops menu

//menu disappears at media query
//shows up on onclick
//menu items are vertically aligned

const onClickHandler = () => {};

const Navigation = props => {
  return (
    <div className="nav">
      <Link className="nav__link" to="#">
        <span>Logo</span>
      </Link>
      <Link className="nav__link" to="#">
        <AboutUs />
        <span>About Us</span>
      </Link>
      <Link className="nav__link" to="#">
        <Donate />
        <span>Donate</span>
      </Link>
      <Link className="nav__link" to="#">
        <Emergency />
        <span>Emergency</span>
      </Link>
      <Link className="nav__link" to="#">
        <Resources />
        <span>Resources</span>
      </Link>
      <Link className="nav__link" to="#">
        <Volunteer />
        <span>Volunteer</span>
      </Link>
      <Link className="nav__link" to="#">
        <Sanctuary />
        <span>Sanctuary</span>
      </Link>
      <Link className="nav__link" to="#">
        <Education />
        <span>Education</span>
      </Link>
      <a onClick={onClickHandler} href="#" className="navigation__hamburger">
        <Hamburger />
      </a>
    </div>
  );
};

export default Navigation;
