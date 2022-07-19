import React,{useState} from 'react'
import axlos from 'axios'
import axios from 'axios'

export default function Retrive() {
    function bring(){
        axios.get("http://localhost:4000/getusers")
        .then((res)=>{
            console.log(res.data)
        })
    }
  return (
    <div>
        <button onClick={bring}></button>
    </div>
)
}
