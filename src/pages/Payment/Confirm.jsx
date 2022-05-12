import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearCart } from '../../redux/cartAction';
import './Confirm.css';
import './Form.css';

export const Confirm = (props) => {
  const {
    values: { cardname, cardnumber, date, cuotas },
    nextStep,
    prevStep,
  } = props;

  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const continueStep = (e) => {
    if (!isAuthenticated) {
      toast.falseerror('Para realizar una compra, Inicia Sesión primero');
      return;
    }

    setLoading(true);

    confirmPayment()
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const backStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const confirmPayment = async () => {
    const { cardname, cardnumber, codigo, date, cuotas } = props.values;

    let username = localStorage.getItem('username');
    let token = JSON.parse(localStorage.getItem('user')).access_token;

    var config = {
      method: 'post',
      url: `http://3.16.73.177:9080/private/cart/end?userName=${username}`,
      headers: { Authorization: `Bearer ${token}`, crossDomain: true },
      data: {
        nombre: cardname,
        numCart: cardnumber,
        cvv: codigo,
        fechaExpira: date,
        ip: '190.56.100.90',
        cuota: cuotas,
      },
    };
    setLoading(true);

    console.log(config);
    try {
      const respuesta = await axios(config);

      console.log(respuesta);
      if (respuesta.data && respuesta.data.ok) {
        nextStep();
        dispatch(clearCart());
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al realizar el pago');
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className='form-container'>
      <h3 className='mb-5 text-center'>Confirmar Datos</h3>
      <ul class='list-group'>
        <li class='list-group-item'>
          Nombre del titular de la tarjeta: {cardname}
        </li>
        <li class='list-group-item'>Numero de Tarjeta: {cardnumber}</li>
        <li class='list-group-item'>Código de Seguridad (CVV): ***</li>
        <li class='list-group-item'>Fecha de Expiración: {date}</li>
        <li class='list-group-item'>
          Cantidad de cuotas seleccionadas: {cuotas}
        </li>
        {/*<li class='list-group-item'>Name: {name}</li>
          <li class='list-group-item'>Email: {email} </li>
          <li class='list-group-item'>Phone Number: {phone}</li>
          <li class='list-group-item'>Password: {password}</li>
          <li class='list-group-item'>
            Facebook URL: <a href={facebook}>{facebook}</a>
          </li>
          <li class='list-group-item'>
            Twitter URL: <a href={twitter}>{twitter}</a>
          </li>
          <li class='list-group-item'>
            Github URL: <a href={github}>{github}</a>
    </li>*/}
      </ul>
      <br />
      <div className='text-center'>
        {loading && <span className='spinner-border spinner-border-lg'></span>}
      </div>
      <div className='row justify-content-sm-between'>
        <div className='col-12 col-sm-6'>
          <button className='btn2' onClick={backStep}>
            Atrás
          </button>
        </div>
        <div className='col-12 col-sm-6 confirmButton d-sm-flex justify-content-sm-end '>
          <button className='btn1' onClick={continueStep} disabled={loading}>
            Realizar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
