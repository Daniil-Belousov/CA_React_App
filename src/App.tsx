import { useEffect, useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpenModal(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    
  }, []);

  return (
    <div className="App">
      <header className="App-header" onClick={() => isOpenModal && setIsOpenModal(false)}>
        <p>
          Hello CA!
        </p>
        <button onClick={() => setIsOpenModal(true)}>Открыть модалку</button>
      </header>
      <body>
        {isOpenModal &&
          <Modal close={() => setIsOpenModal(false)} ChildComponent={<div>Контент для модального окна</div>}/>
        }
      </body>
    </div>
  );
}

export default App;
