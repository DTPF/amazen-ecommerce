import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpApi } from '../../../../../api/user';
import './RegisterForm.scss';

export default function RegisterForm() {
  let navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    role: "user",
    createdAt: Date.now()
  });

  const handleChangeForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signUpApi(inputs);
    
    if (result.status === 200) {
      console.log(result.message);
      navigate('/auth');
    } else {
      if (result.status === 500) {
        console.log(result.message);
      } else {
        console.log(result.message);
      }
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