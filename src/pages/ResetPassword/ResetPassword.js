import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
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
  const prevPass = props.prevPass;

  if (prevPass !== value) {
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

  const [isPassShow, setIsPassShow] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      toast.success('¡Guardar contraseña!');
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

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
              prevPass={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              validations={[confirmPasswordValidation]}
            />
          </div>

          <div class='form-check'>
            <input
              className='form-check-input'
              checked={isPassShow}
              onChange={() => setIsPassShow((p) => !p)}
              type='checkbox'
              id='passwordShowCheckBox'
            />
            <label
              className='form-check-label'
              for='passwordShowCheckBox'
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
