import React from 'react';
import rescue from '../../../assets/images/rescue.jpg';
import rehab from '../../../assets/images/rehab.png';
import release from '../../../assets/images/release.jpg';

export default () => {
  return (
    <div className="imageBar">
      <div className="imageBar__imgContainer">
        <img src={rescue} alt="bird image" className="imageBar__img"/>
        <h5 className="imageBar__imgText">Rescue</h5>
      </div>
      <div className="imageBar__imgContainer">
        <img src={rehab} alt="bird image" className="imageBar__img"/>
        <h5 className="imageBar__imgText">Rehab</h5>
      </div>
      <div className="imageBar__imgContainer">
        <img src={release} alt="bird image" className="imageBar__img"/>
        <h5 className="imageBar__imgText">Release</h5>
      </div>
    </div>
  )
}
