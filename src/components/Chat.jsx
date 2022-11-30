import React from "react";
import "./components.css";

import Messages from "./Messages";
import Input from "./Input";

import MessagesHeader from "./MessagesHeader";

const Chat = () => {
  return (
    <div className="chat-wraper chat" id="chat-box">
      <div className="message-header">
        <MessagesHeader />
      </div>
      <div className="message-box">
        <Messages />
      </div>
      <div className="message-input">
        <Input />
      </div>
    </div>
  );
};

export default Chat;
