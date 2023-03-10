import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello CA!
        </p>
        <button onClick={() => setIsOpenModal(true)}>Открыть модалку</button>
      </header>
      <body>
          <Modal close={() => setIsOpenModal(false)} isOpen={isOpenModal} ChildComponent={<div>Контент для модального окна</div>}/>
      </body>
    </div>
  );
}

export default App;
