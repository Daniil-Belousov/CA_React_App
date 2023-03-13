import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello CA!
        </p>
        {!isOpen ? <button className='menuBtn' onClick={() => setOpen(!isOpen)}>Menu</button> 
        : <button style={{color: 'red'}} className='menuBtn' onClick={() => setOpen(!isOpen)}>Close</button>}
        <div className='list' style={!isOpen ? {visibility: 'hidden'} : {visibility: 'visible'}}>
          <div className='item'>Личный кабинет</div>
          <div className='item'>Настройки</div>
          <div className='item'>Адрес</div>
          <div className='item'>Контакты</div>
          <div className='item'>О нас</div>
        </div>
      </header>
    </div>
  );
}

export default App;
