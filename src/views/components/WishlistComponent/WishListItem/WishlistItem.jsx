import React, { useEffect, useState } from 'react';
import { useWishlistContext } from '../../../../providers/WishlistProvider';
import deleteWishItemById from '../../../../indexedDB/api/wishlist/deleteItemByIdIDB';
import { DB_NAME_AMAZEN, DB_VERSION, WISHLIST } from '../../../../indexedDB/config';
import { FiExternalLink, FiTrash2 } from 'react-icons/fi';
import { EMAIL } from '../../../../providers/WishlistProvider';
import './WishlistItem.scss'

export default function WishlistItem({ wishlistItem, status }) {
  const { wishlist, setWishlist } = useWishlistContext();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(wishlistItem.status === 'completed' ? true : false)
  }, [wishlistItem])

  const handleOnChangeCheckbox = () => {
    let openRequest = indexedDB.open(DB_NAME_AMAZEN, DB_VERSION);

    openRequest.onsuccess = function (e) {
      let db = e.target.result;
      let transaction = db.transaction([WISHLIST], "readwrite");
      let listItem = transaction.objectStore(WISHLIST);
      let request = listItem.getAll();

      request.onsuccess = function () {
        let result = request.result;
        let newResult = [];

        result.forEach((item) => {
          if (item.userId === EMAIL) {
            newResult.push(item);
          }
        });

        if (newResult) {
          newResult.forEach((item) => {
            if (item.id === wishlistItem.id) {
              if (item.status === 'completed') {
                item.status = 'active';
                listItem.put(item);
                newResult && newResult.forEach((item, key) => {
                  if (item.id === wishlistItem.id) {
                    newResult[key].status = 'active';
                    setWishlist(newResult);
                    removeDOMItem(status, wishlist, setWishlist, item);
                    setIsChecked(!isChecked);
                  }
                })
                return;
              }

              if (item.status === 'active') {
                item.status = 'completed';
                listItem.put(item);
                newResult && newResult.forEach((item, key) => {
                  if (item.id === wishlistItem.id) {
                    newResult[key].status = 'completed';
                    setWishlist(newResult);
                    removeDOMItem(status, wishlist, setWishlist, item);
                    setIsChecked(!isChecked);
                  }
                })
                return;
              }
            }
          })
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
    const length = 36;
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
            <input type="checkbox" onChange={() => handleOnChangeCheckbox()} checked={wishlistItem.status === 'completed' ? true : false} />
            <span></span>
          </label>
        </div>
      </div>
    </div>
  )
}

function removeDOMItem(status, wishlist, setWishlist, wishlistItem) {
  if (status !== '') {
    let list = [...wishlist];
    list.forEach((item, key) => {
      if (item.id === wishlistItem.id) {
        list.splice(key, 1);
      }
    })
    setWishlist(list);
  }
}