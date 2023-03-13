import { ReactElement, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './App.css';

interface ModalI {
  isOpen: boolean;
}

const Options = ({ isOpen } : ModalI): ReactElement | null => {
  const OptionsContainer = useMemo(() => document.getElementById('optionsContainer'), [])

  if(!isOpen) return null;
  
    return createPortal (
      <div className='list' style={!isOpen ? {visibility: 'hidden'} : {visibility: 'visible'}}>
        <div className='item'>Личный кабинет</div>
        <div className='item'>Настройки</div>
        <div className='item'>Адрес</div>
        <div className='item'>Контакты</div>
        <div className='item'>О нас</div>
      </div>, 
      OptionsContainer as Element
    ) 
}

export default Options