import React, { useContext } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { CartContext } from '../../../../providers/CartProvider';
import { addToCart } from '../../../../api/cart';
import useGetArticles from '../../../../indexedDB/api/articles/useGetArticles';
import toaster from '../../UI/toast/toast';
import fiveStarsImage from '../../../../assets/images/five-stars.png';
import { CgShoppingCart } from 'react-icons/cg';
import './Products.scss';


export default function Products() {
  const products = useGetArticles();

  return (
    <div className='products-container'>
      <div className='products-container__products'>
        {products.articlesIndexed && products.articlesIndexed.map((article, index) => (
          <ProductsRender
            key={index}
            id={article.id}
            title={article.title}
            image={article.image}
            stars={article.stars}
            price={article.price}
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

  const handleAddToCart = () => {
    const productObj = {
      userId: userData.id,
      productId: id
    }

    addToCart(productObj)
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