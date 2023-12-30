import { Link } from 'react-router-dom';
import '../css/footer.css'

function SubscribeForm(){
    return(
        <>
        <h1>Life of a Mavrick</h1> <br></br>
        <div className='subscribe'>
            <center>Get news and Updates </center>
            <form className='flex'>
            <input placeholder='Email Address'></input>
            <button type='submit'>Subscribe</button>
            </form>
        </div>
        </>
    )
}

function FooterMain(){
    return(
        <div className='footer-main flex'>
            <div className='links flex'>
                <Link to="/">Home</Link>
                <Link to="/blog">Blogs</Link> 
                <Link to="/documentary">Documentaries</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/participate">Participate</Link>
                {/* <Link to="/forum">Forum</Link> */}
                <Link to="/contact">Contact</Link>
            </div>
            <div className='socials'></div>
        </div>  
    )
}

function Footer(){
    return(
        <footer className="flex"> 
            <SubscribeForm/>
            <FooterMain/>
        </footer>   
    )
}

export default Footer;
