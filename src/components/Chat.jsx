import React from 'react'
import './components.css'
import {BsCameraVideoFill} from 'react-icons/bs'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
const Chat = () => {
  const {data}=useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <BsCameraVideoFill/>
          <AiOutlineUserAdd/>
          <FiMoreHorizontal/>
        </div>
        
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat