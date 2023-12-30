// import Section from './sections';
import '../css/participate.css';

import { Link } from 'react-router-dom';

export default function Participate(){
    let heading = (<><b>Maverick's Forums</b><br></br> Write your own Journals and join discussion</>)
    let description = (
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
    return(
        <div className="flex page-description">
             <div className="heading">
                {heading}
            </div>
            <div className="desciption">
                {description}
            </div>
        </div>
    )
}