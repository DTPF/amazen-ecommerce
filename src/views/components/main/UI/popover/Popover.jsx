import React from 'react';
import './Popover.scss';

export default function Popover({ children, setIsVisible }) {

  return (
    <div
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="popover"
    >
      {children}
    </div>
  );
}