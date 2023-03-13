import React, { useState } from 'react';
import { signInApi } from '../../../../../api/user';
import useAuthContext from '../../../../../hooks/useAuthContext';
import jwtDecode from "jwt-decode";
import Cookies from 'js-cookie';
import toaster from '../../../UI/toast/toast';
import './loginForm.scss';

export default function LoginForm({ setValtidationMsg }) {
  const { setUser } = useAuthContext();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    (e.target.value === '') && setValtidationMsg(undefined);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.email) {
      return setValtidationMsg('Introduce tu e-mail');
    }

    const result = await signInApi(inputs);
    if (result.message) {
      setValtidationMsg(result.message);
    } else {
      const { accessToken, refreshToken } = result;
      const obj = {
        ACCESS_TOKEN: accessToken,
        REFRESH_TOKEN: refreshToken
      }
      Cookies.set('token', JSON.stringify(obj))
      setUser({
        isLoading: false,
        userData: jwtDecode(accessToken),
      });
      toaster('¡Bienvenido/a!');
    }
  }

  return (
    <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='email'>
        Dirección de e-mail
        <input
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