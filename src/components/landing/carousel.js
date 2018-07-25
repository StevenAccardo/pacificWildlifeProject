import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import pelican from '../../../assets/images/pelican.jpg';
import babySQL from '../../../assets/images/bbySql.jpg';
import seagull from '../../../assets/images/seagull.jpg';
import racoon from '../../../assets/images/racoon.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class extends React.Component {
  render() {
    return (
      <div className="carouselContainer">
        <Carousel showIndicators={false} showStatus={false} autoPlay infiniteLoop showThumbs={false} emulateTouch>
          <div>
            <img className="baby" src={pelican} />
          </div>
          <div>
            <img className="baby" src={babySQL} />
          </div>
          <div>
            <img className="baby" src={seagull} />
          </div>
          <div>
            <img className="baby" src={racoon} />
          </div>
        </Carousel>
      </div>
    );
  }
}
