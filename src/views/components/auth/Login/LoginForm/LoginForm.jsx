import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DB_NAME_AMAZEN, DB_VERSION } from '../../../../../indexedDB/config';
import useUserContext from '../../../../../hooks/useUserContext';
import storeUserIDB from '../../../../../indexedDB/api/auth/storeUserIDB';
import useLogin from '../../../../../indexedDB/api/users/useLogin';
import './LoginForm.scss';


export default function LoginForm({ setShowValidationMessage }) {
  const { setUserContext } = useUserContext();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [result, setResult] = useState('');
  const response = useLogin(inputs.email, inputs.password);
  let navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    isMounted && setResult(response);

    return () => { isMounted = false }
  }, [response]);

  const handleChangeForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (response === 'email-not-valid' || response === 'password-not-valid') {
      return setShowValidationMessage(true);
    } else if (response.status === 'success') {
      let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

      openRequest.onsuccess = function (e) {
        const db = e.target.result;
        storeUserIDB(db, response.user);
        setUserContext(response.user)
        setShowValidationMessage(false);
      }

      openRequest.onerror = function() {
        console.log('Login error, LoginForm.jsx ~ 47');
      }

      return navigate('/');
    };
  }

  return (
    <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='email'>
        Dirección de e-mail
        <input
          className={`${((result === 'email-not-valid') ? 'validation-warning' : '')} ${((result === 'success' || result === 'password-not-valid') ? 'validation-success' : '')} `}
          name='email'
          id='email'
          type="email"
          onChange={(e) => handleChangeForm(e)}
        />
      </label>

      <label htmlFor='password'>
        Contraseña
        <input
          name='password'
          id='password'
          type="password"
          onChange={(e) => handleChangeForm(e)}
        />
      </label>

      <input className='login-form__button' type="submit" value="Continuar" />
    </form>
  )
}