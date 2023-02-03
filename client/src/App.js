import './App.css';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3000")

function App() {
  
  return (
    <div className="App">
      <h3>Join a chat</h3>
      <input type={text} placeholder='John..'></input>
      <input type={text} placeholder='Room id'></input>
      <button>Join A Room</button>
    </div>
  );
}

export default App;
