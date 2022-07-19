import React,{useState} from 'react'

export default function Register() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    function send(){
        console.log(username,password)
        setUsername("");setPassword("")
    }
  return (
    <div>
        <input 
            type="text"
            value={username} 
            onChange={(e)=>{setUsername(e.target.value)}}
            placeholder="Enter UserName"/>

        <input 
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={send}>Submit</button>
    </div>
)}
