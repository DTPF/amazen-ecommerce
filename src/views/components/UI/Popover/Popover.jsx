import React from 'react';
import './popover.scss';

export default function Popover({ children, setIsVisible }) {

  return (
    <div className='popover-container'>
      <div
        className="popover-container__popover"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
    </div>
  );
}