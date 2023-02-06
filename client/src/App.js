import './App.css';
import io from 'socket.io-client';
import {useState} from "react";

const socket = io.connect("http://localhost:3000")

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const joinRoom = () =>{
    if(username !== "" && room !==""){
      console.log(room)
      socket.emit("join_room" , room);

    }

  };
  return (
    <div className="App">
      
      <h3>Join a chat</h3>
      <input 
      type="text"
      placeholder='John..' 
      onChange={(event) =>{
        setUsername(event.target.value);
      }}
      />
      <input type="text" placeholder='Room id' onChange={(event) =>{
        setRoom(event.target.value);
      }}
        />
      <button onClick={joinRoom}>Join A Room</button>
    </div>
  );
}

export default App; 
