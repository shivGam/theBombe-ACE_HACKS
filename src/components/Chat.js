import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaRocketchat } from "react-icons/fa";

const Chatbox = ({ state }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const fetchResponse = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/chat",
        { message: inputText },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const newResponseMessage = {
        name: "theBombe",
        message: response.data.answer,
      };
      setMessages((prevMessages) => [...prevMessages, newResponseMessage]);
      setInputText("");
    } catch (error) {
      console.error("Error:", error);
      setInputText("");
    }
  };

  const onSendButton = () => {
    if (inputText === "") {
      return;
    }
    const newMessage = { name: "User", message: inputText };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    fetchResponse();
  };

  const updateChatText = () => {
    return messages.map((item, index) => (
      <div
        key={index}
        className={`messages__item ${
          item.name === "User"
            ? "messages__item--user"
            : "messages__item--theBombe"
        }`}
      >
        {item.message}
      </div>
    ));
  };

  // Optionally, you can use useEffect to force re-render when messages change.
  // useEffect(() => {}, [messages]);

  return (
    <div className="fixed bottom-[20px] -right-[20rem] z-50 bg-green-300 h-[40vh]">
      <div className="relative ">
        <div
          className={`chatbox__support  ${
            state ? "chatbox--active" : "hidden"
          } rounded-xl shadow-xl`}
        >
          <div className="chatbox__messages overflow-x-auto">
            {updateChatText()}
          </div>
          <div className=" flex items-center justify-between absolute m-2 bottom-0">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="bg-gray-200 rounded-xl px-4 py-2 flex-1 w-[50%]"
            />
            <button
              className=" bg-green-400 rounded-xl px-4 py-2"
              onClick={onSendButton}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
