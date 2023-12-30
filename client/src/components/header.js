import { Link } from "react-router-dom"

import '../css/header.css';
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";

function Navbar(props) {

    const {setUserInfo, userInfo} = useContext(UserContext);

    useEffect(()=>{
        fetch("https://mavrick-api.vercel.app/profile", {
            credentials: "include",
        }).then(response =>{
            response.json().then(info =>{
                setUserInfo(info);
            });
        }, [])
    });

    function logout(){
        fetch("https://mavrick-api.vercel.app/logout", {
            credentials: 'include',
            method: "POST"
        });
        setUserInfo(null);
    }

    let email = userInfo?.email;

    let role = props.role;

    if (props.background === true){
        return (
            <nav className="flex" >
                <Link to="/blog">Blogs</Link> 
                <Link to="/documentary">Documentaries</Link>
                <Link to="/gallery">Gallery</Link>
                {(role !== 'admin') && (<Link to="/participate">Participate</Link>)}
                <Link to="/contact">Contact</Link>
                {email && (<Link style={{cursor: "pointer"}} onClick={logout}>Logout</Link>)}
                {!email && 
                    <Link to="/login">Login</Link>
                }
            </nav>
        )
    } else{
        return (
            <nav className="flex">
                <Link style={{color:"black"}} to="/blog">Blogs</Link> 
                <Link style={{color:"black"}} to="/documentary">Documentaries</Link>
                <Link style={{color:"black"}} to="/gallery">Gallery</Link>
                {role !== 'admin' && <Link style={{color:"black"}} to="/participate">Participate</Link>}
                <Link style={{color:"black"}} to="/contact">Contact</Link>
                {email && (
                    <> <Link style={{color:"black", cursor: "pointer"}} onClick={logout}>Logout</Link> </>
                )}
                {!email && (
                    <> <Link style={{color:"black"}} to="/login">Login</Link> </>
                )}
                
            </nav>
        )
    }
}

function HeroSection(props) {
    let participate = props.participate;
    if (participate === true){
        return (
            <div className="hero flex-col">
                <span className="flex-col bold">
                    <center>
                        Participate
                    </center>
                </span>

            </div>
        )
    } else{
        return (
            <div className="hero flex-col">
                <span className="flex-col bold">
                    <center>
                        Life of a Mavrick
                        <span className="since flex-col">Since Nov 19, 2017</span> 
                    </center>
                </span>
                <center className="arrow bold">&#8595;</center>

            </div>
        )
    }
}

export default function Header(props) {
    let background = props.background;
    let participate = props.participate;
    let role = props.role;
    console.log("role", role);
    if (background === true){
        if (participate === true){
            return(
                <main style={{height: "70vh"}}>
                    <header className="flex">
                        <Link to="/" className="logo bold">LoaM</Link>
                        <Navbar background={background} role={role}/>
                    </header>
                    <HeroSection participate={participate}/>
                </main>
            )
        }
        return(
            <main>
                <header className="flex">
                    <Link to="/" className="logo bold">LoaM</Link>
                    <Navbar background={background} role={role}/>
                </header>
                <HeroSection participate={participate}/>
            </main>
        )
    } else {
        return (
            <main style={{height: "15vh", background: "none"}}>
                <header className="flex">
                    <Link style={{color:"black"}} to="/" className="logo bold">LoaM</Link>
                    <Navbar/>
                </header>
            </main>
        )
    }
}