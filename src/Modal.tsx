import { ReactElement, ReactNode } from 'react';
import './App.css';

interface ModalI {
  ChildComponent: ReactNode;
  close: () => void;
}

const Modal = ({ ChildComponent, close } : ModalI): ReactElement => {
  return (
    <div className="modal">
      {ChildComponent}
    <button onClick={() => close()}>Закрыть модалку</button>
    </div>
  )
}

export default Modal