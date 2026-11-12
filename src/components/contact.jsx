import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      routing: "primary",
      subject: "",
      message: "",
      submitted: false,
      sending: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ sending: true });
    // Simulate real-time submission response
    setTimeout(() => {
      this.setState({
        submitted: true,
        sending: false,
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 600);
  };

  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    {/* Left Column: Interactive Contact Form */}
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        {this.state.submitted && (
                          <div
                            id="sendmessage"
                            className="show alert alert-success"
                            style={{ display: "block" }}
                          >
                            <strong>Message Received!</strong> Thank you for reaching out to <strong>Creonex</strong>. Our team will review your message and reply via your preferred channel within 24 hours (or within 2 hours for urgent support).
                          </div>
                        )}

                        <form
                          action="https://formspree.io/xdoeonlo"
                          method="POST"
                          className="contactForm"
                          onSubmit={this.handleSubmit}
                        >
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <label htmlFor="name" className="text-muted small font-weight-bold">
                                  YOUR NAME *
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="e.g. Alex Morgan"
                                  required
                                  value={this.state.name}
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>

                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <label htmlFor="email" className="text-muted small font-weight-bold">
                                  YOUR EMAIL ADDRESS *
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="e.g. alex@example.com"
                                  required
                                  value={this.state.email}
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>

                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <label htmlFor="routing" className="text-muted small font-weight-bold">
                                  COMMUNICATION CHANNEL / ROUTING
                                </label>
                                <select
                                  name="routing"
                                  id="routing"
                                  className="form-control"
                                  value={this.state.routing}
                                  onChange={this.handleChange}
                                >
                                  <option value="primary">
                                    Primary Channel — Studio Inquiries & New Projects (contact@creonex.com)
                                  </option>
                                  <option value="alternative_rfp">
                                    Alternative Channel — RFPs, Proposals & Partnerships (inquiries@creonex.com)
                                  </option>
                                  <option value="urgent_support">
                                    Alternative Desk — Urgent Technical & Client SLA Support (support@creonex.com)
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <label htmlFor="subject" className="text-muted small font-weight-bold">
                                  SUBJECT *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="e.g. Project Consultation / System Modernization"
                                  required
                                  value={this.state.subject}
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>

                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <label htmlFor="message" className="text-muted small font-weight-bold">
                                  PROJECT DETAILS / MESSAGE *
                                </label>
                                <textarea
                                  className="form-control"
                                  name="message"
                                  id="message"
                                  rows="5"
                                  placeholder="Tell us about your project requirements, timeline, or support inquiry..."
                                  required
                                  value={this.state.message}
                                  onChange={this.handleChange}
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded w-100"
                                disabled={this.state.sending}
                              >
                                {this.state.sending ? "Routing Message..." : "Send Message to Creonex"}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* Right Column: Primary & Alternative Contact Details */}
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead mb-4">
                          Whether you have a new digital initiative, need technical consultation, or require rapid support, <strong>Creonex</strong> provides dedicated, transparent communication channels. Reach out through our primary headquarters or our alternative support desk.
                        </p>

                        {/* Primary Contact Channel Box */}
                        <div
                          className="contact-card mb-4 p-3 bg-light rounded"
                          style={{ borderLeft: "4px solid #0078ff" }}
                        >
                          <h6
                            className="font-weight-bold mb-3"
                            style={{ color: "#0078ff", letterSpacing: "0.5px" }}
                          >
                            <span className="ion-ios-information mr-2"></span>
                            PRIMARY CONTACT CHANNELS
                          </h6>
                          <ul className="list-ico" style={{ fontSize: "0.95rem" }}>
                            <li>
                              <span className="ion-ios-location"></span>
                              <strong>Headquarters:</strong> Creonex Studio, 750 Battery St, Suite 400, San Francisco, CA 94111, USA
                            </li>
                            <li>
                              <span className="ion-ios-telephone"></span>
                              <strong>Direct Phone:</strong>{" "}
                              <a href="tel:+15552345678" style={{ color: "#4e4e4e" }}>
                                +1 (555) 234-5678
                              </a>
                            </li>
                            <li>
                              <span className="ion-email"></span>
                              <strong>Primary Email:</strong>{" "}
                              <a href="mailto:contact@creonex.com" style={{ color: "#0078ff", fontWeight: "600" }}>
                                contact@creonex.com
                              </a>
                            </li>
                            <li>
                              <span className="ion-ios-clock"></span>
                              <strong>Studio Hours:</strong> Monday – Friday: 9:00 AM – 6:00 PM PST
                            </li>
                          </ul>
                        </div>

                        {/* Alternative & Support Contact Channel Box */}
                        <div
                          className="contact-card mb-4 p-3 bg-light rounded"
                          style={{ borderLeft: "4px solid #28a745" }}
                        >
                          <h6
                            className="font-weight-bold mb-3"
                            style={{ color: "#28a745", letterSpacing: "0.5px" }}
                          >
                            <span className="ion-ios-paperplane mr-2" style={{ color: "#28a745" }}></span>
                            ALTERNATIVE & SUPPORT CHANNELS
                          </h6>
                          <ul className="list-ico" style={{ fontSize: "0.95rem" }}>
                            <li>
                              <span className="ion-ios-location" style={{ color: "#28a745" }}></span>
                              <strong>European / Regional Hub:</strong> Creonex Digital Lab, 25 Finsbury Circus, London, EC2M 7EE, UK
                            </li>
                            <li>
                              <span className="ion-ios-telephone" style={{ color: "#28a745" }}></span>
                              <strong>Alternative & Urgent Line:</strong>{" "}
                              <a href="tel:+15559876543" style={{ color: "#4e4e4e" }}>
                                +1 (555) 987-6543
                              </a>{" "}
                              <span className="badge badge-success">24/7 SLA</span>
                            </li>
                            <li>
                              <span className="ion-email" style={{ color: "#28a745" }}></span>
                              <strong>Alternative Email (RFPs & Proposals):</strong>{" "}
                              <a href="mailto:inquiries@creonex.com" style={{ color: "#28a745", fontWeight: "600" }}>
                                inquiries@creonex.com
                              </a>
                            </li>
                            <li>
                              <span className="ion-android-alert" style={{ color: "#28a745" }}></span>
                              <strong>Technical & Urgent Support:</strong>{" "}
                              <a href="mailto:support@creonex.com" style={{ color: "#28a745", fontWeight: "600" }}>
                                support@creonex.com
                              </a>
                            </li>
                            <li>
                              <span className="ion-ios-clock" style={{ color: "#28a745" }}></span>
                              <strong>Alternative Support SLA:</strong> Weekend & On-Call Coverage (Response under 2 hours)
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="socials">
                        <ul className="d-flex align-items-center">
                          <li>
                            <a
                              href="https://github.com/creonex"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Creonex on GitHub"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://linkedin.com/company/creonex"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Creonex on LinkedIn"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/creonex"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Creonex on Twitter / X"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://codepen.io/creonex"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Creonex on CodePen"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-codepen"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://instagram.com/creonex"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Creonex on Instagram"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-instagram"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  <p className="copyright" style={{ marginBottom: "6px", fontSize: "1.05rem" }}>
                    &copy; 2026 <strong>Creonex</strong>. All Rights Reserved.
                  </p>
                  <p className="credits" style={{ fontSize: "0.88rem", opacity: 0.9 }}>
                    Digital Solutions, Software Engineering & High-Performance Web Applications
                  </p>
                  <div className="quick-links" style={{ fontSize: "0.82rem", opacity: 0.85 }}>
                    Primary:{" "}
                    <a href="mailto:contact@creonex.com" style={{ color: "#fff", textDecoration: "underline" }}>
                      contact@creonex.com
                    </a>{" "}
                    &nbsp;|&nbsp; Alternative:{" "}
                    <a href="mailto:support@creonex.com" style={{ color: "#fff", textDecoration: "underline" }}>
                      support@creonex.com
                    </a>{" "}
                    &nbsp;|&nbsp; Direct:{" "}
                    <a href="tel:+15552345678" style={{ color: "#fff" }}>
                      +1 (555) 234-5678
                    </a>{" "}
                    &nbsp;|&nbsp; Alternative Line:{" "}
                    <a href="tel:+15559876543" style={{ color: "#fff" }}>
                      +1 (555) 987-6543
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
