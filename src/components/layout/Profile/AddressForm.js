import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const AddressForm = ({ setFromShow, isEdit, selectedId }) => {
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [poblados, setPoblados] = useState([]);

  const [departament, setDepartament] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [poblado, setPoblado] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [referencia, setReferencia] = useState('');

  useEffect(() => {
    if (isEdit && selectedId) {
      const username = 'kev45';
      // const username = localStorage.getItem('token');
      axios
        .get(
          `http://3.16.73.177:9080/public/geo/direccion?userName=${username}`
        )
        .then((res) => {
          const matchedAddress = res.data.body?.find(
            (address) => address.id === selectedId
          );
          console.log({ matchedAddress });
          if (Object.keys(matchedAddress).length > 0) {
            setDepartament(matchedAddress.departamentoDto.id);
            setMunicipio(matchedAddress.municipioDto.id);
            setPoblado(matchedAddress.pobladoDto.id);
            setTelefono(matchedAddress.telefono);
            setDireccion(matchedAddress.direccion);
            setReferencia(matchedAddress.referencia);
          }
        })
        .catch((e) => {
          console.log(e);
          toast.error('Server error!');
        });
    }
  }, [isEdit, selectedId]);

  useEffect(() => {
    axios
      .get('http://3.16.73.177:9080/public/geo/departamento')
      .then((res) => {
        setDepartamentos(res.data.body);
        if (!isEdit) {
          setDepartament(res.data?.body?.[0]?.id);
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error('¡Error del Servidor!');
      });
  }, [isEdit]);

  useEffect(() => {
    if (!departament) return;
    axios
      .get(
        `http://3.16.73.177:9080/public/geo/municipio?departamento=${departament}`
      )
      .then((res) => {
        if (!isEdit) {
          setMunicipio(res.data?.body?.[0]?.id);
        }

        setMunicipios(res.data?.body || []);
      })
      .catch((e) => {
        console.log(e);
        toast.error('¡Error del Servidor!');
      });
  }, [departament, isEdit]);

  useEffect(() => {
    if (!municipio) return;
    axios
      .get(`http://3.16.73.177:9080/public/geo/poblado?municipio=${municipio}`)
      .then((res) => {
        if (!isEdit) {
          setPoblado(res.data?.body?.[0]?.id);
        }
        setPoblados(res.data?.body || []);
      })
      .catch((e) => {
        console.log(e);
        toast.error('¡Error del Servidor!');
      });
  }, [municipio, isEdit]);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      departament,
      municipio,
      poblado,
      telefono,
      direccion,
      referencia,
    };
    // const username = localStorage.getItem('username')
    const username = 'kev45';
    if (isEdit) {
      const url = `http://3.16.73.177:9080/public/geo/direccion?userName=${username}&direccion=2`;
      axios
        .put(url)
        .then(() => {
          setFromShow(false);
          toast.success('Address updated');
        })
        .catch((e) => {
          toast.error('Error!');
        });
      return;
    }

    const url = `http://3.16.73.177:9080/public/geo/direccion?userName=${username}`;
    axios
      .post(url)
      .then(() => {
        setFromShow(false);
        toast.success('Address added');
      })
      .catch((e) => {
        toast.error('Error!');
      });
    return;
  };

  return (
    <div className='row justify-content-center '>
      <div className='col-md-6 p-3'>
        {isEdit ? <h2>Edit Address</h2> : <h2>Address From</h2>}
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
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
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
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
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
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
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
