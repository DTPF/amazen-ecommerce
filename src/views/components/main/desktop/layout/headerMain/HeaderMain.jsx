import React from 'react';
import Logo from './logo/Logo';
import SelectCountry from './selectCountry/SelectCountry';
import Search from './search/Search';
import Chart from './shoppingCart/ShoppingCart';
import './HeaderMain.scss';
import OrderHistory from './oderHistory/OrderHistory';
import MyAccount from './myAccount/MyAccount';

export default function HeaderMain() {
  return (
    <div className='header-main'>
      <Logo />
      <SelectCountry />
      <Search />
      <MyAccount />
      <OrderHistory />
      <Chart />
    </div>
  );
}