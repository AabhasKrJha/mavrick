import { Navigate } from "react-router-dom"

import '../css/authform.css';
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
// import Header from "./header";

export default function Admin(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    
    async function login_user(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:8000/login', {
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
        return (<Navigate to={"/admin/dashboard"}/>)
    }

    return (
        <div className="container">
            <div style={{minHeight: "100vh"}}>
                <div className='form-container flex-col'>
                    <form action="" className="flex-col authform" onSubmit={login_user}>
                        <h1>Admin login</h1> <br></br>
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
                </div>
            </div>
        </div>
        
    )
}