import Container from '@mui/material/Container';
import React from 'react';
import { Helmet } from 'react-helmet';

import classes from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta
          name='description'
          content='Diagonal 6, 13-01 Zona 10 Centro Comercial Oakland Mall Local 201 y 202 Segundo Nivel Guatemala, Guatemala. +502 2336-5701 +502 3760-2892 hola@miniso.com.gt'
        />
      </Helmet>

      <Container fixed>
        <div className={classes.Wrapper}>
          <h1>Contáctanos</h1>
          <p>
            Diagonal 6, 13-01 Zona 10
            <br />
            Centro Comercial Oakland Mall
            <br />
            Local 201 y 202 Segundo Nivel,
            <br />
            Guatemala, Guatemala.
            <br />
            +502 2336-5701
            <br />
            +502 3760-2892
            <br />
            hola@miniso.com.gt
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
