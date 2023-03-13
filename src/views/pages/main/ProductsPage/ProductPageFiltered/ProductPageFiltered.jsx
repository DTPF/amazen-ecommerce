import React from 'react';
import useSearchProducts from '../../../../../hooks/useSearchProducts';
import Products from '../../../../components/main/Products';
import HelmetSEO from "../../../../utils/HelmetSEO/HelmetSEO";

export default function ProductPageFiltered() {
  const [query] = useSearchProducts();

  const title = () => {
    switch (query) {
      case 'travel':
        return 'Productos para viaje';

      case 'book':
        return 'Libros y revistas';

      case 'technology':
        return 'Lo mejor en tecnología';

      default:
        return 'Los mejores productos';
    }
  }
  return (
    <HelmetSEO title={`Amazén | ${title()}`}>
      <Products query={query} title={title} />
    </HelmetSEO>
  );
}