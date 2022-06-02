import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const AddressForm = ({ setFromShow }) => {
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [poblados, setPoblados] = useState([]);

  const [departament, setDepartament] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [poblado, setPoblado] = useState('');

  useEffect(() => {
    axios
      .get('http://3.16.73.177:9080/public/geo/departamento')
      .then((res) => {
        setDepartamentos(res.data.body);
        setDepartament(res.data?.body?.[1]?.id);
      })
      .catch((e) => {
        toast.error('¡Error del Servidor!');
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://3.16.73.177:9080/public/geo/municipio?departamento=${departament}`
      )
      .then((res) => {
        setMunicipio(res.data?.body?.[1]?.id);
        setMunicipios(res.data?.body || []);
      })
      .catch((e) => {
        toast.error('¡Error del Servidor!');
      });
  }, [departament]);
  useEffect(() => {
    axios
      .get(`http://3.16.73.177:9080/public/geo/poblado?municipio=${municipio}`)
      .then((res) => {
        setPoblado(res.data?.body?.[1]?.id);
        setPoblados(res.data?.body || []);
      })
      .catch((e) => {
        toast.error('¡Error del Servidor!');
      });
  }, [municipio]);

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
              value={departament}
              onChange={(e) => setDepartament(e.target.value)}
            >
              {departamentos.map((item) => (
                <option value={item.id} key={Math.random()}>
                  {item.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='department'>Municipio</label>
            <select
              class='form-select mt-1'
              id='department'
              aria-label='Default select example'
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
            >
              {municipios.map((item) => (
                <option value={item.id} key={Math.random()}>
                  {item.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='department'>Poblado</label>
            <select
              class='form-select mt-1'
              id='department'
              aria-label='Default select example'
              value={poblado}
              onChange={(e) => setPoblado(e.target.value)}
            >
              {poblados.map((item) => (
                <option value={item.id} key={Math.random()}>
                  {item.nombre}
                </option>
              ))}
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
