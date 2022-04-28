import React, { useState } from "react";
//import { useLocation } from "react-router";
import styled from "styled-components";
import classes from "./CuidadoPersonal.module.css";
import Products from "../../components/layout/Products/Products";
import Container from "@mui/material/Container";

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

/*const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 350px;
`;*/

const Sortby = styled.div`
  width: 15%;
`;

const TopTexts = styled.div``;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
`;

/*const FilterContainer = styled.div`
  justify-content: space-between;
`;*/

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
`;

const Option = styled.option``;

/*const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: black;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;*/

const CuidadoPersonal = () => {
  // const location = useLocation();
  // const cat = location.pathname.split("/")[2];
  const [filters /*setFilters*/] = useState({});
  const [sort, setSort] = useState("newest");

  /*  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };*/

  return (
    <div>
      <div className={classes.TopheaderContainer}>
        <div className={classes.ImgContainer}>
          <img
            className={classes.Image}
            src='./img/categories/Cuidado-personal.png'
            alt=''
          />
        </div>
      </div>
      <Container fixed>
        <h1>Cuidado Personal</h1>
      </Container>
      <Wrapper>
        <Title>Lista de Productos</Title>
        <p></p>
        <Top>
          {/*<TopButton>CONTINUE SHOPPING</TopButton>*/}
          <TopTexts>{/*<TopText>No. Resultados</TopText>*/}</TopTexts>
          <Sortby>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value='newest'>Ordenar</Option>
              <Option Option value='desc'>
                Precio más alto
              </Option>
              <Option value='asc'>Precio más bajo</Option>
            </Select>
          </Sortby>
        </Top>
        <Bottom>
          <Summary>
            {/*<h1>Filtros</h1>*/}
            {/*<Button>Reiniciar</Button>
            <FilterContainer>
              <Select name='color' onChange={handleFilters}>
                <Option disabled>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
              </Select>
              <Select name='size' onChange={handleFilters}>
                <Option disabled>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </FilterContainer>*/}
          </Summary>
          <Info>
            <Products cat={"03"} filters={filters} sort={sort} />
          </Info>
        </Bottom>
      </Wrapper>
    </div>
  );
};

export default CuidadoPersonal;
