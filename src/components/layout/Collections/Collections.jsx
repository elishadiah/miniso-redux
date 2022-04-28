import classes from "./Collections.module.css";
//import { Link } from "react-router-dom";
import React from "react";
import { Container } from "@mui/material";

const Colections = () => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.LogoContainer}>
          <div className={classes.logo}>
            <img
              src='/img/brand/marvel.svg'
              alt='MINISO'
              /*height={55}
                    width={55}*/
            />
          </div>
          <div className={classes.logo}>
            <img
              src='/img/brand/walt-disney-logo-png-symbol-2-Transparent-Images.png'
              alt='MINISO'
              /*height={55}
                    width={55}*/
            />
          </div>
          <div className={classes.logo}>
            <img
              src='/img/brand/the-avengers.svg'
              alt='MINISO'
              /*height={55}
                    width={55}*/
            />
          </div>
          <div className={classes.logo}>
            <img
              src='/img/brand/Plazasesamologo.svg'
              alt='MINISO'
              /*height={55}
                    width={55}*/
            />
          </div>
          <div className={classes.logo}>
            <img
              src='/img/brand/We_Bare_Bears_wordmark.svg'
              alt='MINISO'
              /*height={55}
                    width={55}*/
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Colections;
