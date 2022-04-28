import React from "react";
import classes from "./TheNew.module.css";

const Sale = () => {
  return (
    <section>
      <div className={classes.Container}>
        <div className={classes.ImgContainer}>
          <img
            className={classes.Image}
            src='./img/section_images/web-destacado.png'
            alt=''
          />
        </div>
      </div>
      <h1>Sale</h1>
    </section>
  );
};

export default Sale;
