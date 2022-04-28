import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Drawer from "../../../Drawer/Drawer";
import classes from "./MainNavigation.module.css";

const MainNavigation = ({ item }) => {
  const cat = "04";

  return (
    <div className={classes.header}>
      <Container>
        <nav>
          <ul>
            <li>
              <Drawer />
            </li>
            {/*<li>
            <Link to='/'>HomePage</Link>
          </li>*/}
            {/*          <li>
            <Link to='/lo-nuevo'>Lo Nuevo</Link>
</li>*/}
            {/*<li>
            <Link to='/colecciones'>Colecciones</Link>
          </li>*/}
            {/*<li>
            <Link to='/sale'>Sale</Link>
          </li>*/}
            {/*<li>
            <Link to='/tiendas'>Tiendas</Link>
          </li>*/}
            <li>
              {" "}
              <Link to={`/productoslista/${cat}`}>Comprar ahora</Link>
            </li>
            <li>
              <Link to="/viewstores">Tiendas</Link>
            </li>
            <li>
              <Link to="/contactanos">Contáctanos</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default MainNavigation;
