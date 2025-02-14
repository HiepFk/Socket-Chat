import { useState } from "react";
import io from "socket.io-client";

import SelectRoom from "./components/SelectRoom";
import ChatRoom from "./components/ChatRoom";
import ChatBox from "./ChatBox";

// const socket = io.connect("http://localhost:8000");
const socket = io.connect("http://172.16.13.165:8000");

function App() {
  const [showChat, setShowChat] = useState(false);
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  return (
    // <div className="App">
    //   <header>
    //     {/* <h1>⚛️🔥💬</h1> */}
    //     <h1>Chat Room</h1>
    //     <h1 className="title">{showChat ? "Chat Room" : "Select Room"}</h1>
    //   </header>

    //   <section>
    //     {showChat ? (
    //       <ChatRoom socket={socket} userName={userName} room={room} />
    //     ) : (
    //       <SelectRoom
    //         socket={socket}
    //         userName={userName}
    //         setUserName={setUserName}
    //         room={room}
    //         setRoom={setRoom}
    //         setShowChat={setShowChat}
    //       />
    //     )}
    //   </section>
    // </div>
    <ChatBox />
  );
}

export default App;
