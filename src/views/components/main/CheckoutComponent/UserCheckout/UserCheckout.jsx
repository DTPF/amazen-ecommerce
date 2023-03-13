import React from 'react';
import './UserCheckout.scss'

export default function UserCheckout({ userData }) {

  return (
    <section className='user-checkout'>
        <div className='user-checkout__name'>
          {userData?.name} {userData?.lastname}
        </div>
        <div className='user-checkout__email'>
          {userData?.email}
        </div>
        <div className='user-checkout__phone-number'>
          {userData?.phoneNumber}
        </div>
      <div className='user-checkout__address'>
        <div className='user-checkout__address--street'>
          {userData?.address?.street}
        </div>
        <div className='user-checkout__address--city-country'>
          {userData?.address?.city}, {userData?.address?.country}
        </div>
        <div className='user-checkout__address--postal-code'>
          {userData?.address?.postalCode}
        </div>
        <div className='user-checkout__address--province'>
          {userData?.address?.province}
        </div>
      </div>
    </section>
  )
}