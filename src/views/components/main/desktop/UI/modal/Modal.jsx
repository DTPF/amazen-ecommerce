import React from 'react';
import { Modal as ModalAnt } from 'antd';

export default function Modal(props) {
  const { children, title, isVisible, setIsVisible, className } = props;

  return (
    <ModalAnt
      title={title}
      centered
      open={isVisible}
      onCancel={() => setIsVisible(false)}
      footer={false}
      className={className}
    >
      {children}
    </ModalAnt>
  );
}