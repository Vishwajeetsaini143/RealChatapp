import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { useRef } from 'react'
import { useContext ,useEffect} from 'react'
const Message = ({messages}) => {
  console.log("me",messages.senderId)
  const {currentUser}=useContext(AuthContext) 
  const {data}=useContext(ChatContext)
  const ref=useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  }, [messages])
  
  return (
    <div
    ref={ref}
    className={`message ${messages.senderId===currentUser.uid && "owner"}`}>
      <div className='messageInfo'>
      
        <img src={messages.senderId===currentUser.uid? currentUser.photoURL:data.user.photoURL} alt=''/> 
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>{messages?.text}</p>
        {messages.img && <img src={messages.img} alt=''/>}

      </div>
    </div>
  )
}

export default Message