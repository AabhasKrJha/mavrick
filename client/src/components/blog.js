import { Link } from "react-router-dom"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import '../css/blog.css';

export default function Blogs(){
    const images =[
        "https://picsum.photos/2000/3000",
        "https://picsum.photos/3000/2000",
        "https://picsum.photos/4000/3000",
        "https://picsum.photos/3000/1500",
        "https://picsum.photos/1000/2500",
        "https://picsum.photos/1500/2000",
    ]

    return (
        <div className="blogs flex-col">
            <div className="flex page-description">
                <h1>Maverick's Blogs</h1>
            </div>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
                <Masonry gutter="40px">
                    {
                        images.map((image, i) => (
                            <div className="blog flex-col">
                                <img key={i} src={image} style={{width: "100%", display: "block"}}  alt="" />
                                <div className="content flex-col">
                                    <h1>A Trip To rajasthan</h1>
                                    <span>@Suman | 14 min Read </span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Exercitationem similique laborum aspernatur velit eligendi rerum alias voluptates illo, 
                                        ullam qui enim repellendus? Pariatur excepturi consequatur saepe sint iure doloribus ab.</p>
                                    <Link to="/blog/one">Read More</Link>
                                </div>
                            </div>
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

// function Blog(){
//     const image_link = "https://media.istockphoto.com/id/520837732/photo/indian-landmark-gadi-sagar-in-rajasthan.webp?b=1&s=170667a&w=0&k=20&c=XYJnZaMI-MdzwCcYaKxmU7FzHvdScFRBsnoIaETi1ak=";
//     return(
//         <div className="blog flex">
//             <img src={image_link} alt=""></img>
//             <div className="content flex-col">
//                 <h1>A Trip To rajasthan</h1>
//                 <span>@Suman | 14 min Read </span>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                     Exercitationem similique laborum aspernatur velit eligendi rerum alias voluptates illo, 
//                     ullam qui enim repellendus? Pariatur excepturi consequatur saepe sint iure doloribus ab.</p>
//                 <Link to="/">Read More</Link>
//             </div>
//         </div>
//     )
// }

// export default function Blogs(){
//     return(
//         <div className="blogs">
//             <Blog/>
//             <Blog/>
//             <Blog/>
//             <Blog/>
//             <Blog/>
//             <Blog/>
//             <Blog/>
//             <Blog/>
//             <Blog/>
//         </div>
//     )
// }

