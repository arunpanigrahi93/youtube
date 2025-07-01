import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../redux/chatSlice";
import { GenerateRandomName, GenerateRandomText } from "./helper";

const LiveChat = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const textMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addChat({
          name: GenerateRandomName(),
          message: GenerateRandomText(20),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    dispatch(
      addChat({
        name: "Arun", // or GenerateRandomName() if you want dynamic
        message: inputText,
      })
    );

    setInputText("");
  };

  return (
    <>
      <div className="w-full h-[580px] m-5 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {textMessage.map((item, i) => (
            <ChatMessage
              key={i}
              name={item.name} // Use name from state
              message={item.message}
            />
          ))}
        </div>
      </div>

      <form
        className="w-full m-5 p-2 border border-black flex"
        onSubmit={handleSubmit}
      >
        <input
          className="flex-1 px-2 border border-gray-400 rounded"
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 mx-2 bg-green-100 rounded hover:bg-green-200"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
