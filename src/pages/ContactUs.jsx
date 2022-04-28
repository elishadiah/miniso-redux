import Container from "@mui/material/Container";
import React from "react";
import ReactHelmet from "../components/Seo/ReactHelmet";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div>
      <ReactHelmet title="Options" />

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
