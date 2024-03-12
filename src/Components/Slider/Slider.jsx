import Carousel from "react-bootstrap/Carousel";
import "./Slider.scss";

export const Slider = () => {
  return (
    <Carousel
      fade={true}
      indicators={false}
      touch={true}
      pause={false}
      prevIcon={<ion-icon name="chevron-back-outline"></ion-icon>}
      nextIcon={<ion-icon name="chevron-forward-outline"></ion-icon>}
      className="carousel"
    >
      <Carousel.Item interval={5000} className="carousel-item-1">
        <Carousel.Caption className="captions">
          <h3 className="animate__animated animate__bounceInLeft">
            Always
          </h3>
          <span className="animate__animated animate__bounceInRight">
            Fresh
          </span>
          <p className="animate__animated animate__bounceInLeft">
            Stradale is a exclusive website template specially made for Cafe and
            Coffe Shops. Made using only the finest coding dan design practices.
            Get Stradale now!
          </p>
          <button
            className="slider-btn animate__animated animate__bounceInRight"
          >
            Explore Menu
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="carousel-item-2">
        <Carousel.Caption
          className="captions"
        >
          <h3 className="text-nowrap animate__animated animate__bounceInLeft">Make Your</h3>
          <span className="animate__animated animate__bounceInRight">Story</span>
          <p className="animate__animated animate__bounceInLeft">
            Stradale is a exclusive website template specially made for Cafe and
            Coffe Shops. Made using only the finest coding dan design practices.
            Get Stradale now!
          </p>
          <button className="animate__animated animate__bounceInRight">Explore Menu</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="carousel-item-3">
        <Carousel.Caption
          className="captions"
        >
          <h3 className="animate__animated animate__bounceInLeft">Authentic</h3>
          <span className="animate__animated animate__bounceInRight">Taste</span>
          <p className="animate__animated animate__bounceInLeft">
            Stradale is a exclusive website template specially made for Cafe and
            Coffe Shops. Made using only the finest coding dan design practices.
            Get Stradale now!
          </p>
          <button className="animate__animated animate__bounceInRight">Explore Menu</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
