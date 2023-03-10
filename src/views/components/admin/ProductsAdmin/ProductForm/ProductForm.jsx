import React, { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone'
import { useGetAccessTokenApi } from '../../../../../api/auth';
import useGetProductImage from '../../../../../hooks/useProduct/useGetProductImage';
import { addProductApi, uploadProductImageApi, updateProductApi, deleteProductImageApi } from '../../../../../api/products';
import useProductContext from '../../../../../hooks/useProductContext';
import toaster from '../../../UI/toast/toast';
import Swal from 'sweetalert2';
import './ProductForm.scss';

export default function ProductForm({ product, setIsVisibleAddModal, setIsVisibleEditModal }) {
  const [inputs, setInputs] = useState({
    title: '',
    info: {
      brand: '',
      color: ''
    },
    sizeAndPrice: [{
      size: '',
      price: 0
    }],
    stock: 0,
    stars: 0,
    images: [],
    waitShippingTime: 0,
    category: '',
    defaultImage: 1
  })
  const token = useGetAccessTokenApi();
  const { products, setProducts } = useProductContext();

  useEffect(() => {
    product && setInputs(product);
  }, [product])

  const handleInputs = (e, key) => {
    const { value, name } = e.target;
    if (product && (name === `size${key}`)) {
      let newObj = [...inputs.sizeAndPrice];
      newObj[key].size = value;
      return setInputs({ ...inputs, sizeAndPrice: newObj })
    }
    if (product && (name === `price${key}`)) {
      let newObj = [...inputs.sizeAndPrice];
      newObj[key].price = value;
      return setInputs({ ...inputs, sizeAndPrice: newObj })
    }
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.title) return toaster('El título es obligatorio', 'error');

    if (product) {
      updateProductApi(token, product._id, inputs)
        .then(res => {
          toaster(res.message, 'success');
          let newProduct = [...products];
          newProduct.forEach((data, key) => {
            if (data._id === product._id) {
              newProduct[key] = res.product;
            }
          })
          setProducts(newProduct);
          setIsVisibleEditModal(false);
        })
    } else {
      addProductApi(token, inputs)
        .then(res => {
          setProducts([...products, res.product])
          toaster(res.message, 'success');
          setIsVisibleAddModal(false);
        })
        .catch(err => {
          toaster(err.message, 'error');
        })
    }
  }

  const handleOnChangeImageForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const onDrop = useCallback(async acceptedFiles => {
    acceptedFiles[0] && await uploadProductImageApi(token, product._id, acceptedFiles[0])
      .then(res => {
        let newProduct = [...products];
        newProduct.forEach((data, key) => {
          if (data._id === product._id) {
            newProduct[key] = res.product;
          }
        })
        setProducts(newProduct);
        toaster(res.message, 'success');
      })
      .catch(err => {
        toaster(err.message, 'success');
      })
  }, [product, products, setProducts, token])

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className='product-form'>
      {product && (
        <div className='product-form__images'>
          {/* {product?.images.length > 0 && ( */}
            <div className='product-form__images--container'>
              {products && products.map((item, key) => {
                if (item._id === product._id) {
                  return products[key].images.map((img, key) => (
                    <Images
                      key={key}
                      imageName={img}
                      product={product}
                      token={token}
                      products={products}
                      setProducts={setProducts}
                    />
                  ))
                }
                return null;
              })}
            </div>
          <section className='product-form__images--dropzone-container'>
            <div {...getRootProps({ className: 'product-form__images--dropzone-container__input' })}>
              <input {...getInputProps()} />
              <p>Arrasta y suelta aqui las images que quieras, o haz click para seleccionar</p>
            </div>
          </section>
          <section className='product-form__images--dropzone-container__default-image'>
            <label htmlFor='defaultImage'>
              Imagen por defecto:
              <input
                type='number'
                name='defaultImage'
                value={inputs?.defaultImage}
                onChange={(e) => handleOnChangeImageForm(e)}
              />
            </label>
          </section>
        </div>
      )}

      <form className='product-form__form' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='title'>
          Título
          <input
            type='text'
            name='title'
            value={inputs?.title}
            onChange={(e) => handleInputs(e)}
          />
        </label>

        <label htmlFor='brand'>
          Marca
          <input
            type='text'
            name='brand'
            value={inputs?.info?.brand}
            onChange={(e) => setInputs({
              ...inputs,
              info: {
                brand: e.target.value,
                color: inputs?.info?.color
              }
            })}
          />
        </label>

        <label htmlFor='color'>
          Color
          <input
            type='text'
            name='color'
            value={inputs?.info?.color}
            onChange={(e) => setInputs({
              ...inputs,
              info: {
                brand: inputs?.info?.brand,
                color: e.target.value
              }
            })}
          />
        </label>

        <div className='product-form__form--size-price'>
          {product ? (
            product.sizeAndPrice.map((data, key) => (
              <div key={key} className='product-form__form--size-price__row1'>
                <label htmlFor={`size${key}`}>
                  Talla
                  <input
                    type='text'
                    name={`size${key}`}
                    value={inputs.sizeAndPrice[key]?.size ? inputs.sizeAndPrice[key].size : ''}
                    onChange={(e) => handleInputs(e, key)}
                  />
                </label>

                <label htmlFor={`price${key}`}>
                  Precio
                  <input
                    type='number'
                    name={`price${key}`}
                    value={inputs.sizeAndPrice[key]?.price ? inputs.sizeAndPrice[key].price : ''}
                    onChange={(e) => handleInputs(e, key)}
                  />
                </label>
              </div>
            ))
          ) : (
            <div className='product-form__form--size-price__row2'>
              <label htmlFor='size'>
                Talla
                <input
                  type='text'
                  name='size'
                  value={inputs?.sizeAndPrice?.size ? inputs?.sizeAndPrice.size : ''}
                  onChange={(e) => setInputs({
                    ...inputs,
                    sizeAndPrice: {
                      size: e.target.value,
                      price: inputs?.sizeAndPrice?.price
                    }
                  })}
                />
              </label>

              <label htmlFor='price' className='product-form__form--size-price__row2--price'>
                Precio
                <input
                  type='number'
                  name='price'
                  value={inputs?.sizeAndPrice?.price ? inputs?.sizeAndPrice?.price : ''}
                  onChange={(e) => setInputs({
                    ...inputs,
                    sizeAndPrice: {
                      size: inputs?.sizeAndPrice?.size,
                      price: e.target.value
                    }
                  })}
                />
              </label>
            </ div>
          )}
        </div>

        <div className='product-form__form--stock-stars'>
          <label htmlFor='stock'>
            Stock
            <input
              type='number'
              name='stock'
              value={inputs?.stock ? inputs?.stock : ''}
              onChange={(e) => handleInputs(e)}
            />
          </label>

          <label htmlFor='stars'>
            Stars
            <input
              type='number'
              name='stars'
              value={inputs?.stars}
              onChange={(e) => handleInputs(e)}
            />
          </label>
        </div>

        <label htmlFor='waitShippingTime'>
          Espera para envío (dias)
          <input
            type='number'
            name='waitShippingTime'
            value={inputs?.waitShippingTime}
            onChange={(e) => handleInputs(e)}
          />
        </label>

        <label htmlFor='category'>
          Categoría
          <input
            type='text'
            name='category'
            value={inputs?.category}
            onChange={(e) => handleInputs(e)}
          />
        </label>

        <div className='product-form__form--buttons'>
          <input type='submit' value='Guardar' />
        </div>
      </form>
    </div>
  )
}

function Images({ imageName, product, token, products, setProducts }) {
  const [image] = useGetProductImage(imageName);

  const handleDeleteImage = () => {
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
        deleteProductImageApi(token, product._id, { imageName: imageName })
          .then(res => {
            if (res.status === 200) {
              let newProduct = [...products];
              newProduct.forEach((data, key) => {
                if (data._id === product._id) {
                  newProduct[key] = res.product;
                }
              })
              setProducts(newProduct);
              toaster(res.message, 'success');
            }
          })
      }
    })
  }

  return <img onClick={() => handleDeleteImage()} src={image ? image : ''} alt={'Product'} />
}