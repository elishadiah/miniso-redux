import { useCallback, useEffect, useState } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import axiosInstance from '../../../services/axiosInstance';
import AddressForm from '../Profile/AddressForm';
const AllAddress = () => {
  const [address, setAddress] = useState([]);

  const [selectedId, setSelectedId] = useState(null);
  const [isAdd, setIsAdd] = useState(false);

  const fetchAllAddress = useCallback(async () => {
    console.log('fetch all address');
    try {
      const username = localStorage.getItem('username');

      const res = await axiosInstance.get(
        `/public/geo/direccion?userName=${username}`
      );
      setAddress(res.data.body);
    } catch (error) {
      console.error(error);
      const errorMsg = error?.response?.data?.message || '¡Error del Servidor!';
      toast.error(errorMsg);
    }
  }, []);

  useEffect(() => fetchAllAddress(), [fetchAllAddress]);

  const deleteAddressHandler = async (e, id) => {
    e.preventDefault();
    try {
      const url = `/public/geo/direccion?direccion=${id}`;
      await axiosInstance.delete(url);
      toast.success('¡Dirección eliminada!');
      setAddress((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
      const errorMsg = error?.response?.data?.message || '¡Error del Servidor!';
      toast.error(errorMsg);
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <h2 className='m-0'>All Address</h2>
        <Button
          onClick={() => {
            if (selectedId) setSelectedId('');
            setIsAdd(true);
          }}
        >
          Agregar nueva dirección
        </Button>
      </div>
      <table class='table'>
        <tbody>
          <tr>
            <th scope='col'></th>
            <th scope='col'>Departamento</th>
            <th scope='col'>Municipio</th>
            <th scope='col'>Poblado</th>
            <th scope='col'>Teléfono</th>
            <th scope='col'>Dirección</th>
            <th scope='col'>Referencia</th>
            <th scope='col'>Action</th>
          </tr>
          {address.map((address, index) => (
            <tr key={Math.random()}>
              <th scope='row'>{index + 1}</th>
              <td>{address.departamentoDto.nombre}</td>
              <td>{address.municipioDto.nombre}</td>
              <td>{address.pobladoDto.nombre}</td>
              <td>{address.telefono}</td>
              <td>{address.direccion}</td>
              <td>{address.referencia}</td>
              <td>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Button
                    onClick={() => {
                      if (isAdd) setIsAdd(false);
                      setSelectedId(address.id);
                    }}
                  >
                    <FaPen />
                  </Button>
                  <Button onClick={(e) => deleteAddressHandler(e, address.id)}>
                    <FaTrashAlt />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedId && (
        <AddressForm
          isEdit
          setFromShow={setSelectedId}
          selectedId={selectedId}
          fetchAllAddress={fetchAllAddress}
        />
      )}
      {isAdd && (
        <AddressForm setFromShow={setIsAdd} fetchAllAddress={fetchAllAddress} />
      )}
    </div>
  );
};

export default AllAddress;

const Button = styled.button`
  padding: 0.23rem 0.4rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 0.8rem;
  margin-top: 0;
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
