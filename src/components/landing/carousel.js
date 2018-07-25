import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import pelican from '../../../assets/images/tackleBox.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class extends React.Component {
  render() {
    return (
      <div className="carouselContainer">
        <Carousel showThumbs={false}>
          <div>
            <img className="baby" src={pelican} />
          </div>
          <div>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
          </div>
          <div>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
          </div>
          <div>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
          </div>
          <div>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
          </div>
        </Carousel>
      </div>
    );
  }
}
