import React from 'react';
import Carousel from './carousel';
import DonateBanner from './donateBanner';

export default () => {
  return (
    <div className="landing">
      <Carousel />
      <DonateBanner />
    </div>
  );
};
