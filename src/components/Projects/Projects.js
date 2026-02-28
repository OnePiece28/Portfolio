import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CollegeQuest from "../../Assets/Projects/CollegeQuest.png";
import CodeVerse from "../../Assets/Projects/CodeVerse.png";
import Gradify from "../../Assets/Projects/Gradify.png";
import Agrivision from "../../Assets/Projects/Agrivision.png";
import Sangam from "../../Assets/Projects/Sangam.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Gradify */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gradify}
              isBlog={false}
              title="Gradify – AI Career Coach"
              description="AI-powered career guidance platform that delivers personalized career recommendations using adaptive assessments and Gemini AI. Built with MERN stack for scalable and user-focused experience."
              ghLink="https://github.com/OnePiece28/Gradify-AI_Carrer_Coach"
              demoLink="https://update-gradify-ai-carrer-coach.vercel.app/"
            />
          </Col>

          {/* Sangam */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sangam}
              isBlog={false}
              title="Sangam – Alumni Networking Platform"
              description="AI-enabled web platform connecting alumni, students, and institutes with mentorship matching, job postings, events, and donation tracking. Developed for Smart India Hackathon 2025 (SIH25017)."
              ghLink="https://github.com/OnePiece28/Sangam"
              demoLink="https://clean-sangam.vercel.app/"
            />
          </Col>

          {/* CodeVerse */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodeVerse}
              isBlog={false}
              title="CodeVerse"
              description="Developer-centric social platform focused on real code collaboration, project sharing, and meaningful networking. 
              Built using MERN stack with modern UI."
              ghLink="https://github.com/OnePiece28/Code-Verse"
              demoLink="https://code-verse-phi.vercel.app/sign-in"
            />
          </Col>

          {/* AgriVision */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agrivision}
              isBlog={false}
              title="AgriVision – Crop Recommendation"
              description="Machine learning-based crop recommendation system that suggests optimal crops based on soil and environmental parameters."
              ghLink="https://github.com/OnePiece28/AgriVision-Crop-Recommendation"
              demoLink="https://agrivision-focus-on-crop-monitoring-and-weather-forecasting-bm.streamlit.app/"
            />
          </Col>

          {/* College Quest */}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={CollegeQuest}
                isBlog={false}
                title="College Quest"
                description="Web application that helps students explore colleges, compare courses, and discover scholarship opportunities through an intuitive and searchable interface."
                ghLink="https://github.com/OnePiece28/College-Quest"
                demoLink="https://college-quest-new.vercel.app/index.html#contact"
              />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
