import '../css/admin-panel.css';
import { Link } from 'react-router-dom';

function Blogs(){
    const images =[
        "https://picsum.photos/100/20",
        "https://picsum.photos/100/20",
        
    ]
    return(
        images.map((image, i) => (
            <div className="blog flex">
                <img key={i} src={image}   alt="" />
                <div className="content flex-col">
                    <h3>A Trip To rajasthan</h3>
                    <span>@Suman | 14 min Read </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Exercitationem similique laborum aspernatur velit eligendi rerum alias voluptates illo, 
                        ullam qui enim repellendus? Pariatur excepturi consequatur saepe sint iure doloribus ab.</p>
                    <Link to="/">Read More</Link> <Link to="/">Edit</Link>
                </div>
            </div>
        ))
        // <div className='blogs flex'>
        //     <img src=''></img>
        //     <h2>A trip to Rajasthan</h2>
        // </div>
    )
}

function Participant(){
    return(
        <div className='participant flex'>
            <span>abhasjha03@gmail.com</span>
            <button>Allow</button>
        </div>
    )
}

export default function AdminDashboard(){
    return(
        <div className="admin-panel flex-col">
            <div className='my-blogs flex-col'>
                <div className='heading flex'>
                    <h2>My Blogs</h2>
                    <button>Create</button>
                </div>
                <Blogs/>
            </div>
            <div className='participation flex-col'>
                <div>
                    <h2>Participation requests</h2>
                </div>
                <Participant/>
            </div>
        </div>
    )
}