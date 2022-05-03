import { Container, Pagination } from '@mui/material';
import axios from 'axios';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import getQueryParams from '../../../utilities/getGetQueryParams';
import usePagination from './Pagination';
//import CustomPagination from "../Pagination/CustomPagination";
import Product from './Product';

const Products = (props) => {
  const { cat, filters, filtersData, sort, currentCategory, isPrice39 } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [formateProducts, setFormateProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [totalRows, setTotalRows] = useState(1);
  const [count, setCount] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const pageNo = parseInt(getQueryParams('pageNo'));
    if (pageNo) {
      setCurrentPage(pageNo);
    }
  }, []);

  const getProducts = useCallback(async () => {
    const filterDataArray = Object.entries({
      ...filtersData,
      category: cat === 'all' ? false : cat,
      size: 15,
    }).filter(([key, value]) => {
      return !!value;
    });
    filterDataArray.push(['page', parseInt(currentPage) - 1]);

    const filterDataTo = filterDataArray
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const res = await axios.get(
      cat
        ? `http://3.16.73.177:9080/public/products/?${filterDataTo}`
        : 'http://3.16.73.177:9080/public/products/?size=15&page=0&category=01',
      {
        crossDomain: true,
      }
    );

    setProducts(res.data.content);
    setTotalRows(res.data.totalElements);
    setCount(res.data.totalPages);
  }, [cat, filtersData, currentPage]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const _DATA = usePagination(products, 15);

  const handlePageChange = (e, p) => {
    window.scrollTo(0, 300);
    setCurrentPage(parseInt(p));
    if (isPrice39) {
      history.push(`/menos-de-q39?pageNo=${parseInt(p)}`);
    } else {
      history.push(`/productoslista/${cat}?pageNo=${parseInt(p)}`);
    }
    _DATA.jump(p);
  };

  useEffect(() => {
    try {
      cat &&
        setFormateProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    } catch (err) {}
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === 'asc') {
      setFilteredProducts((prev) => {
        const asc = prev.sort((a, b) => {
          if (a.precio > b.precio) return 1;
          if (a.precio < b.precio) return -1;
          return 0;
        });
        // console.table(
        //   'asc',
        //   asc.map((a) => a.precio)
        // );
        return asc;
      });
    } else {
      setFilteredProducts((prev) => {
        const desc = prev.sort((a, b) => {
          if (a.precio > b.precio) return -1;
          if (a.precio < b.precio) return 1;
          return 0;
        });
        // console.table(
        //   'desc',
        //   desc.map((a) => a.precio)
        // );
        return desc;
      });
    }
  }, [sort, products, filters]);

  const newProducts = useMemo(() => {
    if (sort === 'asc') {
      const asc = formateProducts.sort((a, b) => {
        if (a.precio > b.precio) return 1;
        if (a.precio < b.precio) return -1;
        return 0;
      });
      return asc;
    }

    if (sort === 'desc') {
      const desc = formateProducts.sort((a, b) => {
        if (a.precio > b.precio) return -1;
        if (a.precio < b.precio) return 1;
        return 0;
      });
      return desc;
    }

    return formateProducts;
  }, [formateProducts, sort]);

  return (
    <div>
      <Container>
        {!isPrice39 && (
          <Title>
            {currentCategory} - ({totalRows} products)
          </Title>
        )}
        <div>
          <Contenitrice>
            {newProducts.map((item) => (
              <Product item={item} key={Math.random()} />
            ))}
          </Contenitrice>
        </div>
        {count > 0 && (
          <div
            className='ImpaginAzione'
            style={{ marginTop: 50, marginBottom: 20 }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
              }}
            >
              <Pagination
                onChange={handlePageChange}
                count={count}
                page={currentPage}
                size='large'
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default memo(Products);

const Contenitrice = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 11rem));
  gap: 1.3rem;
  /* justify-content: flex-end; */

  @media only screen and (max-width: 1920px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 11rem));
    gap: 1.3rem;
    /* justify-content: flex-end; */
  }

  @media only screen and (max-width: 1150px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 15rem));
    gap: 0.5rem;
    /* justify-content: flex-end; */
  }

  @media only screen and (max-width: 1056px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 13rem));
    gap: 0.5rem;
    /* justify-content: flex-end; */
  }

  @media only screen and (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 10rem));
    gap: 0.5rem;
    /* justify-content: flex-end; */
  }

  @media only screen and (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 10rem));
    gap: 0.5rem;
    /* justify-content: flex-end; */
  }

  @media only screen and (max-width: 905px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 9rem));
    gap: 0.2rem;
    /* justify-content: flex-end; */
  }

  @media only screen and (max-width: 887px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 15rem));
    gap: 0.1rem;
    justify-content: center;
  }

  @media only screen and (max-width: 859px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 13rem));
    gap: 0rem;
    justify-content: center;
  }

  @media only screen and (max-width: 859px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 13rem));
    gap: 0rem;
    justify-content: center;
  }

  @media only screen and (max-width: 719px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 12rem));
    gap: 0rem;
    justify-content: center;
  }

  @media only screen and (max-width: 447px) {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 10rem));
    gap: 0rem;
    justify-content: center;
  }

  @media only screen and (max-width: 383px) {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 9rem));
    gap: 0rem;
    justify-content: center;
  }

  @media only screen and (max-width: 351px) {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 7rem));
    gap: 0rem;
    justify-content: center;
  }
`;
const Title = styled.h2`
  text-align: left;
  margin: 20px 0;
  font-size: 14px;
  text-transform: capitalize;
  @media only screen and (min-width: 351px) {
    font-size: 15px;
  }
`;
