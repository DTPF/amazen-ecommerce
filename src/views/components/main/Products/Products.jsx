import React, { useContext } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { useGetAccessTokenApi } from '../../../../api/auth';
import { CartContext } from '../../../../context/Cart/CartContext';
import useProduct from '../../../../hooks/useProduct';
import { addToCart } from '../../../../api/cart';
import toaster from '../../UI/toast/toast';
import randomAvatar from './ramdomProductImage';
import fiveStarsImage from '../../../../assets/images/five-stars.png';
import { CgShoppingCart } from 'react-icons/cg';
import './Products.scss';


export default function Products() {
  const { products } = useProduct();

  return (
    <div className='products-container'>
      <div className='products-container__products'>
        {products && products.map((product, index) => (
          <ProductsRender
            key={index}
            id={product._id}
            title={product.title}
            image={product.image ? product.image : randomAvatar()}
            stars={product.stars}
            price={product.sizeAndPrice[0].price}
          />
        ))}
      </div>
    </div>
  );
}

function ProductsRender(props) {
  const { id, title, image, stars, price } = props;
  const { user } = useAuth();
  const { userData } = user;
  const { cart, setCart } = useContext(CartContext);
  const token = useGetAccessTokenApi();

  const handleAddToCart = async () => {
    const productObj = {
      userId: userData.id,
      productId: id
    }

    await addToCart(token, productObj)
      .then(product => {
        if (product.status === 200) {
          let list = [...cart];
          let isRepeated = false;

          list.forEach((item, key) => {
            if (item.productId === id.toString()) {
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
      <img className='products-container__products__article--image' src={image} alt={title} />
      <h3 className='products-container__products__article--title'>{title}</h3>
      <p className='products-container__products__article--stars'>
        <img src={fiveStarsImage} alt='Five stars' />
        {stars}
      </p>
      <p className='products-container__products__article--price'>{price} €</p>
      {userData && (
        <div className='products-container__products__article--add-to-cart'>
          <button onClick={() => handleAddToCart()}><CgShoppingCart /></button>
        </div>
      )}
    </div>
  )
}