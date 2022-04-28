import React from "react";
import Form from "./Form";
import "./Form.css";

const Payment = () => {
  return (
    <div>
      <br />
      <br />
      <div className='Icon'>
        <img src='./img/logo.png' alt='' height={70} width={70} />
      </div>
      <h1>Verificar Datos</h1>
      <br />
      <Form />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Payment;
