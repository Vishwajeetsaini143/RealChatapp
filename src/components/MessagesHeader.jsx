import React, { useContext } from 'react';
import { BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import Export from "./Export";
import { ChatContext } from '../context/ChatContext';
const MessagesHeader = () => {
  const {data}=useContext(ChatContext)
  console.log("data1......",data.user)
  return (
    <div className="chatInfo">
    <span>{data?.user?.displayName}</span>
    

    <div className="chatIcons">
      <Export />
      <BsCameraVideoFill />
      <AiOutlineUserAdd />

      <FiMoreHorizontal />
    </div>
  </div>
  )
}

export default MessagesHeader