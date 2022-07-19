import Container from '@mui/material/Container';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Products from '../components/layout/Products/Products';
import ReactHelmet from '../components/Seo/ReactHelmet';
import axiosInstance from '../services/axiosInstance';

import classes from './ShopNow.module.css';

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

const FilterContainer = styled.div`
  justify-content: space-between;
`;

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

const ShopNow = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  let history = useHistory();

  const handleFilters = async (event) => {
    const value = event.target.value;
    try {
      history.push(`/productoslista/${value}`);
      history.go(`/productoslista/${value}`);
    } catch (err) {
      console.log('- - - - - err: ', err);
    }
    /*
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
      */
  };

  const [categories, setCategories] = useState([]);
  const getCategories = useCallback(async () => {
    let catUrl = '/api/public/categories/first';
    const res = await axiosInstance.get(catUrl, {
      crossDomain: true,
    });
    setCategories(res.data.body);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div>
      <ReactHelmet title='Shop now' />
      <div className={classes.TopheaderContainer}>
        <div className={classes.ImgContainer}>
          <img
            className={classes.Image}
            src='./img/categories/Promociones.png'
            alt=''
          />
        </div>
      </div>
      <Container fixed>
        <h1>Comprar Ahora</h1>
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
              <Option Option value='asc'>
                Precio más alto
              </Option>
              <Option value='desc'>Precio más bajo</Option>
            </Select>
          </Sortby>
        </Top>
        <Bottom>
          <Summary>
            <h1>Filtros</h1>
            <FilterContainer>
              <Select value={cat} name='categoría' onChange={handleFilters}>
                {' '}
                {categories.map((category) => (
                  <Option value={category.codCatUno}>
                    {category.descripcion}
                  </Option>
                ))}
              </Select>
              {/*<Select name='size' onChange={handleFilters}>
                <Option disabled>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                </Select>*/}
            </FilterContainer>
          </Summary>
          <Info>
            <Products cat={'04'} filters={filters} sort={sort} />
          </Info>
        </Bottom>
      </Wrapper>
    </div>
  );
};

export default ShopNow;
