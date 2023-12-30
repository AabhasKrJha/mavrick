import { Link } from "react-router-dom"

import '../css/authform.css';
import { useState } from "react";

export default function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function register_user(ev){
        ev.preventDefault();
        const response = await fetch('https://mavrick-api.vercel.app/register', {
            method: "POST",
            body: JSON.stringify({email,password}),
            headers: {'Content-type' : 'application/json'},
        })
        if (response.status === 200){
            alert("Registeration Successful.")
        } else{
            alert("Registeration failed. User alredy exists.")
        }
    }

    return (
        <div className='form-container flex-col'>
            <form action="" className="flex-col authform" onSubmit={register_user}>
                <h1>Create an account</h1> <br></br>
                <input 
                    type="email" placeholder="Email"
                    value={email} onChange={ev => setEmail(ev.target.value)}>
                </input>
                <input 
                    type="password" placeholder="Password"
                    value={password} onChange={ev => setPassword(ev.target.value)}>    
                </input>
                <button> Register </button>

            </form>
            <br></br>
            Alredy have an account? <Link to="/login">Login</Link>
        </div>
    )
}