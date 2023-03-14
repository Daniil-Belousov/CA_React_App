import './App.css';
import WithLoadingIndicator from './components/WithLoadingIndicator';
import WrappedComponent from './components/WrappedComponent';

function App() {
  return <WithLoadingIndicator WrappedComponent={<WrappedComponent/>}/>;
}

export default App;
