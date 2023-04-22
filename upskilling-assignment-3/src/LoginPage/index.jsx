/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import LandingPage from "../LandingPage";

/* eslint-disable import/no-anonymous-default-export */
export default function({usersData,pwdData}) {
    const [loginUserName, setLoginUserName] =useState('');
    const [loginPwd, setPwd] =useState('');
    return <div style={{margin:"30px 40vw",}}>
        <div><span>Enter UserName: </span> <input type="text" onChange={(event) => {setLoginUserName(event.target.value)}}/></div><br/>
        <div><span>Enter Password: </span> <input type="password" onChange={(event) => {setPwd(event.target.value)}}/></div><br/>
        <button type="button" onClick={() => {
            usersData.map((user,index) =>{
                if(loginUserName === user){
                    if(loginPwd === pwdData[index]){
                        <LandingPage/>
                    }
                }
            })
        }}>Login</button>
    </div>
}