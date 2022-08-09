import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../../services/axiosInstance';
import './Confirm.css';
import './Form.css';

export const SelectAddress = (props) => {
  const { prevStep, nextStep, shippingAddress, setShippingAddress } = props;
  const [addresses, setAddresses] = useState([]);

  const fetchAllAddress = useCallback(async () => {
    try {
      const username = localStorage.getItem('username');

      const res = await axiosInstance.get(
        `/public/geo/direccion?userName=${username}`
      );
      setAddresses(res.data.body);
      setShippingAddress(res.data.body?.[0].id);
    } catch (error) {
      console.error(error);
      const errorMsg = error?.response?.data?.message || '¡Error del Servidor!';
      toast.error(errorMsg);
    }
  }, [setShippingAddress]);

  useEffect(() => fetchAllAddress(), [fetchAllAddress]);

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className='form-container'>
      <h3 className='mb-5 text-center'>Selecciones una direccion de envio</h3>
      {/* departamento	Municipio	Poblado	Teléfono	Dirección	Referencia */}
      <br />
      <ul class='list-group'>
        {addresses.map((address) => {
          const departamento = address?.departamentoDto?.nombre || '';
          const Municipio = address?.municipioDto?.nombre || '';
          const poblado = address?.pobladoDto?.nombre || '';
          const telefono = address?.telefono || '';
          const direccion = address?.direccion || '';
          const referencia = address?.referencia || '';
          const stringAddress = `${departamento}, ${Municipio},  ${poblado}, ${telefono}, ${direccion}, ${referencia}`;
          return (
            <li class='list-group-item'>
              <div className='d-flex justify-content-between align-items-center gap-4'>
                <input
                  type='radio'
                  name='shippingAddress'
                  checked={shippingAddress === address.id}
                  onChange={() => setShippingAddress(address.id)}
                />
                <p className='m-0 '>{stringAddress}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {addresses.length === 0 && <h2>No address found</h2>}
      <br />

      <div className='row justify-content-sm-between'>
        <div className='col-12 col-sm-6'>
          <button className='btn2' onClick={prevStep}>
            Atrás
          </button>
        </div>
        <div className='col-12 col-sm-6 confirmButton d-sm-flex justify-content-sm-end '>
          <button className='btn1' onClick={nextStep}>
            Realizar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
