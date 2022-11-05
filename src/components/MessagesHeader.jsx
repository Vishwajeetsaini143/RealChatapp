import React from 'react';
import { BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import Export from "./Export";
const MessagesHeader = ({data}) => {
  return (
    <div className="chatInfo">
    <span>{data?.user.displayName}</span>
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