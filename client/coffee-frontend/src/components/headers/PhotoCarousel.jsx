import React from 'react'
import {Carousel} from 'react-bootstrap';



function PhotoCarousel () {
  return (
    <div className={"photo-car"}>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 photo"
            src="https://i.postimg.cc/sg9LDPQW/2.jpg"
            alt="First slide"
           style={{borderRadius:10}}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 photo"
            src="https://i.postimg.cc/q71Z2kGM/poster-event-992625.jpg"
            alt="Second slide"
            style={{borderRadius:10}}
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 photo"
            src="https://i.postimg.cc/tCLbVz4m/1.jpg"
            alt="Third slide"
            style={{borderRadius:10}}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PhotoCarousel