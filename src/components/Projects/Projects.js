import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chat from "../../Assets/Projects/chat.png";
import suicide from "../../Assets/Projects/suicide.png";
import weather from "../../Assets/Projects/weather.png";
import Grocery from "../../Assets/Projects/Grocery.png"

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat App"
              description="This project is a real-time chat application built using Node.js for managing user interactions, messages, and user authentication using JWT."
              ghLink="https://github.com/VIVEKJHA7777/CHAT_APP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Grocery}
              isBlog={false}
              title="Grocery Website"
              description="A static grocery website using HTML, CSS, and JavaScript. This project allowed me to showcase my skills in front-end web development and create an interactive and user-friendly interface."
              ghLink="https://github.com/VIVEKJHA7777/Grocery-website"
              demoLink="https://vivekjha7777.github.io/Grocery-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="This is an HTML project made for displaying weather condition for a particular city or country. This app display the temperature, wind speed and weather condition like rain, snow ,haze etc for a particular city and country."
              ghLink="https://github.com/VIVEKJHA7777/WeatherApp"
              demoLink="https://vivekjha7777.github.io/WeatherApp/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
