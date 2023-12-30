import Section from './sections';

import '../css/homepage.css';

export default function Homepage(){
    return(
        <>
            <Section section={"hero"}/>
            <Section section={"journal"}/>
            <Section section={"participate"}/>
        </>
    )
}