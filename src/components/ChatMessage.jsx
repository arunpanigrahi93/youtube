import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-sm">
      <img
        className="h-7 rounded-full"
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        alt="user"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
