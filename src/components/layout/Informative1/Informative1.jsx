import React from "react";
import classes from "./Informative1.module.css";
import StoreIcon from "@mui/icons-material/Store";
import RoomIcon from "@mui/icons-material/Room";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Informative1 = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Left}>
        <div className={classes.Icon}>
          <StoreIcon
            style={{
              color: "#000000",
              fontSize: "40vh",
            }}
          />
          <p>Recoge en Tienda</p>
        </div>
      </div>
      <div className={classes.Center}>
        <div className={classes.Icon}>
          <RoomIcon style={{ color: "#E90909", fontSize: "40vh" }} />
          <p>Envíos a Toda la Ciudad</p>
        </div>
      </div>
      <div className={classes.Right}>
        <div className={classes.Icon}>
          <LocalShippingIcon style={{ color: "#000000", fontSize: "40vh" }} />
          <p>Envío Express</p>
        </div>
      </div>
    </div>
  );
};

export default Informative1;
