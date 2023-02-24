import React from 'react';
import validationWarningIcon from '../../../../../assets/images/validation-warning-icon.png';
import './ValidationMessage.scss';

export default function ValidationMessage({ message }) {
    return (
    <div className='validation-message'>
      <img className='validation-message--image' src={validationWarningIcon} alt='Warning icon' />
      <div className='validation-message--message-div'>
        <p className='validation-message--message-div--title'>
          Ha surgido un problema
        </p>
        <p className='validation-message--message-div--content'>
          {message}
        </p>
      </div>
    </div>
  )
}
