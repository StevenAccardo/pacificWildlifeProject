import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <div className="nav">
      <Link to="#">
        <div>
          <span>About Us</span>
        </div>
      </Link>
      <Link to="#">
        <div>
          <span>Donate</span>
        </div>
      </Link>
      <Link to="#">
        <div>
          <span>Emergency</span>
        </div>
      </Link>
      <Link to="#">
        <div>
          <span>Resources</span>
        </div>
      </Link>
      <Link to="#">
        <div>
          <span>Volunteer</span>
        </div>
      </Link>
      <Link to="#">
        <div>
          <span>Sanctuary</span>
        </div>
      </Link>
      <Link to="#">
        <div>
          <span>Education</span>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
