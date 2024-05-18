import React, { useState } from 'react'
import "./SignInSignUp.css"
import { TfiEmail } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { SlPhone } from "react-icons/sl";

const SignInSignUp = () => {
  const [action, setAction] = useState("Login");
  const [memberName, setMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  async function register() {
    event.preventDefault();
    try {
      await axios.post("http://209.97.154.49:8090/api/v1/member/save", {
        memberName: memberName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        passwordConfirm: password
      });
      if ((password===passwordConfirm) && (password.length===0) && (memberName.length===0) && (phoneNumber.length===0 && email.length===0)) {
        alert("Member Registration Successfully")
        navigate('/')
      }
      else {
        alert("Oops! Incorrect information! try again....")
      }

    }
    catch (err) {
      alert(err)
    }

  }
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  async function login() {
    event.preventDefault();
    try {
      await axios.post("http://209.97.154.49:8090/api/v1/member/login", {
        email: loginEmail,
        password: loginPassword
      }).then((res) => {
        alert(res.data.message);

        if (res.data.message === "Login Success") {
          alert(res.data.message)
          navigate('/')

        }
        else if (res.data.message === "Login Failed") {

          alert(res.data.message)
        }
        else {

          alert(res.data.message)

        }
      }, fail => {
        console.error(fail); // Error!
      });
    }


    catch (err) {
      alert(err);
    }

  }

  return (
    <div className='container-login'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === "Login" ? <div></div> : <div className='input'>
          <input type='text' id="name" placeholder='Full name' require
            value={memberName}
            onChange={(event) => { setMemberName(event.target.value); }}
          />
          <FaRegUser />
        </div>}
        {action === "Login" ? <div></div> : <div className='input'>
          <input type='phone' id="phoneNumber" placeholder='Phone Number' require
            value={phoneNumber}
            onChange={(event) => { setPhoneNumber(event.target.value); }}
          />
          <SlPhone />
        </div>}
        {action === "Login" ? <div className='input'>
          <input type='email' placeholder='Email' required
            value={loginEmail}
            onChange={(event) => { setLoginEmail(event.target.value)}}
          />
          <TfiEmail />
        </div> : <div className='input'>
          <input type='email' id="email" placeholder='Email' 
            value={email}
            onChange={(event) => { setEmail(event.target.value); }}
          />
          <TfiEmail />
        </div>}
        <div className='input'>
          {action === "Login" ? <div className='input'>
            <input type='password' placeholder='Password' required
              value={loginPassword}
              onChange={(event) => { setLoginPassword(event.target.value); }}
            />
            <GoLock />
          </div> : <div className='input'>
            <input type='password' placeholder='Password' required
              value={password}
              onChange={(event) => { setPassword(event.target.value); }}
            />
            <GoLock />
          </div>}
        </div>
        {action === "Login" ? <div></div> : <div className='input'>
          <input type='password' placeholder='Confirm Password' required
            value={passwordConfirm}
            onChange={(event) => { setPasswordConfirm(event.target.value); }}
          />
          <GoLock />
        </div>}
      </div>
      {action === "Sign Up" ? <div></div> : <div className='forgot-password'>Forgot password? <span>Click Here!</span></div>}
      <div className='submit-container'>
      <button type="submit" className={action === 'Login' ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up");  
      if ((password===passwordConfirm) && (password.length!==0) && (memberName.length!==0) && (phoneNumber.length!==0 && email.length!==0)) {register()} 
      else if((password===passwordConfirm) && (password.length===0) && (memberName.length===0) && (phoneNumber.length===0 && email.length===0)){}
      else {alert("Wrong Information, please try again...")}}}>Sign Up</button>
      <button type="submit" className={action === 'Sign Up' ? "submit gray" : "submit"} onClick={() => { setAction("Login"); login() }}>Login</button>                                                                                                                                              
      </div>
    </div>
  )
}

export default SignInSignUp
