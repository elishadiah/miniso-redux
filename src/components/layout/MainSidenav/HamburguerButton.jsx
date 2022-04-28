import classes from "./HamburguerButton.module.css";
import React from "react";

const HamburguerButton = (props) => {
  return (
    <div className={classes.btn} onClick={props.click}>
      <div className={classes.hamburguerBtn}>&#9776;</div>
      <div className={classes.text}>Categorias</div>
    </div>
  );
};

export default HamburguerButton;
