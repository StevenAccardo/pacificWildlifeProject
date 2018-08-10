import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import pelican from '../../../assets/images/pelicanSlim.jpg';
import babySQL from '../../../assets/images/bbySqlSlim.jpg';
import seagull from '../../../assets/images/seagullSlim.jpg';
import racoon from '../../../assets/images/racoonSlim.jpg';
import babyHeron from '../../../assets/images/babyHeronSlim.jpg';
import babySkunk from '../../../assets/images/babySkunkSlim.jpg';
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
            <img src={babySQL} />
          </div>
          <div>
            <img src={seagull} />
          </div>
          <div>
            <img src={racoon} />
          </div>
          <div>
            <img src={babyHeron} />
          </div>
          <div>
            <img src={babySkunk} />
          </div>
        </Carousel>
      </div>
    );
  }
}
