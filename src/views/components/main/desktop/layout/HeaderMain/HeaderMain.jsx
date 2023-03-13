import React from 'react';
import Logo from './logo';
import SelectCountry from './selectCountry';
import Search from './search';
import Chart from './shoppingCart';
import OrderHistory from './oderHistory';
import MyAccount from './myAccount';
import Language from './language';
import './headerMain.scss';

export default function HeaderMain() {
  return (
    <div className='header-main'>
      <div className='header-main__row-1'>
        <Logo />
        <SelectCountry />
      </div>

      <div className='header-main__row-2'>
        <Search />
      </div>

      <div className='header-main__row-3'>
        <Language />
        <MyAccount />
        <OrderHistory />
        <Chart />
      </div>
    </div>
  );
}