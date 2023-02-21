import React from 'react';
import './Popover.scss';

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