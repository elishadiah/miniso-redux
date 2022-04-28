import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultiItemCarousel.css";
import { multiData2 } from "../../../data";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const MultiItemCarousel2 = () => {
  return (
    <div className='Wrapper'>
      <div style={{ margin: "30px" }}>
        <h1>Promociones</h1>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={4}
          infinite={false}
          slidesToScroll={3}
        >
          {multiData2.map((item) => (
            <Card item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className='multi_image'
        src={item}
        alt=''
        style={{
          width: "100%",
          height: "190px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "14px", padding: "5px 0" }}>TITULO DEL PRODUCTO</p>
      <p style={{ fontSize: "16px", padding: "5px 0", color: "black" }}>
        Q.585.00
      </p>
      {/*<p style={{ fontSize: "14px", padding: "5px 0", color: "gray" }}>
          Up To $ 5000.00 off on HDFC
      </p>*/}
    </div>
  );
};

export default MultiItemCarousel2;
