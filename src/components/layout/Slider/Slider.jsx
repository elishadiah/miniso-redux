import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = useCallback(
    (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    },
    [slideIndex]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      handleClick();
    }, 1000 * 3);
    return () => clearInterval(interval);
  }, [handleClick]);

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick("left")}>
        <ArrowBackIosRoundedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            {/*<InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>DESCUBRE MÁS</Button>
            </InfoContainer>*/}
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick("right")}>
        <ArrowForwardIosRoundedIcon />
      </Arrow>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 1048px) {
    height: 50vh;
    width: 100%;
  }

  @media only screen and (max-width: 960px) {
    height: 45vh;
    width: 100%;
  }

  @media only screen and (max-width: 778px) {
    height: 40vh;
    width: 100%;
  }

  @media only screen and (max-width: 640px) {
    height: 30vh;
    width: 100%;
  }
`;

const Arrow = styled.div`
  width: 100px;
  height: 100px;
  transform: scale(1.8);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 63vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

  @media only screen and (max-width: 1048px) {
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 60vh;
  width: 100%;
  object-fit: cover;

  @media only screen and (max-width: 1920px) {
    height: 60vh;
    width: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 1048px) {
    height: 50vh;
    width: 100%;
  }

  @media only screen and (max-width: 960px) {
    height: 45vh;
    width: 100%;
  }

  @media only screen and (max-width: 778px) {
    height: 40vh;
    width: 100%;
  }

  @media only screen and (max-width: 640px) {
    height: 30vh;
    width: 100%;
  }
`;

/*const InfoContainer = styled.div`
  flex: 1;
  padding-left: 65px;
  padding-bottom: 180px;
  position: absolute;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 45px;
  background-color: #3a3a3a4e;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  background-color: #3a3a3a4e;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;*/

export default Slider;
