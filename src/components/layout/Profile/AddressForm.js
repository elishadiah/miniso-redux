import React from 'react';
import styled from 'styled-components';

const AddressForm = ({ setFromShow }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setFromShow(false);
  };
  return (
    <div className='row justify-content-center '>
      <div className='col-md-6 p-3'>
        <h2>Address From</h2>
        <form onSubmit={submitHandler} className='mt-3'>
          <div className='form-group'>
            <label htmlFor='department'>Departamento</label>
            <select
              class='form-select mt-1'
              id='department'
              aria-label='Default select example'
            >
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='department'>Municipio</label>
            <select
              class='form-select mt-1'
              id='department'
              aria-label='Default select example'
            >
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='department'>Poblado</label>
            <select
              class='form-select mt-1'
              id='department'
              aria-label='Default select example'
            >
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='Teléfono'>Teléfono</label>
            <input
              type='text'
              className='form-control'
              name='Teléfono'
              placeholder='Teléfono'
              id='Teléfono'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='Dirección'>Dirección</label>
            <input
              type='text'
              className='form-control'
              name='Dirección'
              placeholder='Dirección'
              id='Dirección'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='Referencia'>Referencia</label>
            <input
              type='text'
              className='form-control'
              name='Referencia'
              placeholder='Referencia'
              id='Referencia'
            />
          </div>
          <Button type='submit'>Save</Button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;

const Button = styled.button`
  padding: 7px 15px;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  margin-left: 0;
  background-color: #e71425;
  color: #ffffff;
  border: 2px solid #e71425;
  border-radius: 4px;
  transition: background 200ms ease-in, color 200ms ease-in;

  &:hover {
    background-color: transparent;
    border: 2px solid #e71425;
    color: #e71425;
    cursor: pointer;
  }
`;
