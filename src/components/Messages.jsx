import React from "react";
import Message from "./Message";
import "./components.css";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firbase";
const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data?.chatId), (doc) => {
      doc?.exists() && setMessages(doc?.data()?.messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

 
  return (
    <div className="">
      {messages?.map((m) => (
        <Message messages={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
