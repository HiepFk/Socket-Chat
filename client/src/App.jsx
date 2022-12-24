import { useState } from "react";
import io from "socket.io-client";

import SelectRoom from "./components/SelectRoom";
import ChatRoom from "./components/ChatRoom";

const socket = io.connect("http://localhost:8000");

function App() {
  const [showChat, setShowChat] = useState(false);
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <h1>{showChat ? "Chat Room" : "Select Room"}</h1>
      </header>

      <section>
        {showChat ? (
          <ChatRoom socket={socket} userName={userName} room={room} />
        ) : (
          <SelectRoom
            socket={socket}
            userName={userName}
            setUserName={setUserName}
            room={room}
            setRoom={setRoom}
            setShowChat={setShowChat}
          />
        )}
      </section>
    </div>
  );
}

export default App;
