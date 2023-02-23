import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function HelmetSEO(props) {
  const { title, children } = props;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </HelmetProvider>
  );
}