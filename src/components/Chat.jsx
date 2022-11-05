import React from "react";
import "./components.css";

import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import MessagesHeader from "./MessagesHeader";


const Chat = () => {
  const { data } = useContext(ChatContext);
 

  return (
    <div className="chat-wraper chat" id="chat-box">
      <div className="message-header">
      <MessagesHeader data={data} />

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
