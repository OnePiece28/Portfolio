import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate <b className="purple">Software Developer</b> who enjoys turning ideas into impactful, user-centric applications. I focus on building reliable and scalable web solutions that solve real-world problems.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C++, Node.js, Express.js, and MongoDB{" "}
                </b>
              </i>
              — and I enjoy working across both frontend and backend development.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Web Applications, AI-Driven Platforms,{" "}
                </b>
              </i>
              and continuously improving my problem-solving skills through Data Structures & Algorithms.
              <br />
              <br />
              Whenever possible, I love building projects using
              <b className="purple"> the MERN stack </b> and exploring
              <i>
                <b className="purple"> AI and cloud technologies</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
