import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import axiosInstance from '../../../services/axiosInstance';

const AddressForm = ({ setFromShow, isEdit, selectedId, fetchAllAddress }) => {
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [poblados, setPoblados] = useState([]);

  const [departamento, setDepartamento] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [poblado, setPoblado] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [referencia, setReferencia] = useState('');

  useEffect(() => {
    if (isEdit && selectedId) {
      const username = 'kev45';
      // const username = localStorage.getItem('token');
      axiosInstance
        .get(`/public/geo/direccion?userName=${username}`)
        .then((res) => {
          const matchedAddress = res.data.body?.find(
            (address) => address.id === selectedId
          );
          console.log({ matchedAddress });
          if (Object.keys(matchedAddress).length > 0) {
            setDepartamento(matchedAddress.departamentoDto.id);
            setMunicipio(matchedAddress.municipioDto.id);
            setPoblado(matchedAddress.pobladoDto.id);
            setTelefono(matchedAddress.telefono);
            setDireccion(matchedAddress.direccion);
            setReferencia(matchedAddress.referencia);
          }
        })
        .catch((e) => {
          console.log(e);
          toast.error('¡Error del Servidor!');
        });
    }
  }, [isEdit, selectedId]);

  useEffect(() => {
    axiosInstance
      .get('/public/geo/departamento')
      .then((res) => {
        setDepartamentos(res.data.body);
        if (!isEdit) {
          setDepartamento(res.data?.body?.[0]?.id);
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error('¡Error del Servidor!');
      });
  }, [isEdit]);

  useEffect(() => {
    if (!departamento) return;
    axiosInstance
      .get(`/public/geo/municipio?departamento=${departamento}`)
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
  }, [departamento, isEdit]);

  useEffect(() => {
    if (!municipio) return;
    axiosInstance
      .get(`/public/geo/poblado?municipio=${municipio}`)
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

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      departamento: parseInt(departamento),
      municipio,
      poblado,
      telefono,
      direccion,
      referencia,
    };
    const username = localStorage.getItem('username');

    if (isEdit) {
      try {
        const url = `/public/geo/direccion?userName=${username}&direccion=${selectedId}`;
        await axiosInstance.put(url, data);

        setFromShow(false);
        toast.success('Address updated');
        fetchAllAddress();
      } catch (error) {
        console.error(error);
        const errorMsg =
          error?.response?.data?.message || '¡Error del Servidor!';
        toast.error(errorMsg);
      }

      return;
    }

    try {
      const url = `/public/geo/direccion?userName=${username}`;
      await axiosInstance.post(url, data);
      setFromShow(false);
      toast.success('Address added');
      fetchAllAddress();
    } catch (error) {
      console.error(error);
      const errorMsg = error?.response?.data?.message || '¡Error del Servidor!';
      toast.error(errorMsg);
    }

    return;
  };

  return (
    <div className='row justify-content-center '>
      <div className='col-md-6 p-3'>
        {isEdit ? <h2>Edit Address</h2> : <h2>Nueva Dirección</h2>}
        <form onSubmit={submitHandler} className='mt-3'>
          <div className='form-group'>
            <label htmlFor='department'>Departamento</label>
            <select
              class='form-select mt-1'
              id='department'
              aria-label='Default select example'
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
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
          <div>
            <Button type='submit'>Guardar</Button>
            <Button2 type='button' onClick={() => setFromShow(false)}>
              Cancel
            </Button2>
          </div>
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
const Button2 = styled.button`
  padding: 7px 15px;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  margin-left: 0;
  background-color: transparent;
  border: 2px solid #e71425;
  color: #e71425;
  border-radius: 4px;
  transition: background 200ms ease-in, color 200ms ease-in;

  &:hover {
    color: #ffffff;
    background-color: #e71425;
    border: 2px solid #e71425;
    cursor: pointer;
  }
`;
