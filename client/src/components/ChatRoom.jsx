import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";
function ChatRoom({ socket, userName, room }) {
  const dummy = useRef();

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const messageData = {
      room: room,
      author: userName,
      message: currentMessage,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };

    await socket.emit("send_message", messageData);
    setMessageList((list) => [...list, messageData]);
    setCurrentMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <Wrapper>
      <main>
        {messageList &&
          messageList.map((msg, index) => (
            <ChatMessage key={index} message={msg} userName={userName} />
          ))}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="say something nice"
        />
        <button
          type="submit"
          disabled={!currentMessage || currentMessage?.trim()?.length <= 0}
        >
          🐍
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  main {
    padding: 10px;
    height: 80vh;
    margin: 10vh 0 10vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }

  main::-webkit-scrollbar {
    width: 0.25rem;
  }

  main::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  main::-webkit-scrollbar-thumb {
    background: #6649b8;
  }
  form {
    height: 10vh;
    position: fixed;
    bottom: 0;
    background-color: rgb(24, 23, 23);
    width: 100%;
    max-width: 728px;
    display: flex;
    font-size: 1.5rem;
  }

  form button {
    width: 20%;
    background-color: rgb(56, 56, 143);
  }

  input {
    line-height: 1.5;
    width: 100%;
    font-size: 1.5rem;
    background: rgb(58, 58, 58);
    color: white;
    outline: none;
    border: none;
    padding: 0 10px;
  }

  button {
    background-color: #282c34;
    border: none;
    color: white;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.25rem;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default ChatRoom;
