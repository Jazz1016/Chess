import logo from "./logo.svg";
import Chessboard from "./components/Chessboard/Chessboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>CHESS</h4>
      </header>
      <Chessboard />
      <div></div>
    </div>
  );
}

export default App;
