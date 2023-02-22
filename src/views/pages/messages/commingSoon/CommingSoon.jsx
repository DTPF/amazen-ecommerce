import React from 'react';
import { Result } from 'antd';
import commingSoonImage from '../../../../assets/images/comming-soon.png';
import './CommingSoon.scss';

export default function CommingSoon() {
  return (
    <div className='comming-soon'>
      <Result
        icon={<img src={commingSoonImage} alt='Comming soon' />}
        extra={
          <button onClick={() => window.history.back()}>
            Volver
          </button>
        }
      />
    </div>
  );
}