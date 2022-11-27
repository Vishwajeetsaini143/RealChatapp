import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { useRef } from 'react'
import { useContext ,useEffect} from 'react'
const Message = ({messages}) => {
 
  const {currentUser}=useContext(AuthContext) 
  const {data}=useContext(ChatContext)
  const ref=useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  }, [messages])
  console.log("msg",messages)
  const time = new Date(messages?.date.seconds* 1000).toLocaleTimeString().slice(0,5);
  
  
  return (
    <div
    ref={ref}
    className={`message ${messages.senderId===currentUser.uid && "owner"}`}>
      <div className='messageInfo'>
      
        <img src={messages.senderId===currentUser.uid? currentUser.photoURL:data.user.photoURL} alt=''/> 
        
        <span>{time}</span>
      </div>
      <div className='messageContent'>
        <p>{messages?.text}</p>
        {messages.img && <img src={messages.img} alt=''/>}

      </div>
    </div>
  )
}

export default Message