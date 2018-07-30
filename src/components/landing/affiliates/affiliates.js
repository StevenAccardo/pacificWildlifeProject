import React from 'react';
import ChewyLogo from './chewyLogo';
import millers from '../../../../assets/images/millers.png';
import yourFleece from '../../../../assets/images/yourFleece.png';

export default () => {
  return (
    <div className="affiliates">
      <h2 className="affiliates__title">Affiliations</h2>
      <a href="https://www.chewy.com/">
        <ChewyLogo />
      </a>
      <a href="https://www.millerspetpromo.com/">
        <img className="affiliates__millers" src={millers} alt="affiliate logo"/>
      </a>
      <a href="https://yourfleece.com/">
        <img className="affiliates__fleece"src={yourFleece} alt="affiliate logo"/>
      </a>
    </div>
  )
}
