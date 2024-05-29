import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="uk-light">Ok so... Who am I?</h1>
      <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match uk-grid">
        <div>
          <div class="uk-card uk-card-secondary uk-card-body uk-card-hover uk-light">
            <h3 class="uk-card-title">About Me</h3>
            <p>
              So... Hi! My name is Yuming Ge, & some may know me as Eugene. I'm
              commonly known on the internet as @Klwnny or @Mnoss! From Game
              Design to Full Stack Development, I look forward to doing all
              kinds of projects!
            </p>
            <p>
              For any business inquires, please contact my email mnoss@mnoss.site !
            </p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-secondary uk-card-body uk-card-hover uk-light">
            <h3 class="uk-card-title">Projects</h3>
            <ul className="uk-list uk-list-circle">
              <li>
                <a
                  href="https://firebasetest.mnoss.site"
                  target="_blank"
                  rel="noreferrer"
                >
                  firebase database & authentication testing
                </a>
              </li>
              <li>
                <a
                  href="https://test.mnoss.site"
                  target="_blank"
                  rel="noreferrer"
                >
                  intial react.JS testing
                </a>
              </li>
              <li>
                <a
                  href="https://replit.com/@klwnc"
                  target="_blank"
                  rel="noreferrer">
                  School Projects & Classwork
                </a>
              </li>
              <li>
                <a
                  href="https://stardewvalleycs2024final.mnoss.site"
                  target="_blank"
                  rel="noreferrer">
                  Final School project of the 2024 year!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div>
          <div class="uk-card uk-card-secondary uk-card-body uk-card-hover uk-light">
            <h3 class="uk-card-title">Currently Learning📝</h3>
            <ul className="uk-list uk-list-circle">
                <li><span uk-icon="code"/> JavaScript</li>
                <li><span uk-icon="link-external"/> ReactJS (Native)</li>
                <li><span uk-icon="database"/> Firebase Google</li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default About;
