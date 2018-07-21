import React from 'react';
import MailSVG from './mailSVG';
import FbSVG from './fbSVG';
import IgSVG from './igSVG';
import TwitSVG from './twitSVG';

const SocialBar = props => {
  return (
    <div className="socialBar">
      <span className="socialBar__hours-phone">OPEN 7am - 6pm EVERYDAY | 949-831-1178</span>
      <span className="socialBar__icon-group">
        <a href="mailto:lmcleod@pacificwildlife.org" className="socialBar__link">
          <MailSVG />
        </a>
        <a href="https://www.facebook.com/PacificWildlife" className="socialBar__link">
          <FbSVG />
        </a>
        <a href="https://www.facebook.com/PacificWildlife" className="socialBar__link">
          <IgSVG />
        </a>
        <a href="https://www.facebook.com/PacificWildlife" className="socialBar__link">
          <TwitSVG />
        </a>
      </span>
    </div>
  );
};

export default SocialBar;
