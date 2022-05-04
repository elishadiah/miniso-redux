import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '../../../Drawer/Drawer';
import classes from './MainNavigation.module.css';

const MainNavigation = ({ item }) => {
  return (
    <div className={classes.header}>
      <Container>
        <nav>
          <ul>
            <li>
              <Drawer />
            </li>

            <li>
              <Link to={`/productoslista/all`}>Comprar ahora</Link>
            </li>
            <li>
              <Link to={`/menos-de-q39`}>Menos de Q39</Link>
            </li>
            <li>
              <Link to={`/lo-más-nuevo`}>Lo más nuevo</Link>
            </li>
            <li>
              <Link to='/viewstores'>Tiendas</Link>
            </li>
            <li>
              <Link to='/contactanos'>Contáctanos</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default MainNavigation;
