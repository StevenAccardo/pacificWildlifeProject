import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './hamburger';
import AboutUs from './aboutUs';
import Donate from './donate';
import Emergency from './emergency';
import Resources from './resources';
import Volunteer from './volunteer';
import Sanctuary from './sanctuary';
import Education from './education';
import logo from '../../../../assets/images/logo.png';
//add hamburger
//hamburger display none
//at media query hamburger display
//onclick hamburger drops menu

//menu disappears at media query
//shows up on onclick
//menu items are vertically aligned

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="nav">
        <div className="nav__logoHam">
          <Link to="/">
            <img className="nav__logo" src={logo} alt="logo" />
          </Link>
          <a onClick={this.onClickHandler} className="navigation__hamburger">
            <Hamburger />
          </a>
        </div>
        <div className={this.state.isOpen ? 'nav__linkGroup' : 'nav__linkGroup hide'}>
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
        </div>
      </div>
    );
  }
}

export default Navigation;
