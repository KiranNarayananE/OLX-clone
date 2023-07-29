import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../store/fireBaseContext';
import { useNavigate } from 'react-router-dom'
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {login} = useUserAuth()
  let navigate = useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    
    try {
      await login(email,password);
      navigate("/")
      
    } catch (err) {
      console.log(err.message)
    }
    
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link> 
      </div>
    </div>
  );
}

export default Login;
