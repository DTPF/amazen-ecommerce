import React from 'react';
import useCartContext from '../../../../hooks/useCartContext';
import useProductContext from '../../../../hooks/useProductContext';
import useAuth from '../../../../hooks/useAuthContext';
import { useGetAccessTokenApi } from '../../../../api/auth';
import { addToCart } from '../../../../api/cart';
import { basePath, apiVersion } from '../../../../api/utils/config';
import toaster from '../../UI/toast/toast';
import randomProductImage from './randomProductImage';
import fiveStarsImage from '../../../../assets/images/five-stars.png';
import { CgShoppingCart } from 'react-icons/cg';
import './products.scss';

export default function Products( { query, title }) {
  const { products } = useProductContext();

  return (
    <div className='products-container'>
      <h1>{title()}</h1>
      <div className='products-container__products'>
        {products && products
          .filter(({ title, category, info }) => {
            if (!query) {
              return true
            }
            else {
              const nameLowerCase = title.toLowerCase();
              const categoryLowerCase = category.toLowerCase();
              const colorLowerCase = info.color.toLowerCase();

              return (
                nameLowerCase.includes(query.toLowerCase()) ||
                categoryLowerCase.includes(query.toLowerCase()) ||
                colorLowerCase.includes(query.toLowerCase())
              )
            }
          })
          .map((product, index) => {
            return (
              <ProductsRender
                key={index}
                product={product}
              />
            )
          })}
      </div>
    </div>
  );
}

function ProductsRender({ product }) {
  const { _id, title, stars, sizeAndPrice, images, defaultImage, waitShippingTime } = product;
  const { user } = useAuth();
  const { userData } = user;
  const { cart, setCart } = useCartContext();
  const image = `${basePath}/${apiVersion}/get-product-image/${images[defaultImage - 1]}`;
  const token = useGetAccessTokenApi();

  const handleAddToCart = async () => {
    const productObj = {
      userId: userData.id,
      productId: _id,
      price: sizeAndPrice[0].price,
      shippingDate: waitShippingTime
    }

    await addToCart(token, productObj)
      .then(product => {
        if (product.status === 200) {
          let list = [...cart];
          let isRepeated = false;

          list.forEach((item, key) => {
            if (item.productId === _id) {
              list[key].quantity = product.quantity;
              isRepeated = true;
              return;
            }
          })

          isRepeated ? setCart(list) : setCart([...cart, product.cartItem]);
          toaster(product.message, 'success');
        } else {
          toaster(product.message, 'error');
        }
      })
      .catch(err => {
        toaster(err.message, 'error');
      });
  }

  return (
    <div className='products-container__products__article'>
      <div className='products-container__products__article--image'>
        <img src={image ? image : randomProductImage()} alt={title} />
      </div>
      <div>

        <h3 className='products-container__products__article--title'>{title}...</h3>
        <p className='products-container__products__article--stars'>
          <img src={fiveStarsImage} alt='Five stars' />
          {stars}
        </p>
        <p className='products-container__products__article--price'>{sizeAndPrice[0].price} €</p>
        {userData && (
          <div className='products-container__products__article--add-to-cart'>
            <button onClick={() => handleAddToCart()}><CgShoppingCart /></button>
          </div>
        )}
      </div>
    </div>
  )
}