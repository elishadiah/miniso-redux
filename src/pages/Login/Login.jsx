import jwtDecode from 'jwt-decode';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'; // IF IS REACT-WEB
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { loginSuccess } from '../../redux/userRedux';
import AuthService from '../../services/auth.service';
import './Login.css';
import { getQueryParams } from '../../utilities/getGetQueryParams';
import { toast } from 'react-toastify';

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        Este campo es requerido!
      </div>
    );
  }
};

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const isError = getQueryParams('error');
  const errorMessage = getQueryParams('message');

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage || 'Error');
    }
  }, [isError, errorMessage]);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password, (isOk, result) => {
        if (isOk) {
          history.push('/');
          const user = jwtDecode(result.access_token);
          dispatch(loginSuccess(user));
          return;
        }

        setLoading(false);
        setMessage('El usuario o contraseña no es correcto');
      });
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
          <h3>Iniciar Sesión </h3>
        </div>

        <Form onSubmit={handleLogin} ref={form}>
          <div className='form-group'>
            <label htmlFor='username'>Usuario</label>
            <Input
              type='text'
              className='form-control'
              name='username'
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Contraseña</label>
            <Input
              type='password'
              className='form-control'
              name='password'
              value={password}
              onChange={onChangePassword}
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
              <span>Iniciar Sesión</span>
            </button>
          </div>

          <div className='text-center mt-3'>
            <Link
              to={'/forgot-password'}
              className='text-decoration-none text-black'
            >
              ¿Olvidaste tu contraseña?
            </Link>
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
        <div className='form-group'>
          <Link
            to={{ pathname: 'https://miniso.realizeservice.com/admin/' }}
            target='_blank'
          >
            {/*<button className='bTnPropertyLogin btn-block btnstyles'>
              <span>¿Eres administrador?</span>
          </button>*/}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
