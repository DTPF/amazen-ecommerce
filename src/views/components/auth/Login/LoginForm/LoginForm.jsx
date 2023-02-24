import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DB_NAME_AMAZEN, DB_VERSION } from '../../../../../indexedDB/config';
import useUserContext from '../../../../../hooks/useUserContext';
import storeUserIDB from '../../../../../indexedDB/api/auth/storeUserIDB';
import useLogin from '../../../../../indexedDB/api/users/useLogin';
import './LoginForm.scss';


export default function LoginForm({ setMessage, setShowValidationMessage }) {
  const { setUserContext } = useUserContext();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const response = useLogin(inputs.email, inputs.password);
  let navigate = useNavigate();

  const handleChangeForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.email) {
      setMessage('Introduce tu e-mail');
      setShowValidationMessage(true);
      return;
    }

    if (response === 'email-not-valid') {
      setMessage('E-mail incorrecto');
      setShowValidationMessage(true);
      return;
    }

    if (response === 'password-not-valid') {
      setMessage('Contraseña incorrecta');
      setShowValidationMessage(true);
      return;
    }

    if (response.status === 'success') {
      let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

      openRequest.onsuccess = function (e) {
        const db = e.target.result;
        storeUserIDB(db, response.user);
        setUserContext(response.user)
        setShowValidationMessage(false);
        return navigate('/');
      }

      openRequest.onerror = function () {
        console.log('Login error, LoginForm.jsx ~ 47');
      }

    };
  }

  const setClassnames = () => {
    if (response === 'email-not-valid') {
      return 'validation-warning';
    } else {
      return inputs.email ? 'validation-success' : '';
    }
  }

  return (
    <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='email'>
        Dirección de e-mail
        <input
          className={setClassnames()}
          name='email'
          type="email"
          value={inputs.email}
          onChange={(e) => handleChangeForm(e)}
        />
      </label>

      <label htmlFor='password'>
        Contraseña
        <input
          name='password'
          type="password"
          value={inputs.password}
          onChange={(e) => handleChangeForm(e)}
        />
      </label>

      <input className='login-form__button' type="submit" value="Continuar" />
    </form>
  )
}