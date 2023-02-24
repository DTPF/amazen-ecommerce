import React, { useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { DB_NAME_AMAZEN, DB_VERSION } from '../../../../../indexedDB/config';
import postUser from '../../../../../indexedDB/api/users/postUser';
import './RegisterForm.scss';

export default function RegisterForm({ setMessage, showValidationMessage, setShowValidationMessage }) {
  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    role: "user",
    createdAt: Date.now()
  });
  let navigate = useNavigate();
  const id = useId();

  const handleChangeForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

    openRequest.onsuccess = async function (e) {
      let db = e.target.result;
      const checkValidation = isValid(inputs, setMessage, setShowValidationMessage);

      if (checkValidation) {
        inputs.id = id + inputs.email;
        postUser(db, inputs, navigate, setMessage, setShowValidationMessage);
      }
    }

    openRequest.onerror = function () {
      console.log('Login error, LoginForm.jsx ~ 47');
    }
  }

  return (
    <form className='login-form' onSubmit={(e) => handleSubmit(e)} noValidate>
      <label htmlFor='name'>
        Nombre
        <input
          name='name'
          id='name'
          type="text"
          placeholder='Nombre'
          onChange={(e) => handleChangeForm(e)}
        />
      </label>

      <label htmlFor='lastname'>
        Apellidos
        <input
          name='lastname'
          type="text"
          placeholder='Apellidos'
          onChange={(e) => handleChangeForm(e)}
        />
      </label>

      <label htmlFor='email'>
        Dirección de e-mail
        <input
          name='email'
          type="email"
          onChange={(e) => handleChangeForm(e)}
        />
      </label>

      <label htmlFor='password'>
        Contraseña
        <input
          name='password'
          type="password"
          onChange={(e) => handleChangeForm(e)}
        />
      </label>

      <label htmlFor='repeatPassword'>
        Confirma tu contraseña
        <input
          name='repeatPassword'
          type="password"
          onChange={(e) => handleChangeForm(e)}
        />
      </label>

      <input className='login-form__button' type="submit" value="Continuar" />
    </form>
  )
}

function isValid(result, setMessage, setShowValidationMessage) {
  const { name, email, password, repeatPassword } = result;

  if (!name) {
    setMessage('El nombre es obligatorio');
    setShowValidationMessage(true);
    return false;
  }

  if (!email) {
    setMessage('El e-mail es obligatorio');
    setShowValidationMessage(true);
    return false;
  }

  // eslint-disable-next-line no-useless-escape
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) {
    setMessage('El e-mail no es correcto');
    setShowValidationMessage(true);
    return false;
  }

  if (!password) {
    setMessage('La contraseña es obligatoria');
    setShowValidationMessage(true);
    return false;
  }

  if (password.length < 6) {
    setMessage('La contraseña debe tener al menos 6 carácteres');
    setShowValidationMessage(true);
    return false;
  }

  if (password && !repeatPassword) {
    setMessage('Repite la contraseña');
    setShowValidationMessage(true);
    return false;
  }

  if (password !== repeatPassword) {
    setMessage('Las contraseñas no coinciden');
    setShowValidationMessage(true);
    return false;
  }

  return true;
}