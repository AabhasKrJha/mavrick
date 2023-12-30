import { Link } from "react-router-dom";

function HeroGallery(props) {

    let section = props.display;
  
    if (section === "hero"){
      return(
        <Link to="/gallery" className="bold">
          <div className="hero-gallery-bg flex">
            <div className="overlay">
              View Gallery
            </div>
          </div>
        </Link>
      )
    } else if (section === "journal"){
      return(
        <div className="flex journal-gallery"> 
          <Link to="/blog" className="bold">
            <div className="hero-gallery-bg flex">
              <div className="overlay">
                View Blogs
              </div>
            </div>
          </Link>
          <Link to="/documentary" className="bold">
            <div className="hero-gallery-bg flex">
              <div className="overlay">
                View Documentaries
              </div>
            </div>
          </Link>
        </div>
      )
    } else if (section === "participate"){
      return(
        <Link to="/gallery" className="bold">
          <div className="hero-gallery-bg flex participate-gallery">
          </div>
        </Link>
      )
    }
  }
  
export default function Section(props) {
  
    let heading ;
    let description;
  
    let section = props.section;
  
    if (section === "hero"){
      heading = (<><b>Life of a Maverick</b><br></br> A journey beyond the ordinary</>)
      description = (
        <>
          <p>
            Join us on a unique travel odyssey where every destination unveils stories of 
            adventure, discovery, and the extraordinary. Dive into a world of wanderlust, 
            explore diverse cultures, and embrace the unexpected. 
            'Life of a Maverick' is not just a blog; it's an invitation 
            to escape the ordinary and embrace the wonders that travel brings. 
            Come, wander with us, and let the journey unfold. 
          </p>
          <Link to="/blog">Read More</Link>
        </>
      )
    } else if (section === "journal"){
      heading = (<><b>Maverick's Journals</b><br></br> A journal through the journey</>)
      description = (
        <>
          <p>
          Embark on an extraordinary odyssey with Maverick's Blogs—a captivating journal 
          that unfolds the tales of diverse journeys. Immerse yourself in the chronicles of 
          exploration, discovery, and the vibrant tapestry of life on the road. 
          Join us as we navigate the world, one compelling story at a time.
          </p>
          <div className="description-links flex">
            <Link to="/blog">Blog</Link>
            <Link to="/documentary">Documentary</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
        </>
      )
    } else if (section === "participate"){
      heading = (<><b>Maverick's Forums</b><br></br> Write your own Journals and join discussion</>)
      description = (
        <>
          <p>
          Engage in spirited discussions and craft your own narratives at the Maverick's Forum—a dynamic space where fellow explorers converge. 
          Dive into diverse topics, share insights, and embark on collaborative storytelling. 
          Join the conversation and shape the collective journey through shared experiences and individual perspectives. 
          Welcome to a community that amplifies the voice of every Maverick.
          </p>
          <div className="description-links flex">
            <Link to="/forum">Forum</Link>
            <Link to="/participate">Participate</Link>
          </div>
        </>
      )
    } 
   
    return(
      <div className="homepage-section">
        <div className="section-description flex">
          <div className="heading">
            {heading}
          </div>
          <div className="desciption">
            {description}
          </div>
        </div>
        <HeroGallery display={section}/>
      </div>
    )
  }
  