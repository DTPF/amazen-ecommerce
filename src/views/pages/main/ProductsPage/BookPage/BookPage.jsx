import React from 'react';
import Products from '../../../../components/main/Products';
import HelmetSEO from "../../../../utils/HelmetSEO/HelmetSEO";
import './BookPage.scss';

export default function BookPage() {
  return (
    <HelmetSEO title={'Amazén | Libros'}>
      <div className='book-page'>
        <h1>Libros y revistas</h1>
        <Products category={'book'} />
      </div>
    </HelmetSEO>
  );
}