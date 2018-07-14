import React from 'react';
import MailSVG from './mailSVG';
import FbSVG from './fbSVG';
import IgSVG from './igSVG';
import TwitSVG from './twitSVG';

const ContactUs = props => {
  return (
    <div className="contactUs">
      <span className="contactUs__hours-phone">OPEN 7am - 6pm EVERYDAY | 949-831-1178</span>
      <span className="contactUs__icons">
        <MailSVG />
        <FbSVG />
        <IgSVG />
        <TwitSVG />
      </span>
    </div>
  );
};

export default ContactUs;
