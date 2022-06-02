import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import AddressForm from '../Profile/AddressForm';
const AllAddress = () => {
  const [address, setAddress] = useState([]);

  const [selectedId, setSelectedId] = useState(false);

  useEffect(() => {
    const username = 'kev45';
    // const username = localStorage.getItem('token');
    axios
      .get(`http://3.16.73.177:9080/public/geo/direccion?userName=${username}`)
      .then((res) => {
        console.log(res.data.body);
        setAddress(res.data.body);
      })
      .catch((e) => {
        console.log(e);
        toast.error('Server error!');
      });
  }, []);

  const deleteAddressHandler = (e) => {
    e.preventDefault();
    const url = `http://3.16.73.177:9080/public/geo/direccion?direccion=4`;
    axios
      .delete(url)
      .then(() => {
        toast.success('Address added');
      })
      .catch((e) => {
        console.log(e);
        toast.error('Server Error!');
      });
  };

  return (
    <div>
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
              <th scope='row'>{index}</th>
              <td>{address.departamentoDto.nombre}</td>
              <td>{address.municipioDto.nombre}</td>
              <td>{address.pobladoDto.nombre}</td>
              <td>{address.telefono}</td>
              <td>{address.direccion}</td>
              <td>{address.referencia}</td>
              <td>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Button onClick={() => setSelectedId(address.id)}>
                    <FaPen />
                  </Button>
                  <Button onClick={deleteAddressHandler}>
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
        />
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
