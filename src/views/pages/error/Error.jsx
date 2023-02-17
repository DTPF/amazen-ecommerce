import React from 'react';
import { Button, Result } from 'antd';
import './Error.scss';

export default function Error() {
  return (
    <div className='error'>
      <Result
        status="404"
        title="404"
        subTitle="Lo sentimos, la página que buscas no existe."
        extra={
          <Button type="primary" onClick={() => window.history.back()}>
            Volver
          </Button>
        }
      />
    </div>

  );
}