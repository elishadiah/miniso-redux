import { Container } from '@mui/material';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { categories } from '../../../data';
import useWindowSize from '../../../utilities/useWindowSize';
import CategoryItem from './CategoryItem';
import categoryImage from './image-1.png';

const Wrapper = styled.div`
  padding-top: 50px;
`;

const Title = styled.div`
  padding-left: 30px;
`;

const Contenitrice = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 640px) {
    padding-left: 80px;
    padding-right: 80px;
    overflow-y: hidden;
  }

  @media only screen and (max-width: 540px) {
    padding-left: 20px;
    padding-right: 20px;
    overflow-y: hidden;
  }
`;

const Categories = () => {
  const { width } = useWindowSize();

  const lastCat = useMemo(() => {
    const item = {
      id: 10,
      img: 'https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/categoria10.png',
      title: 'Librería',
      cat: '12',
    };
    if (width <= 640) {
      item.img = categoryImage;
    }
    return item;
  }, [width]);

  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>Nuestras Categorías</h1>
        </Title>
        <Contenitrice>
          {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
          <CategoryItem item={lastCat} key={Math.random()} />
        </Contenitrice>
      </Wrapper>
    </Container>
  );
};

export default Categories;
