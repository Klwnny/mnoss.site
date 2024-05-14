import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  Mainpage  from "./components/mainpage";
import  About  from "./components/About";
import Resume from "./components/Resume";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App uk-margin-xlarge-left uk-margin-xlarge-right uk-margin-medium-top">
        <img src="real.jpg" className="uk-border-circle uk-margin-small-right" width="200" height="200" alt="mnoss's user icon"/>
        <Link to="/"><button className="uk-button uk-margin-small-right uk-button-default uk-light uk-button-large">Home</button></Link>
        <Link to="/AboutMe"><button className="uk-button uk-margin-small-right uk-button-default uk-light uk-button-large">About Me</button></Link>
        <Link to="/Resume"><button className="uk-button uk-margin-small-right uk-button-default uk-light uk-button-large">Resume</button></Link>
        <hr className="uk-divider-icon" />
          <Routes>
            <Route exact path="/" element={<Mainpage />}></Route>
            <Route path="/AboutMe" element={<About />}></Route>
            <Route path="/Resume" element={<Resume />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;