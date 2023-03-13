import React, { useEffect, useState } from 'react'
import { getProductByIdApi } from '../../../../../api/products';

export default function OrderResult({ cart, setDiscount }) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalAmountWithDiscount, setTotalAmountWithDiscount] = useState(0);
  const [discountShop, setDiscountShop] = useState('')
  const [discountInput, setDiscountInput] = useState({
    discountUserInput: '',

  });

  useEffect(() => {
    cart.forEach(item => {
      setTotalAmount(prevState => prevState + (item.price * item.quantity));
    });
  }, [cart])

  useEffect(() => {
    cart.forEach(item => {
      getProductByIdApi(item.productId)
        .then(res => {
          if (res.product?.discount?.discountName === discountInput.discountUserInput) {
            setDiscount(res.product?.discount)
            setDiscountShop(res.product?.discount?.shop)
            setTotalAmountWithDiscount(totalAmount - totalAmount * (res.product.discount.percent / 100));
          }
        })
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, discountInput])


  const handleDiscountName = (e) => {
    setDiscountInput({ ...discountInput, [e.target.name]: e.target.value })
  }

  return (
    <div className='order-result'>
      <div className='order-result__info'>
        <p>Total a pagar: <span>{totalAmount.toFixed(2)} €</span></p>
        {(totalAmountWithDiscount > 0) && (
          <>
            <p>Total con descuento: {totalAmountWithDiscount.toFixed(2)}</p>
            <p>Tienda del descuento: {discountShop}</p>
          </>
        )}
        <p>Fecha estimada de entrega: 23/05/2023</p>
      </div>
      <div className='order-result__discount'>
        Aplicar descuento:
        <input
          type='text'
          name='discountUserInput'
          value={discountInput?.discountUserInput}
          onChange={(e) => handleDiscountName(e)}
        />
      </div>
    </div>
  )
}