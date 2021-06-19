import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './photo-slider.css';


const photos = [
  'https://media.istockphoto.com/photos/money-of-the-different-countries-picture-id519467338',
  'https://images.freeimages.com/images/small-previews/3f9/money-money-1518532.jpg',
  'https://img.currency.com/imgs/articles/1472xx/shutterstock-367050494.jpg',
  'https://images.freeimages.com/images/small-previews/2e3/aust-currency-1-1536312.jpg',
  'https://icdn.lenta.ru/images/2020/09/24/04/20200924045523741/pwa_list_rect_1024_d8165059baedaefff4223fa0e6ff8be2.jpg'
];

const PhotoSlider = () => {

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [photoIndex, setPhotoIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setPhotoIndex(next),
  };

  const renderedPhotos = photos.map((photo, index) => {
    return (
      <div className={index === photoIndex ? 'photo-slider__photo photo photo_active' : 'photo-slider__photo photo'} key={index}>
        <img src={photo} alt={'valute'}/>
      </div>
    ) 
  })

  return (
    <div className="photo-slider">
      <Slider {...settings}>
        {renderedPhotos}
      </Slider>
    </div>
  );    
};


export default PhotoSlider;
