import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpApi } from '../../../../../api/user';
import './RegisterForm.scss';

export default function RegisterForm({ setValtidationMsg }) {
  let navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    role: "user",
    address: {
      street: "",
      city: "",
      province: "",
      country: "",
      postalCode: ""
    },
    createdAt: Date.now()
  });

  const handleChangeForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    (e.target.value === '') && setValtidationMsg(undefined);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signUpApi(inputs);
    
    if (result.status === 200) {
      setValtidationMsg(undefined);
      navigate('/auth/login');
    } else {
      setValtidationMsg(result.message);
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

      <label htmlFor='address'>
        Calle
        <input
          name='address'
          type="text"
          placeholder='Av. de los pinos, 9'
          onChange={(e) => setInputs({
            ...inputs,
            address: {
              ...inputs.address,
              street: e.target.value
            }
          })}
        />
      </label>

      <label htmlFor='city'>
        Ciudad
        <input
          name='city'
          type="text"
          placeholder='Palma de Mallorca'
          onChange={(e) => setInputs({
            ...inputs,
            address: {
              ...inputs.address,
              city: e.target.value
            }
          })}
        />
      </label>

      <label htmlFor='province'>
        Provincia
        <input
          name='province'
          type="text"
          placeholder='Illes Balears'
          onChange={(e) => setInputs({
            ...inputs,
            address: {
              ...inputs.address,
              province: e.target.value
            }
          })}
        />
      </label>

      <label htmlFor='country'>
        País
        <input
          name='country'
          type="text"
          placeholder='España'
          onChange={(e) => setInputs({
            ...inputs,
            address: {
              ...inputs.address,
              country: e.target.value
            }
          })}
        />
      </label>

      <label htmlFor='postalCode'>
        Código postal
        <input
          name='postalCode'
          type="number"
          placeholder='078345'
          onChange={(e) => setInputs({
            ...inputs,
            address: {
              ...inputs.address,
              postalCode: e.target.value
            }
          })}
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