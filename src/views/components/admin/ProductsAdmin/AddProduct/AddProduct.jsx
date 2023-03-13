import React from 'react';
import ProductForm from '../ProductForm';
import '../addEditProductModal.scss';

export default function AddProduct({ product, setIsVisibleAddModal }) {
  return (
    <div id="myModal" className="modal">
      <div className="modal__modal-content">
        <span onClick={() => setIsVisibleAddModal(false)} className="modal__modal-content--close">&times;</span>
        <h3>Añadir un nuevo producto</h3>
        <ProductForm product={product} setIsVisibleAddModal={setIsVisibleAddModal} />
      </div>
    </div>
  )
}