import React, { useEffect, useState } from 'react';
import { getProductByIdApi } from '../../../../../api/products';
import './CartCheckout.scss';

export default function CartCheckOut({ cart }) {
  return (
    <div className='checkout-cart'>
      {cart && cart.map((product) => (
        <RenderCart key={product._id} product={product} cart={cart} />
      ))}
    </div>
  )
}

function RenderCart({ product, cart }) {
  const [fetchProduct, setFetchProduct] = useState('');

  useEffect(() => {
    if (product && cart) {
      getProductByIdApi(product.productId)
        .then(res => {
          setFetchProduct(res.product);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [product, cart]);

  return (
    <div className='checkout-cart__item'>
      <div className='checkout-cart__item--title'>
        {fetchProduct.title}
      </div>
      <div className='checkout-cart__item--quantity'>
        Cantidad: {product.quantity} uds.
      </div>
      <div className='checkout-cart__item--price'>
        Precio:  <span>{fetchProduct && fetchProduct.sizeAndPrice[0]?.price}</span> €
        Total:  <span>{fetchProduct && (fetchProduct.sizeAndPrice[0]?.price * product.quantity).toFixed(2)}</span> €
      </div>
    </div>
  )
}