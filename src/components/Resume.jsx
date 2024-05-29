import React from "react";
 
const Resume = () => {
    return (

        <div>
            <h2 className="uk-heading uk-light">Resume</h2>
            <a className="uk-button " href="#target" uk-scroll="">Scroll Down</a>
            <hr />

            <iframe title="pdf frame"src="Resume.pdf" width="100%" height="800px" />
            <hr />
            <a id="target" className="uk-button" href="" uk-scroll="">Scroll up</a>
            
        </div>
    );
};
 
export default Resume;