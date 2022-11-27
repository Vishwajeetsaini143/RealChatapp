import React from "react";
import "./Pages.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firbase";
import { Link } from "react-router-dom";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    // alert("click");
    // console.log(e.target[0].value)

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo-title">
          <span className="logo">Vishu chat</span>
          <span className="title">Login</span>
        </div>
        <form onSubmit={handelSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Login</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          you do have an account?<Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
