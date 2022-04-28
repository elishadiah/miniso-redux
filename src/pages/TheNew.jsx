import React from "react";
import classes from "./TheNew.module.css";

const TheNew = () => {
  return (
    <section>
      <div className={classes.Container}>
        <div className={classes.ImgContainer}>
          <img
            className={classes.Image}
            src='./img/section_images/web-lo-mas-nuevo.png'
            alt=''
          />
        </div>
      </div>
      <h1>Lo Más Nuevo</h1>
    </section>
  );
};

export default TheNew;
