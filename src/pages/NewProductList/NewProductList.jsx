import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Products from '../../components/layout/Products/Products';
import ProductsBanner from '../../components/layout/Products/ProductsBanner';
import { Bottom, Contenitrice, Info, Wrapper } from './ProductList.styled';

const imageUrl =
  'https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/lomasnuevo+-+banner.png';
const NewProductList = () => {
  const { category: cat } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cat]);

  const [filters] = useState({
    nuevo: true,
  });

  const [image, setImage] = useState('');

  useEffect(() => setImage(imageUrl), []);

  return (
    <>
      <ProductsBanner image={image} />
      <Container>
        <Contenitrice>
          <Wrapper>
            <Bottom>
              <Info>
                <Products cat='all' filters={{}} filtersData={filters} />
              </Info>
            </Bottom>
          </Wrapper>
        </Contenitrice>
      </Container>
    </>
  );
};

export default NewProductList;

const Button = styled.button`
  padding: 0.3rem 1rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 13px;
  background-color: #e71425;
  color: #ffffff;
  border: 2px solid #e71425;
  /* border: none; */
  border-radius: 3px;
  transition: background 200ms ease-in, color 200ms ease-in;

  &:hover {
    background-color: transparent;
    color: #e71425;
    cursor: pointer;
  }
`;
