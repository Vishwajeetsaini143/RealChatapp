import React from 'react'
import './components.css'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-nav">
        <Navbar/>

      </div>
      <div className="sidebar-search">
        <Search/>

      </div>
      <div className="sidebar-chat">
        <Chats/>

      </div>
    </div>

  )
}

export default Sidebar