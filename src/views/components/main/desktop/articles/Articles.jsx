import React, { useContext } from 'react';
import useUserContext from '../../../../../hooks/users/useUserContext';
import { CartContext } from '../../../../../providers/CartProvider';
import useGetArticles from '../../../../../indexedDB/api/articles/useGetArticles';
import fiveStarsImage from '../../../../../assets/images/five-stars.png';
import { CgShoppingCart } from 'react-icons/cg';
import './Articles.scss';

export default function Articles() {
  const articles = useGetArticles();

  return (
    <div className='articles-container'>
      <div className='articles-container__articles'>
        {articles.articlesIndexed && articles.articlesIndexed.map((article, index) => (
          <ArticleSlide
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

function ArticleSlide(props) {
  const { id, title, image, stars, price } = props;
  const { userContext } = useUserContext();
  const { setCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (userContext) {
      const oldCart = localStorage.getItem('cart');

      if (!oldCart) {
        const article = [
          {
            id: 0,
            userId: userContext.id,
            articleId: id
          }
        ]
        localStorage.setItem('cart', JSON.stringify(article));
        setCart(article);
      } else {
        const parseOldCart = JSON.parse(oldCart);
        const article = {
          id: parseOldCart.length,
          userId: userContext.id,
          articleId: id
        }
        let newCart = [...parseOldCart, article];
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
    }
  }

  return (
    <div className='articles-container__articles__article'>
      <img className='articles-container__articles__article--image' src={image} alt={title} />
      <h3 className='articles-container__articles__article--title'>{title}</h3>
      <p className='articles-container__articles__article--stars'>
        <img src={fiveStarsImage} alt='Five stars' />
        {stars}
      </p>
      <p className='articles-container__articles__article--price'>{price} €</p>
      {userContext && (
        <div className='articles-container__articles__article--add-to-cart'>
          <button onClick={() => handleAddToCart()}><CgShoppingCart /></button>
        </div>
      )}
    </div>
  )
}