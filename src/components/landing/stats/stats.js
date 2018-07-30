import React from 'react';
import ClipboardSVG from './clipboardSVG';
import ClockSVG from './clockSVG';
import pawPrints from '../../../../assets/images/pawPrints.png';

export default () => {
  return (
    <div className="stats">
      <h3 className="stats__title">Each Year At Pacific Wildlife Project: </h3>
      <div className="stats__container">
        <div className="stat__inner-container">
          <ClockSVG />
          <h2 className="stats__counts">16,000+</h2>
          <h5 className="stats__items">Volunteer Hours</h5>
        </div>
        <div className="stat__inner-container">
          <ClipboardSVG />
          <h2 className="stats__counts">2,000+</h2>
          <h5 className="stats__items">Animals Rescued</h5>
        </div>
        <div className="stat__inner-container">
          <img src={pawPrints} alt="paw print image" className="stats__pawPrints"/>
          <h2 className="stats__counts">140+</h2>
          <h5 className="stats__items">Species Cared For</h5>
        </div>
      </div>
    </div>
  )
}
