import { useState } from 'react';
import './App.css';
import Options from './Options';

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
        <Options isOpen={isOpen} />
      </header>
    </div>
  );
}

export default App;
