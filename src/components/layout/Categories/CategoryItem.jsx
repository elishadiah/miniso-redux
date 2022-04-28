import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerMarkup = styled.div`
  flex: 1;
  margin: 35px;
  min-width: 250px;
  height: 350px;
  position: relative;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
    transition: 0.3s;
    transform: scale(1.02);
    z-index: 2;
  }

  @media only screen and (max-width: 1920px) {
    margin: 15px;
  }

  @media only screen and (max-width: 1048px) {
    margin: 15px;
  }

  @media only screen and (max-width: 960px) {
    margin: 15px;
    min-width: 200px;
    height: 300px;
  }

  @media only screen and (max-width: 778px) {
    margin: 15px;
    min-width: 150px;
    height: 250px;
  }

  @media only screen and (max-width: 640px) {
    margin: 12px;
    min-width: 250px;
    height: 400px;
    align-items: center;
    overflow-y: hidden;
  }

  @media only screen and (max-width: 540px) {
    flex: 1;
    margin-left: 5px;
    margin-right: 5px;
    min-width: 250px;
    height: 350px;
    position: relative;
    overflow-y: hidden;
  }

  @media only screen and (max-width: 540px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/*const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;*/

/*const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;*/

const CategoryItem = ({ item }) => {
  return (
    <ContainerMarkup>
      <Link to={`/productoslista/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          {/*<Title>{item.title}</Title>*/}
          {/*<Button>IR AHORA</Button>*/}
        </Info>
      </Link>
    </ContainerMarkup>
  );
};

export default CategoryItem;
