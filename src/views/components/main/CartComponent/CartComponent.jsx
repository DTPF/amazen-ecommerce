import React, { useEffect, useState } from 'react';
import useCartContext from '../../../../hooks/useCartContext';
import { getProductByIdApi } from '../../../../api/products';
import { deleteCartItemApi, updateCartItemQuantityApi } from '../../../../api/cart';
import { useGetAccessTokenApi } from '../../../../api/auth';
import useGetProductImage from '../../../../hooks/useProduct/useGetProductImage';
import randomProductImage from '../Products/randomProductImage';
import toaster from '../../UI/toast/toast';
import './CartComponent.scss';

export default function CartComponent() {
  const { cart, setCart } = useCartContext();
  const [totalAmount, setTotalAmount] = useState(0);
  const haveCart = Boolean(cart?.length > 0);

  useEffect(() => {
    let isMounted = true;
    if (haveCart) {
      const sumAmount = cart.reduce((sum, value) => (typeof value.price == "number" ? sum + (value.price * value.quantity) : sum), 0);
      isMounted && setTotalAmount(sumAmount);
    }
    return () => { isMounted = false }
  }, [cart, setTotalAmount, haveCart])

  if (haveCart) {
    return (
      <div className='cart'>
        {haveCart && <h2>Cesta</h2>}
        <div className='cart__component'>
          {cart && cart.map((item, key) => (
            <CartRender key={key} item={item} cart={cart} setCart={setCart} />
          ))}
        </div>

        <div className='cart__result'>
          <div className='cart__result--box'>
            <p>
              Base: <span>{(totalAmount - (totalAmount * 21 / 100)).toFixed(2)} €</span>
            </p>
            <p>
              IVA: <span>{(totalAmount * 21 / 100).toFixed(2)} €</span>
            </p>
            <p className='cart__result--box__total-price'>
              Total: <b>{totalAmount.toFixed(2)} €</b>
            </p>
            <div></div>
          </div>
        </div>
      </div>
    )

  } else {
    return (
      <div className='cart-empty'>
        <div className='cart__component--message'>
          <div>Todavía no has añadido nada</div>
        </div>

        <div className='cart__button-go-back'>
          <button onClick={() => window.history.back()}>
            Volver
          </button>
        </div>
      </div>
    )
  }
}

function CartRender({ item, cart, setCart }) {
  const [product, setProduct] = useState(undefined);
  const [image] = useGetProductImage(product);
  const [showQuantityButton, setQuantityButton] = useState(false);
  const token = useGetAccessTokenApi();
  const [quantityInput, setQuantityInput] = useState(0);

  useEffect(() => {
    getProductByIdApi(item.productId)
      .then(res => {
        setProduct(res.product);
      });
  }, [item])

  useEffect(() => {
    item.quantity && setQuantityInput(item.quantity)
  }, [item]);

  const handleDeleteProduct = () => {
    deleteCartItemApi(token, item._id)
      .then(res => {
        let newCart = [...cart];
        newCart.forEach((data, key) => {
          if (data._id === item._id) {
            newCart.splice(key, 1)
          }
        })
        setCart(newCart)
        toaster(res.message, 'success');
      })
      .catch(err => {
        toaster(err.message, 'error');
      })
  }

  const handleQuantity = (e) => {
    setQuantityInput(e.target.value)
  }

  const handleUpdateQuantity = async (e) => {
    e.preventDefault();

    if (e.target.quantity.value < 0) {
      setQuantityInput(item.quantity)
      return toaster('Introduce un número positivo', 'error');
    }

    await updateCartItemQuantityApi(token, item._id, { quantity: Math.round(e.target.quantity.value) })
      .then(res => {
        let newCart = [...cart];
        newCart.forEach((data, key) => {
          if (data._id === item._id) {
            if (res.status === 200) {
              newCart[key].quantity = e.target.quantity.value;
            }
            if (res.status === 201) {
              newCart.splice(key, 1);
            }
          }
        })
        setCart(newCart);
        toaster(res.message, 'success');
        setQuantityButton(false);
      })
      .catch(err => {
        toaster(err.message, 'error');
      })
  }

  const handleShowQuantityInput = () => {
    setQuantityButton(true);
  }


  return (
    <div className='cart__component--item'>
      <div className='cart__component--item__product'>
        <div className='cart__component--item__product--image'>
          <img src={(product?.images.length === 0) ? randomProductImage() : image} alt={product?.title} />
        </div>
        <div className='cart__component--item__product--info'>
          <div className='cart__component--item__product--info__title-price'>
            <h4>{product?.title}</h4>
            <div>{(product?.sizeAndPrice[0].price) * quantityInput} €</div>
          </div>
          <div className={`cart__component--item__product--info__stock--${product?.stock === 0 ? 'dont-have-stock' : 'have-stock'}`}>
            {product?.stock === 0 ? 'Sin stock' : 'En stock'}
          </div>
          <div className='cart__component--item__product--info__size'><b>Tamaño:</b> {product?.sizeAndPrice[0].size}</div>
          <div></div>
          <div className='cart__component--item__product--info__color'><b>Color:</b> {product?.info.color}</div>
          <div className='cart__component--item__product--info__bottom-group'>
            <form onSubmit={(e) => handleUpdateQuantity(e)}>
              <label htmlFor='quantity'>
                Cantidad:
                <input
                  type='number'
                  name='quantity'
                  value={quantityInput}
                  onChange={(e) => handleQuantity(e)}
                  onClick={handleShowQuantityInput}
                />
              </label>
              {showQuantityButton && (
                <button type='submit'>Actualizar</button>
              )}
            </form>
            <button onClick={handleDeleteProduct}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}