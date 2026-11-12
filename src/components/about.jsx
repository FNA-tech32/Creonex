import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "React_skill", content: "React.js & Modern Frontend", porcentage: "94%", value: "94" },
        { id: "Node_skill", content: "Node.js & Backend APIs", porcentage: "90%", value: "90" },
        { id: "FullStack_skill", content: "Full Stack Architecture", porcentage: "92%", value: "92" },
        { id: "JS_skill", content: "JavaScript (ES6+) & TypeScript", porcentage: "95%", value: "95" },
        { id: "Python_skill", content: "Python & Cloud Services", porcentage: "85%", value: "85" },
        { id: "UIUX_skill", content: "UI/UX & Design Systems", porcentage: "88%", value: "88" },
        { id: "Database_skill", content: "SQL, MongoDB & PostgreSQL", porcentage: "86%", value: "86" },
        { id: "DevOps_skill", content: "Docker, CI/CD & Cloud Deployment", porcentage: "82%", value: "82" }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Welcome to Creonex — a premier digital solutions and software engineering studio dedicated to building high-performance web applications, scalable platforms, and bespoke digital experiences. We bridge the gap between creative visual design and robust engineering to deliver digital products that excel."
        },
        {
          id: "second-p-about",
          content:
            "At Creonex, our engineering philosophy centers on technical excellence, user-centric interfaces, and scalable architecture. From modern single-page applications and enterprise web portals to RESTful cloud backends, we craft each solution with precision, clean code, and forward-thinking technologies."
        },
        {
          id: "third-p-about",
          content:
            "Whether partnering with startups to launch disruptive MVPs or collaborating with established enterprises on mission-critical digital transformations, Creonex offers dedicated engineering capabilities, agile collaboration, and reliable primary and alternative support channels across the entire product lifecycle."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={myImage}
                            className="img-fluid rounded b-shadow-a"
                            alt="Creonex Studio"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="about-info my-4 p-3 bg-light rounded border">
                      <p className="mb-2">
                        <strong style={{ color: "#1e1e24" }}>Brand: </strong>
                        <span style={{ color: "#4e4e4e" }}>Creonex</span>
                      </p>
                      <p className="mb-2">
                        <strong style={{ color: "#1e1e24" }}>Profile: </strong>
                        <span style={{ color: "#4e4e4e" }}>Digital Solutions & Web Engineering</span>
                      </p>
                      <p className="mb-2">
                        <strong style={{ color: "#1e1e24" }}>Primary Email: </strong>
                        <a href="mailto:contact@creonex.com" style={{ color: "#0078ff" }}>
                          contact@creonex.com
                        </a>
                      </p>
                      <p className="mb-2">
                        <strong style={{ color: "#1e1e24" }}>Alternative Email: </strong>
                        <a href="mailto:support@creonex.com" style={{ color: "#28a745" }}>
                          support@creonex.com
                        </a>
                      </p>
                      <p className="mb-0">
                        <strong style={{ color: "#1e1e24" }}>Direct Line: </strong>
                        <a href="tel:+15552345678" style={{ color: "#4e4e4e" }}>
                          +1 (555) 234-5678
                        </a>
                      </p>
                    </div>

                    <div className="skill-mf">
                      <p className="title-s font-weight-bold mb-3" style={{ fontSize: "1.1rem" }}>
                        Core Competencies
                      </p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Creonex</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
