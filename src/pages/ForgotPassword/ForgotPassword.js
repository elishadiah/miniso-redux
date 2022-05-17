import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        Este campo es requerido!
      </div>
    );
  }
};

const ForgotPassword = () => {
  const form = useRef();
  const checkBtn = useRef();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      toast.success(
        'Enviamos un correo electrónico,por favor revisa tu bandeja de entrada'
      );
      history.push('/reset-password');
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
          <h3>Ingresa los siguientes datos para restablecer tu contraseña</h3>
        </div>

        <Form onSubmit={handleSubmit} ref={form}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <Input
              type='text'
              className='form-control'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              validations={[required]}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Email</label>
            <Input
              type='email'
              className='form-control'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              validations={[required]}
            />
          </div>

          <div className='form-group'>
            <button
              className='bTnPropertyLogin btn-block btnstyles'
              disabled={loading}
            >
              {loading && (
                <span className='spinner-border spinner-border-sm'></span>
              )}
              <span>Restablece tu contraseña</span>
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

export default ForgotPassword;
