import React from 'react';
import validationWarningIcon from '../../../../../assets/images/validation-warning-icon.png';
import './validationMessage.scss';

export default function ValidationMessage({ valtidationMsg }) {
  return (
    <div className='validation-message'>
      <img className='validation-message--image' src={validationWarningIcon} alt='Warning icon' />
      <div className='validation-message--message-div'>
        <p className='validation-message--message-div--title'>
          Ha surgido un problema
        </p>
        <p className='validation-message--message-div--content'>
          {valtidationMsg}
        </p>
      </div>
    </div>
  )
}