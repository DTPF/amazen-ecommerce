import React from 'react';
import ProductForm from '../ProductForm';
import '../AddEditProductModal.scss';

export default function EditProduct({ product, setIsVisibleEditModal }) {
  return (
    <div id="myModal" className="modal">
      <div className="modal__modal-content">
        <span onClick={() => setIsVisibleEditModal(false)} className="modal__modal-content--close">&times;</span>
        <h3>Editar producto</h3>
        <ProductForm product={product} setIsVisibleEditModal={setIsVisibleEditModal} />
      </div>
    </div>
  )
}