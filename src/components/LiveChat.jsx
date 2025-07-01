import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log("called");
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[580px]  m-5 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name="arun" message="hello from props" />
      <ChatMessage name="arun" message="hello from props" />

      <ChatMessage name="arun" message="hello from props" />
      <ChatMessage name="arun" message="hello from props" />
      <ChatMessage name="arun" message="hello from props" />
      <ChatMessage name="arun" message="hello from props" />
    </div>
  );
};

export default LiveChat;
