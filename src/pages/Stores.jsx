import React from "react";
import classes from "./TheNew.module.css";
import ReactHelmet from '../components/Seo/ReactHelmet';

const Stores = () => {
  return (
    <section>
      <ReactHelmet title={'Stores'} />
      <div className={classes.Container}>
        <div className={classes.ImgContainer}>
          <img
            className={classes.Image}
            src='./img/section_images/web-tiendas.png'
            alt=''
          />
        </div>
      </div>
      <h1>Tiendas</h1>
    </section>
  );
};

export default Stores;
