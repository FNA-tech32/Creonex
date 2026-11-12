import React from "react";
import "./stars.css";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">We are Creonex</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Digital Solutions Studio",
                      "Full Stack Web Development",
                      "Custom Software Engineering",
                      "Cloud & Modern Web Platforms"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4 mr-2"
                  href="#work"
                  role="button"
                >
                  Explore Our Work
                </a>
                <a
                  className="btn btn-outline-light btn js-scroll px-4"
                  href="#contact"
                  role="button"
                >
                  Get In Touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
