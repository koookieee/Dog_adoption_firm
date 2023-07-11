import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../images/logo.jpg";
import "./carousel.css";
import d1 from "../images/doggo1.avif"
import d2 from "../images/d2.webp"
import d3 from "../images/d3.jpg"


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carouse">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={d1} alt="Image 1" className="carousel-image"  width="30%" height="30%"/>
          <div className="carousel-caption">
            <p className="pcap">A big thank you, @DoggoEnthusiast, for showering your four-legged friend with love, belly rubs, and lots of treats! </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={d2} alt="Image 2" className="carousel-image" width="30%" height="30%"/>
          <div className="carousel-caption">
            <p className="pcap">Thank you, @AdventurousPupParent, for bringing joy and endless adventures to your new furry companion!</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={d3} alt="Image 3" className="carousel-image" width="40%" height="40%"/>
          <div className="carousel-caption">
            <p className="pcap">Thank you, @PawsomePal, for being an amazing pet parent and giving your adorable doggo a life filled with cuddles, playtime, and wagging tails!</p>
          </div>
        </div>
        {/* Add more slides here */}
      </Slider>
    </div>
  );
};


export default Carousel;