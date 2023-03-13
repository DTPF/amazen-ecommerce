import React from 'react';
import HelmetSEO from "../../../utils/HelmetSEO/HelmetSEO";
import { Result } from 'antd';
import './error.scss';

export default function Error() {
  return (
    <HelmetSEO title={'Amazén | Error'}>
      <div className='error'>
        <Result
          status="404"
          title="404"
          subTitle="Lo sentimos, la página que buscas no existe."
          extra={
            <button onClick={() => window.history.back()}>
              Volver
            </button>
          }
        />
      </div>
    </HelmetSEO>
  );
}