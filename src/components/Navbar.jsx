import React from "react";
import "./components.css";
import { signOut } from "firebase/auth";
import { auth } from "../firbase";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
// import icon from  "../../src/image/icon.jpg"
const Navbar = () => {
 
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="navbar-logo">Vishu Chat</span>

      <div className="user">
        {/* {currentUser.photoUrl? <img src={currentUser?.photoURL} alt="" />:<img src={icon} alt=""/>} */}
        <img src={currentUser?.photoURL} alt="" />
        
        <span>{currentUser.displayName}</span>

        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
