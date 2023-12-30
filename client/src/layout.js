import { Outlet } from "react-router";

import Header from "./components/header";
import Footer from "./components/footer";

export default function Layout(props){
    let background = props.background;
    let participate = props.participate;
    return(
        <div className="container"> 
            <div style={{minHeight: "100vh"}}>
                <Header background={background} participate={participate}/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
    
}