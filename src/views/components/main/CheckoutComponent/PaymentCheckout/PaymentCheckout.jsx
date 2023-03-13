import React, { useState } from 'react';
import { useGetAccessTokenApi } from '../../../../../api/auth';
import { newOrderApi } from '../../../../../api/order';
import toaster from '../../../UI/toast/toast';
import './PaymentCheckout.scss';

export default function PaymentCheckout({ cart, userData, discount }) {
  const [creditCard, setCreditCard] = useState({
    creditNumber: '',
    creditCCV: '',
    creditExpires: ''
  });
  const token = useGetAccessTokenApi();

  const handleCreditCardInputs = (e) => {
    setCreditCard({ ...creditCard, [e.target.name]: e.target.value });
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!creditCard.creditNumber || !creditCard.creditCCV || !creditCard.creditExpires) {
      toaster('Rellena los datos de la tarjeta', 'error');
      return;
    }

    let orderObj = {
      userId: userData.id,
      products: cart,
      creditCardNumber: creditCard,
      discount: discount
    }
    orderObj.cardNumber = await agregarCaracter(creditCard.creditExpires, "/", 2);

    newOrderApi(token, orderObj)
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          toaster(res.message, 'success');
        } else {
          toaster(res.message, 'error');
        }
      })
      .catch(err => {
        toaster(err.message, 'error');

      })
  }

  return (
    <div className='payment-checkout'>
      <p>Datos de la tarjeta</p>
      <form className='payment-checkout__form' onSubmit={(e) => handleSubmitForm(e)}>
        <label htmlFor='credit-number'>
          <input
            name="creditNumber"
            className="cc-number"
            type="tel"
            pattern="\d*"
            maxLength="19"
            placeholder="Nº de tarjeta"
            value={creditCard?.creditNumber ? creditCard?.creditNumber : ''}
            onChange={(e) => handleCreditCardInputs(e)}
          />
        </label>

        <div className='payment-checkout__form--expires-ccv'>
          <label htmlFor='credit-expires'>
            <input
              name="creditExpires"
              className="cc-expires"
              type="tel"
              pattern="\d*"
              maxLength="7"
              placeholder="MM / YY"
              value={creditCard?.creditExpires ? creditCard?.creditExpires : ''}
              onChange={(e) => handleCreditCardInputs(e)}
            />
          </label>

          <label htmlFor='creditCCV'>
            <input
              name="creditCCV"
              className="cc-cvc"
              type="tel"
              pattern="\d*"
              maxLength="4"
              placeholder="CVC"
              value={creditCard?.creditCCV ? creditCard?.creditCCV : ''}
              onChange={(e) => handleCreditCardInputs(e)}
            />
          </label>
        </div>
        <input type='submit' value='Comprar ahora' />
      </form>
    </div>
  )
}

const agregarCaracter = async (cadena, caracter, pasos) => {
  let cadenaConCaracteres = "";
  const longitudCadena = cadena.length;
  for (let i = 0; i < longitudCadena; i += pasos) {
    if (i + pasos < longitudCadena) {
      cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
    } else {
      cadenaConCaracteres += cadena.substring(i, longitudCadena);
    }
  }
  return cadenaConCaracteres;
}