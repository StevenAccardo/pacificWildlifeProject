import React from 'react';
import Carousel from './carousel';
import DonateBanner from './donateBanner';
import OurPhilo from './ourPhilo';
import Stats from './stats/stats';
import ImageBar from './imageBar';
import Affiliates from './affiliates/affiliates';

export default () => {
  return (
    <div className="landing">
      <Carousel />
      <DonateBanner />
      <OurPhilo />
      <Stats />
      <Affiliates />
      <ImageBar />
    </div>
  );
};
