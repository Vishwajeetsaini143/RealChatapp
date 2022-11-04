import React from 'react'
import './components.css'
import {BsCameraVideoFill} from 'react-icons/bs'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import Export from './Export'


 
const Chat = () => {

  const {data}=useContext(ChatContext)
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
      
    <Export/>
          <BsCameraVideoFill/>
          <AiOutlineUserAdd/>
          <div className='Export-icons'>
          <FiMoreHorizontal onClick={handleOpen}/>
          {open ? <div className='export-card'><button >Export </button> </div> : <div></div>}
          </div>
         
        </div>
        
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat