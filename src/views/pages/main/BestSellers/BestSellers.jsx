import React from 'react';
import Articles from '../../../components/main/desktop/Articles';
import HelmetSEO from "../../../utils/HelmetSEO/HelmetSEO";
import './BestSellers.scss';

export default function BestSellers() {
  return (
    <HelmetSEO title={'Amazén | Éxito de ventas'}>
      <div className='best-sellers'>
        <h1>Éxito de ventas</h1>
        <Articles />
      </div>
    </HelmetSEO>
  );
}