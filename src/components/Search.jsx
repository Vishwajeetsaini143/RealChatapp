import React from 'react'
import { useState } from 'react'
import './components.css'
import { collection, query, where,getDocs, setDoc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from '../firbase';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { doc } from 'firebase/firestore';
const Search = () => {
  const [username,setUsername]=useState("")
  const [user,setUser]=useState(null)
  const [err,setErr]=useState(false)
  const {currentUser}=useContext(AuthContext)
  const handelSearch= async()=>{
const q=query( 
  collection(db,"users"),
where("displayName","==",username )
);
try{
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  setUser(doc.data())
});
}catch(err){
  setErr(true)
}
  }
  const handleKey=(e)=>{
    e.code==="Enter" && handelSearch();
  }
  const handleSelect= async()=>{
    alert("click yes")
    //check whether the group (chats in firestore) exists,if not create
    const combinedId=
    currentUser.uid > user.uid
    ?currentUser.uid+ user.uid
    :user.uid +currentUser.uid;
    console.log("com",combinedId)
    try{
      const res=await getDoc (doc(db,"Chats",combinedId))
      console.log("yes",res)
      if(!res.exists()){
        //create a chat in chats collection
        await setDoc(doc (db,"chats",combinedId),{messages:[]})
        //create user chats
         await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedId+".userInfo"]:{
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        });
        
        await updateDoc(doc(db,"userChats",user.uid),{
          [combinedId+".userInfo"]:{
            uid:currentUser.uid,
            displayName:currentUser.displayName,
            photoURL:currentUser.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        })
       
      }
      
    } catch(err){}
    setUser(null)
    setUsername("")
    
    //create user chats
  }




  return (
    <div className='Search'>
      <div className='Searchform'>
        <input type="text" placeholder='find a user' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}
        value={username}
        />
        
      </div>
      {err && <span>User not found!</span>}
      {user&& <div className='uesrChat' onClick={handleSelect}>
        <img src={user.photoURL} alt=''/>
        <div className='userChatInfo'>
          <span>{user.displayName}</span>
        </div>
        </div>}
    </div>
  )
}

export default Search