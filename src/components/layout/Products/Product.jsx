import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { addProductToCart } from '../../../redux/cartAction';
const Product = ({ item }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  const addProduct = () => {
    if (!isAuthenticated) {
      toast.error('Para realizar una compra, Inicia Sesión primero');
      return;
    }
    dispatch(addProductToCart(item, 1, toast));
  };

  const imagen = item.url
    ? item.url
    : '../../img/products/4509757451814-2.jpeg';

  const ProductPrice = () => {
    if (item.precio === item.precioDiscount) return <p>Q.{item.precio}</p>;
    return (
      <p>
        Q.{item.precioDiscount}{' '}
        <span style={{ textDecoration: 'line-through', fontSize: '20px' }}>
          Q.{item.precio}
        </span>{' '}
      </p>
    );
  };

  return (
    <Contenitrice>
      <Link
        to={`/product/${item.productosPkDto.codInt}/${item.productosPkDto.barra}`}
      >
        <Image src={imagen + '-1.jpg'} />
      </Link>
      <Title>{item.descripcion}</Title>
      <Price>
        <ProductPrice />
      </Price>

      <Button onClick={addProduct}>Agregar a carrito</Button>

      {/*<Button>Agregar a Carrito</Button>*/}
    </Contenitrice>
  );
};

const Contenitrice = styled.div`
  overflow: hidden;
  box-shadow: 0 2px 10px #dfdfdf;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 200ms ease-in;
  width: 195px;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 10px #707070;
  }

  @media only screen and (max-width: 1920px) {
    max-width: 195px;
  }

  @media only screen and (max-width: 1150px) {
  }

  @media only screen and (max-width: 1048px) {
    width: 165px;
  }

  @media only screen and (max-width: 960px) {
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 778px) {
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 640px) {
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 447px) {
    width: 155px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 351px) {
    width: 110px;
    height: 13.5rem;
    margin-bottom: 15px;
  }
`;

const Image = styled.img`
  height: 17.5rem;
  width: 100%;
  object-fit: cover;
  cursor: pointer;

  @media only screen and (max-width: 1920px) {
  }

  @media only screen and (max-width: 1048px) {
  }

  @media only screen and (max-width: 960px) {
  }

  @media only screen and (max-width: 778px) {
  }

  @media only screen and (max-width: 640px) {
    height: 10rem;
  }

  @media only screen and (max-width: 351px) {
    height: 10rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 0px;
  font-size: 12px;
  @media only screen and (max-width: 351px) {
    font-size: 10px;
  }
`;

const Price = styled.p`
  text-align: center;
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 2rem;
  color: #e71425;

  @media only screen and (max-width: 351px) {
    font-size: 1.2rem;
  }
`;
const Button = styled.button`
  padding: 0.5rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  margin-top: 0;
  background-color: #e71425;
  color: #ffffff;
  border: 2px solid #e71425;
  border-radius: 10px;
  transition: background 200ms ease-in, color 200ms ease-in;

  &:hover {
    background-color: transparent;
    border: 2px solid #e71425;
    color: #e71425;
    cursor: pointer;
  }
`;
export default Product;
