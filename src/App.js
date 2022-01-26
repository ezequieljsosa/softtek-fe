import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_ALGO);
  return (
    <div className="App">
     <h1>una app: {process.env.REACT_APP_ALGO} </h1>
    </div>
  );
}

export default App;
