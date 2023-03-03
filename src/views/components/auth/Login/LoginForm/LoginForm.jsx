import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInApi } from '../../../../../api/user';
import useAuth from '../../../../../hooks/useAuth';
import jwtDecode from "jwt-decode";
import { DB_NAME_AMAZEN, DB_VERSION, AUTH } from '../../../../../indexedDB/utils/config';
import toaster from '../../../UI/toast/toast';
import './LoginForm.scss';

export default function LoginForm({ setValtidationMsg }) {
  const { setUser } = useAuth();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
      const openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

      openRequest.onsuccess = function (e) {
        const result = e.target.result;
        const transaction = result.transaction([AUTH], "readwrite");
        let auth = transaction.objectStore(AUTH);
        const obj = {
          id: 0,
          ACCESS_TOKEN: accessToken,
          REFRESH_TOKEN: refreshToken
        }
        const request = auth.put(obj);

        request.onsuccess = function (e) {
          setUser({
            isLoading: false,
            userData: jwtDecode(accessToken),
          });
          setValtidationMsg(undefined);
          navigate('/');
          toaster('¡Bienvenido/a!');
        };

        request.onerror = function () {
          console.log("Error", request.error);
        };
      }
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