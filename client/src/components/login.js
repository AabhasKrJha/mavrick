import { Link, Navigate } from "react-router-dom"

import '../css/authform.css';
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    
    async function login_user(ev){
        ev.preventDefault();
        const response = await fetch('https://mavrick-api.vercel.app/login', {
            method: "POST",
            body: JSON.stringify({email,password}),
            headers: {'Content-type' : 'application/json'},
            credentials: 'include',
        })
        if (response.ok){
            response.json().then(userInfo => {
                console.log("login")
                console.log(userInfo)
                setUserInfo(userInfo);
                console.log(UserContext.userInfo)
                setRedirect(true);
            });
        } else{
            alert("Login failed. Wrong Credentials.")
        }
    }

    if (redirect){
        return (<Navigate to={"/"}/>)
    }

    return (
        <div className='form-container flex-col'>
            <form action="" className="flex-col authform" onSubmit={login_user}>
                <h1>Login to continue</h1> <br></br>
                <input 
                    type="email" placeholder="Email"
                    value={email} onChange={ev => setEmail(ev.target.value)}>
                </input>
                <input 
                    type="password" placeholder="Password"
                    value={password} onChange={ev => setPassword(ev.target.value)}>    
                </input>
                <button> Login </button>
            </form>
            <br></br>
            Don't have an account? <Link to="/register">Register</Link>
        </div>
    )
}