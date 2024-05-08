import React, { useState } from 'react'
import { TfiEmail } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "./Newsletter.css"

const Newsletter = () => {
  const [action, setAction] = useState("Sign Up");
  const [memberName, setMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  async function register() {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8090/api/v1/member/save", {
        memberName: memberName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        passwordConfirm: password
      });
      if (password === passwordConfirm && (password!=null && memberName!=null && phoneNumber!=null)) {
        alert("Subscribed Successfully!")
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
  return (
    <div className='container-subscribe'>
    
      <div className='header-subscribe'>
        <div className='text-subscribe'>Newsletter</div>
      </div>
        <div className='input-subscribe'>
          <input type='email' id="email" placeholder='Email' 
            value={email}
            onChange={(event) => { setEmail(event.target.value); }}
          />         
      <button type="submit" className="submit-subscribe" onClick={() => { setAction("Sign Up");  if ((email.length!==0)) {register()} else{alert("registration failed")}}}>Subscribe</button>                                                                                                                                             
      </div>
        </div>
  )
}

export default Newsletter
