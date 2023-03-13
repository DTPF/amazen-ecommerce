import React, { useState } from 'react';
import useProductContext from '../../../../hooks/useProductContext';
import { deleteProductApi } from '../../../../api/products';
import { useGetAccessTokenApi } from '../../../../api/auth';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import moment from 'moment';
import 'moment/locale/es';
import toaster from '../../UI/toast/toast';
import Swal from 'sweetalert2';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import './productAdminComponent.scss';

export default function ProductAdminComponent() {
  const { products, setProducts } = useProductContext();
  const [isVisibleAddModal, setIsVisibleAddModal] = useState(false);
  const [isVisibleEditModal, setIsVisibleEditModal] = useState(false);
  const [choosedProduct, setChoosedProduct] = useState({});

  return (
    <div className='product-admin-component'>
      <div className='product-admin-component__new-product-btn'>
        <button onClick={() => setIsVisibleAddModal(true)}>Nuevo articulo</button>
        {isVisibleAddModal &&
          <AddProduct product={null} setIsVisibleAddModal={setIsVisibleAddModal} />
        }
      </div>
      <div className='product-admin-component__product-container'>
        {products && products.map((product, key) => (
          <Product
            key={key}
            product={product}
            products={products}
            setProducts={setProducts}
            setIsVisibleEditModal={setIsVisibleEditModal}
            setChoosedProduct={setChoosedProduct}
          />
        ))}
      </div>
      {isVisibleEditModal &&
        <EditProduct product={choosedProduct} setIsVisibleEditModal={setIsVisibleEditModal} />
      }
    </div>
  )
}

function Product({ product, products, setProducts, setIsVisibleEditModal, setChoosedProduct }) {
  const token = useGetAccessTokenApi();

  const handleDeleteProduct = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "!Esta acción no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(0, 121, 0)',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, ¡Bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductApi(token, product._id)
          .then(res => {
            let newProducts = [...products];
            newProducts.forEach((data, key) => {
              if (data._id === product._id) {
                newProducts.splice(key, 1)
              }
            })
            setProducts(newProducts);
            toaster(res.message, 'success');
          })
      }
    })
  }

  const handleEditBtn = () => {
    setIsVisibleEditModal(true);
    setChoosedProduct(product);
  }

  return (
    <article className='product-admin-component__product-container--product'>
      <div className='product-admin-component__product-container--product--row1'>
        <div>
          <div className='product-admin-component__product-container--product--row1__title'>
            {product?.title}
          </div>
          <div className='product-admin-component__product-container--product--row1__date'>
            {product?.createdAt === product?.updatedAt ? 'Creado:' : 'Actualizado:'}
            <span> {moment(product?.updatedAt).fromNow()}</span>
          </div>
        </div>
      </div>

      <div className='product-admin-component__product-container--row2'>
        <button onClick={() => handleEditBtn()} className='product-admin-component__product-container--product--row2__edit-product-btn'>
          <AiOutlineEdit />
        </button>
        <button onClick={handleDeleteProduct} className='product-admin-component__product-container--product--row2__delete-product-btn'>
          <AiOutlineDelete />
        </button>
      </div>
    </article>
  )
}