import './App.css';
import Gallery from './components/Gallery/Gallery';
import images from './images/images';

function App() {
  return (
    <div className="App">
      <main className="App-header">
          <Gallery images={images} itemsPerPage={9}/>
      </main>
    </div>
  );
}

export default App;
