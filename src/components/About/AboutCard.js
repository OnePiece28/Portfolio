import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi everyone! I’m <span className="purple">Rohit Gupta</span> from{" "}
            <span className="purple">Mumbai, India</span>.
            <br />
            I’m a passionate <span className="purple">Software Developer</span> seeking
            opportunities in <span className="purple">product-based companies</span>.
            <br />
            <br />
            I am currently pursuing my <span className="purple">B.Tech in Computer Science Engineering</span>.
            <br />
            <br />
            I specialize in building scalable and user-focused web applications using the{" "}
            <span className="purple">MERN stack</span>, and I actively explore{" "}
            <span className="purple">AI and cloud technologies</span>.
            <br />
            <br />
            Outside of coding, I enjoy solving DSA problems, participating in hackathons,
            and continuously learning new technologies.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving DSA & Competitive Programming Challenges 🧠
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Projects & Exploring New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons & Tech Communities 🌐
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building scalable solutions that create real-world impact."{" "}
          </p>
          <footer className="blockquote-footer">Rohit Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
