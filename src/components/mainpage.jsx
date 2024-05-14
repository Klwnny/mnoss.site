import React from "react";
 
const Mainpage = () => {
    return (
        <div>
            <h1 className="uk-light">Hello!, Im @mnoss!</h1>
            <div class="uk-card uk-card-secondary uk-card-body uk-card-hover uk-width-1-2@m uk-light">
                <h3 class="uk-card-title">Contacts</h3>
                <ul className="uk-list uk-list-circle">
                    <li><a href="https://discord.com" target="_blank" rel="noreferrer"><span uk-icon="discord"/> @mnoss</a></li>
                    <li><a href="https://github.com/Klwnny" target="_blank" rel="noreferrer"><span uk-icon="github"/> https://github.com/Klwnny</a></li>
                    <li><a href="https://mnoss.site" target="_blank" rel="noreferrer"><span uk-icon="google"/> mnoss@mnoss.site</a></li>
                    <li><a href="https://www.linkedin.com/in/yuming-ge-520577308/" target="_blank" rel="noreferrer"><span uk-icon="linkedin"></span> Linkedin</a></li>
                </ul>
            </div>
        </div>
    );
};
 
export default Mainpage;