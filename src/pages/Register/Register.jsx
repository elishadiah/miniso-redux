import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import isEmail from 'validator/lib/isEmail';
import AuthService from '../../services/auth.service';
import './Register.css';

const required = (value) => {
  if (!value) {
    return (
      <div className='alet alert-danger' role='alert'>
        Este campo es requerido!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='alert alert-danger' role='alert'>
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className='alert alert-danger' role='alert'>
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className='alert alert-danger' role='alert'>
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const history = useHistory();

  const [names, setNames] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [nit, setNit] = useState('');
  const [dui, setDui] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');

  const onChangeNames = (e) => {
    const names = e.target.value;
    setNames(names);
  };

  const onChangeLastName = (e) => {
    const lastname = e.target.value;
    setLastName(lastname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeNit = (e) => {
    const nit = e.target.value;
    setNit(nit);
  };

  const onChangeDui = (e) => {
    const dui = e.target.value;
    setDui(dui);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(
        username,
        password,
        names,
        lastname,
        email,
        nit,
        dui,
        phone,
        address
      ).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          history.push('/login');
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className='container'>
      <div className='col-md-12'>
        <div className='card card-container'>
          <div className='Icon'>
            <img src='./img/logo.png' alt='' height={70} width={70} />
          </div>
          <div className='Context'>
            <h3>Crea una Cuenta </h3>
          </div>
          <p>Completa el siguiente formulario.</p>
          {/*<img
            src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
            alt='profile-img'
            className='profile-img-card'
          />*/}
          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div>
                <div className='form-group'>
                  <label htmlFor='names'>Nombre</label>
                  <Input
                    type='text'
                    className='form-control'
                    name='names'
                    value={names}
                    onChange={onChangeNames}
                    validations={[required]}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='lastname'>Apellido</label>
                  <Input
                    type='text'
                    className='form-control'
                    name='lastname'
                    value={lastname}
                    onChange={onChangeLastName}
                    validations={[required]}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <Input
                    type='text'
                    className='form-control'
                    name='email'
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='nit'>Nit</label>
                  <Input
                    type='text'
                    className='form-control'
                    name='nit'
                    value={nit}
                    onChange={onChangeNit}
                    validations={[required]}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='dui'>DPI</label>
                  <Input
                    type='text'
                    className='form-control'
                    name='dui'
                    value={dui}
                    onChange={onChangeDui}
                    validations={[required]}
                  />
                </div>
                {/* <div className='form-group'>
                  <label htmlFor='phone'>Número de Teléfono</label>
                  <Input
                    type='tel'
                    className='form-control'
                    name='phone'
                    value={phone}
                    onChange={onChangePhone}
                    validations={[required]}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='address'>Dirección</label>
                  <Input
                    type='text'
                    className='form-control'
                    name='address'
                    value={address}
                    onChange={onChangeAddress}
                    validations={[required]}
                  />
                </div> */}
                <div className='form-group'>
                  <label htmlFor='username'>Username</label>
                  <Input
                    type='text'
                    className='form-control'
                    name='username'
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <Input
                    type='password'
                    className='form-control'
                    name='password'
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
                <div className='form-group'>
                  <button className='bTnPropertyRegister btn-block '>
                    Enviar
                  </button>
                </div>
              </div>
            )}
            {message && (
              <div className='form-group'>
                <div
                  className={
                    successful ? 'alert alert-success' : 'alert alert-danger'
                  }
                  role='alert'
                >
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
