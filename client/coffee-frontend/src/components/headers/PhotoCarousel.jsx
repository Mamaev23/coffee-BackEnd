import React from 'react'
import {Carousel} from 'react-bootstrap';



function PhotoCarousel () {
  return (
    <div className={"photo-car"}>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 photo"
            src="https://img07.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/d/7d/d7dfa67e751c7c40ac8c12d24875b854.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 photo"
            src="https://cdn21.img.ria.ru/images/150943/85/1509438535_0:100:1920:1180_1920x0_80_0_0_4f73be08a10c82e4249b49b3ebf03a62.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 photo"
            src="https://cdn24.img.ria.ru/images/148818/29/1488182916_0:558:6016:3942_1280x0_80_0_0_29e547ea5f536de5b55bf66eb756806f.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PhotoCarousel