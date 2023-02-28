import React, { useEffect, useState } from 'react';
import { useWishlistContext } from '../../../../providers/WishlistProvider';
import deleteWishItemById from '../../../../indexedDB/api/wishlist/deleteItemByIdIDB';
import { DB_NAME_AMAZEN, DB_VERSION, WISHLIST } from '../../../../indexedDB/config';
import { FiExternalLink, FiTrash2 } from 'react-icons/fi';
import './WishlistItem.scss'

export default function WishlistItem({ wishlistItem, status }) {
  const { wishlist, setWishlist } = useWishlistContext();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(wishlistItem.status === 'completed' ? true : false)
  }, [wishlistItem])

  const handleOnChange = () => {
    let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

    openRequest.onsuccess = async function (e) {
      let db = e.target.result;
      let transaction = db.transaction([WISHLIST], "readwrite");
      let listItem = transaction.objectStore(WISHLIST);
      let request = listItem.get(wishlistItem.id);

      request.onsuccess = function (e) {
        let result = request.result;

        if (result.status === 'completed') {
          result.status = 'active';
          listItem.put(result);
          let newWishlist = [...wishlist]
          wishlist && wishlist.forEach((item, key) => {
            if (item.id === result.id) {
              newWishlist[key].status = 'active';
            }
          })
          setWishlist(newWishlist);
          setIsChecked(!isChecked);
          removeDOMItem(status, wishlist, setWishlist, result);
          return;
        }

        if (result.status === 'active') {
          result.status = 'completed';
          listItem.put(result);
          let newWishlist = [...wishlist]
          wishlist && wishlist.forEach((item, key) => {
            if (item.id === result.id) {
              newWishlist[key].status = 'completed';
            }
          })
          setWishlist(newWishlist);
          setIsChecked(!isChecked);
          removeDOMItem(status, wishlist, setWishlist, result);
          return;
        }
      };

      request.onerror = function () {
        console.log('error');
      };
    }

    openRequest.onerror = function () {
      console.log('Server error');
    }

  };

  const handleDeleteItem = (id) => {
    deleteWishItemById(id).then(() => {
      let list = [...wishlist];
      list.forEach((item, key) => {
        if (item.id === wishlistItem.id) {
          list.splice(key, 1);
        }
      })
      setWishlist(list);
    });
  }

  const title = () => {
    const length = 40;
    if (wishlistItem.title.length > length) {
      return `${wishlistItem.title.substring(0, length)}...`;
    } else {
      return wishlistItem.title;
    }
  }

  return (
    <div className={`wishlist-item ${isChecked ? 'wishlist-item-checked' : ''}`} id={wishlistItem.id}>
      <div className='wishlist-item__title'>
        <div className='wishlist-item__title--link'>
          {wishlistItem.link && <a href={wishlistItem.link}><FiExternalLink /></a>}
        </div>
        <span>{title()}</span>
      </div>
      <div className='wishlist-item__check-delete'>
        <span className='wishlist-item__check-delete--trash' onClick={() => handleDeleteItem(wishlistItem.id)}><FiTrash2 /></span>
        <div className='wishlist-item__check-delete--checkbox'>
          <label>
            <input type="checkbox" onChange={() => handleOnChange()} checked={isChecked} />
            <span></span>
          </label>
        </div>
      </div>
    </div>
  )
}

function removeDOMItem(status, wishlist, setWishlist, result) {
  if (status !== '') {
    let list = [...wishlist];
    list.forEach((item, key) => {
      if (item.id === result.id) {
        list.splice(key, 1);
      }
    })
    setWishlist(list);
  }
}