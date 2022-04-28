import React from "react";
import styled from "styled-components";

const Image = styled.div`
  height: 100%;
  background: ${(props) => "url(" + props.image + ")"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center center;

  @media (min-width: 400px) {
    height: 200px;
  }
  @media (min-width: 640px) {
    height: 280px;
  }
  @media (min-width: 768px) {
    height: 320px;
  }
  /* @media (min-width: 991px) {
    height: 400px;
  }
  @media (min-width: 1280px) {
    height: 100vh;
  }*/
`;

const ProductsBanner = ({ image }) => {
  return <Image image={image}> </Image>;
};

export default ProductsBanner;
