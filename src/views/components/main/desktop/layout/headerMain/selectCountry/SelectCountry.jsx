import React, { useState } from 'react';
import selectCountryImage from '../../../../../../../assets/images/select_country.png';
import Modal from "../../../../../../components/main/UI/modal";
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import './SelectCountry.scss';


export default function SelectCountry() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <>
      {isVisibleModal && (
        <Modal
          title={'Elige tu ubicación'}
          isVisible={isVisibleModal}
          setIsVisible={setIsVisibleModal}
          className={'select-country__modal'}
        >
          <p>Selecciona una dirección de envío para ver las opciones de envío</p>
          <button>Inicia sesión para ver tus direcciones</button>
          <div className='select-country__modal--post-code'>
            <TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid />
            <p>o intruduce un código postal de España</p>
            <TfiLayoutLineSolid /><TfiLayoutLineSolid /><TfiLayoutLineSolid />
          </div>
        </Modal>
      )}
      <div onClick={() => setIsVisibleModal(!isVisibleModal)} className='select-country'>
        <img src={selectCountryImage} alt='Select Country' />
      </div>
    </>
  )
}

