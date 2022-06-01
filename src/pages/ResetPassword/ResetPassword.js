import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import getGetQueryParams from '../../utilities/getGetQueryParams';
import './ResetPassword.css';

const passwordValidation = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        Este campo es requerido!
      </div>
    );
  }
};
const confirmPasswordValidation = (value, props) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        Este campo es requerido!
      </div>
    );
  }
  const prevpass = props.prevpass;

  if (prevpass !== value) {
    return (
      <div className='alert alert-danger' role='alert'>
        ¡La contraseña no coincide!
      </div>
    );
  }
};

const ResetPassword = () => {
  const form = useRef();
  const checkBtn = useRef();
  const token = getGetQueryParams('token');

  const [isPassShow, setIsPassShow] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      try {
        const url = `https://2leucj6c3a.execute-api.us-east-2.amazonaws.com/API/public/reset_password`;
        const formData = new FormData();
        formData.append('token', token);
        formData.append('password', password);
        const res = await axios.post(url, formData);
        setLoading(false);
        if (res.data.ok) {
          toast.success('¡Guardar contraseña!');
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || 'Failed');
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      toast.error('Invalid token!');
    }
  });

  return (
    <div className='container col-md-12'>
      <div className='card card-container'>
        <div className='Icon'>
          <img src='./img/logo.png' alt='' height={70} width={70} />
        </div>
        <div className='Context'>
          <h3>Restablece tu contraseña</h3>
          <p>Escribe una nueva contraseña para tu cuenta de Miniso</p>
        </div>

        <Form onSubmit={handleSubmit} ref={form}>
          <div className='form-group'>
            <label htmlFor='username'>Nueva Contraseña</label>

            <Input
              type={isPassShow ? 'text' : 'password'}
              name='password'
              value={password}
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
              validations={[passwordValidation]}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>
              Escribe tu contraseña nueva una vez más
            </label>
            <Input
              type={isPassShow ? 'text' : 'password'}
              className='form-control'
              name='confirmPassword'
              value={confirmPassword}
              prevpass={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              validations={[confirmPasswordValidation]}
            />
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              checked={isPassShow}
              onChange={() => setIsPassShow((p) => !p)}
              type='checkbox'
              id='passwordShowCheckBox'
            />
            <label
              className='form-check-label'
              htmlFor='passwordShowCheckBox'
              style={{ userSelect: 'none' }}
            >
              Show password
            </label>
          </div>
          <div className='form-group'>
            <button
              className='bTnPropertyLogin btn-block btnstyles'
              disabled={loading}
            >
              {loading && (
                <span className='spinner-border spinner-border-sm'></span>
              )}
              <span>Guardar</span>
            </button>
          </div>

          {message && (
            <div className='form-group'>
              <div className='alert alert-danger' role='alert'>
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
