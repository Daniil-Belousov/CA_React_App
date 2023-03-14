import { ReactElement, ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './App.css';

interface ModalI {
  ChildComponent: ReactNode;
  close: () => void;
  isOpen: boolean;
  Container: Element
}

const Modal = ({ ChildComponent, close, isOpen, Container } : ModalI): ReactElement | null => {
  // const ModalContainer = useMemo(() => document.getElementById('modal'), [])

  if(!isOpen) return null;
  
    return createPortal (
      <div className="modal">
        {ChildComponent}
      <button onClick={() => close()}>Закрыть модалку</button>
      </div>, Container
    ) 
}

export default Modal