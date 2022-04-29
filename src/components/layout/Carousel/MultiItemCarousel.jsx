//import { multiData } from "../../../data";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Container } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './MultiItemCarousel.css';
import classes from './MultiItemCarousel.module.css';

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: 'blue', fontSize: '25px' }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: 'blue', fontSize: '25px' }} />
    </div>
  );
};

const MultiItemCarousel = () => {
  // const [state, setState] = React.useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  const [slides, setSlides] = useState([]);

  const getSlides = useCallback(async () => {
    const userName = localStorage.getItem('username');
    const getUrl = () => {
      if (isAuthenticated) {
        return `http://3.16.73.177:9080/public/products/carrusel?carrusel=CARRUSEL1&userName=${userName}`;
      }
      return 'http://3.16.73.177:9080/public/products/carrusel?carrusel=CARRUSEL1';
    };
    let url = getUrl();
    const res = await axios.get(url, {
      crossDomain: true,
    });
    setSlides(res.data.body);
  }, [isAuthenticated]);
  useEffect(() => {
    getSlides();
  }, [getSlides]);

  const settings = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className='Wrapper'>
        <div style={{ margin: '30px' }}>
          <h1>Productos Recomendados</h1>

          <Slider {...settings}>
            {slides.map((slide) => (
              <Card slide={slide} />
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

const Card = ({ slide }) => {
  const imagen = slide.url;

  return (
    <div style={{ textAlign: 'center' }}>
      <Link
        to={`/product/${slide.productosPkDto.codInt}/${slide.productosPkDto.barra}`}
        style={{
          textDecoration: 'none',
        }}
      >
        <img
          className='multi_image'
          src={imagen + '-1.jpg'}
          alt=''
          style={{
            width: '100%',
            height: '190px',
            objectFit: 'contain',
            marginBottom: '10px',
          }}
        />
        <p className={classes.Description}>{slide.descripcion}</p>
        <p className={classes.Price}>Q.{slide.precio}</p>
        {/*<p style={{ fontSize: "14px", padding: "5px 0", color: "gray" }}>
        Up To $ 5000.00 off on HDFC
    </p>*/}
      </Link>
    </div>
  );
};

export default MultiItemCarousel;
