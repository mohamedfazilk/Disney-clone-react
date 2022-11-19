import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       autoplay:true,
    }
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='images/slider-badging.jpg'/>
        
      </Wrap>
      <Wrap>
        <img src='images/slider-scale.jpg'/>
      </Wrap>

      <Wrap>
        <img src='images/slider-scale.jpg'/>
      </Wrap>
    </Carousel>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`


`

const Wrap = styled.div`

`
