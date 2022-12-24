import React from "react";
import styled from "styled-components";
function SelectRoom({
  socket,
  userName,
  setUserName,
  room,
  setRoom,
  setShowChat,
}) {
  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (
    <Wrapper className="">
      <input
        type="text"
        placeholder="Name..."
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Room ID..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>Join A Room</button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    line-height: 1.5;
    width: 50%;
    font-size: 1.25rem;
    background: rgb(58, 58, 58);
    color: white;
    outline: none;
    border: none;
    padding: 1rem;
    margin-bottom: 1.25rem;
  }
`;
export default SelectRoom;
