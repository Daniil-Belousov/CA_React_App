import './App.css';
import withLoadingIndicator from './components/withLoadingIndicator';
import WrappedComponent from './components/WrappedComponent';

function App() {
const result = withLoadingIndicator(WrappedComponent);

  return result();
}

export default App;
