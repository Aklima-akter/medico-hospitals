import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (

        

        <div id='banner'>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/xJh2S7L/cover-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='mb-5'>
      <div>
      <h3 className='text-dark'>Experience and Truthfulness</h3>
      <p className='text-dark'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/1bHVzFq/cover-2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className='mb-5'>
      <h3 className='text-dark'>Laboratory services</h3>
      <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/cbDPcV0/cover-3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className='mb-5'>
      <h3 className='text-dark'>Extensive Research</h3>
      <p className='text-dark'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;