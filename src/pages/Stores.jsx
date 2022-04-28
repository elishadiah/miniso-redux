import React from "react";
import StorePage from "./Store/StorePage";
import classes from "./TheNew.module.css";

const Stores = ({ viewStore = false }) => {
  return (
    <section>
      <div className={classes.Container}>
        <div className={classes.ImgContainer}>
          <img
            className={classes.Image}
            src="./img/section_images/web-tiendas.png"
            alt=""
          />
        </div>
      </div>
      <StorePage noTitle={viewStore} />
    </section>
  );
};

export default Stores;
