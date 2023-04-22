/* eslint-disable no-unused-vars */
import userEvent from "@testing-library/user-event";
import { useState } from "react"

/* eslint-disable import/no-anonymous-default-export */
export default function({sendData}){
    const [UserNames, setUserNames] = useState([]);
    const [passwords, setPasswords] = useState([]);
    return <div style={{margin:"30px 40vw",}}>
        <div className="user-input"><span>Enter Name: </span> <input type="text"/></div><br/>
        <div className="user-input"><span>Enter Email: </span> <input type="text"/></div><br/>
        <div className="user-input" onChange={(event) => {setUserNames(...UserNames, event.target.value)}}><span>Enter UserName: </span> <input type="text"/></div><br/>
        <div className="user-input" onChange={(event) => {setPasswords( ...passwords, event.target.value)}}><span>Enter Password: </span> <input type="password"/></div><br/>
        <button style={{margin:"0px 90px"}} onClick={() => {sendData(UserNames,passwords); } }>Register</button><br/>
    </div>
}