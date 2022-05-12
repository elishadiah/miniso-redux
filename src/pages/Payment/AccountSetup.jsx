import React from 'react';
import { connect } from 'react-redux';
import './Form.css';
//import axios from "axios";

const installMents = [
  {
    value: 1,
    text: 'Contado',
  },
  {
    value: 3,
    text: 'Tres cuotas',
  },
  {
    value: 6,
    text: 'Seis cuotas',
  },
  {
    value: 10,
    text: 'Diez cuotas',
  },
  {
    value: 12,
    text: 'Doce cuotas',
  },
  {
    value: 18,
    text: 'Dieciocho cuotas',
  },
  {
    value: 24,
    text: 'Veinticuatro cuotas',
  },
];

export const AccountSetup = (props) => {
  const { values, inputChange, total, nextStep } = props;
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className='form-container'>
      <h3 className='mb-5 text-center'>Datos de Pago</h3>
      <div className='form.group'>
        <label htmlFor='cardname'>Nombre del titular de la tarjeta</label>
        <input
          type='text'
          className='form-control'
          name='cardname'
          onChange={inputChange('cardname')}
          value={values.cardname}
        />
      </div>
      <div className='form.group'>
        <label htmlFor='cardnumber'>Número de Tarjeta</label>
        <input
          type='text'
          className='form-control'
          name='cardnumber'
          onChange={inputChange('cardnumber')}
          value={values.cardnumber}
        />
      </div>
      <div className='form.group'>
        <label htmlFor='codigo'>Código de Seguridad (CVV)</label>
        <input
          type='text'
          className='form-control'
          name='codigo'
          onChange={inputChange('codigo')}
          value={values.codigo}
        />
      </div>
      <div className='form.group'>
        <label htmlFor='date'>Fecha de Expiración</label>
        <input
          type='text'
          className='form-control'
          name='date'
          placeholder='mm/yy'
          onChange={inputChange('date')}
          value={values.date}
        />
      </div>
      <div className='form.group'>
        <label htmlFor='date'>
          Elige tu cantidad de cuotas para pagar tus artículos
        </label>
        <select
          class='form-select'
          value={values.cuotas}
          aria-label='Default select example'
          onChange={inputChange('cuotas')}
        >
          {total > 1000 ? (
            installMents.map((item) => (
              <option value={item.value} key={Math.random()}>
                {item.text}
              </option>
            ))
          ) : (
            <option value='1'>Contado</option>
          )}
        </select>
      </div>

      <br />
      <div className='text-right'>
        <button className='bTnProperty' onClick={continueStep}>
          Continuar
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const total = state.cart.total;
  return { total };
};
export default connect(mapStateToProps)(AccountSetup);
