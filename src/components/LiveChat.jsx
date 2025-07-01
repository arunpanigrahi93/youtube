import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../redux/chatSlice";
import { GenerateRandomName, GenerateRandomText } from "./helper";

const LiveChat = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const textMessage = useSelector((store) => store.chat.messages);
  console.log(textMessage);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("called");
      dispatch(
        addChat({
          name: GenerateRandomName(),
          message: GenerateRandomText(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      addChat({
        name: "arun",
        message: inputText,
      })
    );
    setInputText("");
  };

  return (
    <>
      <div className="w-full h-[580px]  m-5 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {textMessage.map((item, i) => (
            <ChatMessage key={i} name={item.name} message={item.message} />
          ))}
          {/* <ChatMessage name="arun" message="hello from props" /> */}
        </div>
      </div>
      <form
        className="w-full m-5 p-2 border border-black"
        onSubmit={handleClick}
      >
        <input
          className="w-70"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
