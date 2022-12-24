import React from "react";

function ChatMessage(props) {
  const { author, message, time } = props.message;
  const userName = props.userName;
  const messageClass = author === userName ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <div className="message_info">
        <div className="message_name">{author}</div>
        <div className="message_time">{time}</div>
      </div>
      <div className="message_chat">{message}</div>
    </div>
  );
}

export default ChatMessage;
