import logo from './logo.svg';
import './App.css';

function App() {
    const [result, setResult] = useState("...");
    const buscar = () => {
        fetch(process.env.REACT_APP_BACK_ENDPOINT || "localhost:8080/hola").then(request => request.text()).then(data => setResult(data));
    };
    return (
        <div className="App">
            <h1>una app: {process.env.REACT_APP_ALGO} </h1>
            <button onClick={buscar}>Buscar al server</button>
        </div>
    );
}

export default App;
