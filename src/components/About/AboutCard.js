import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vivek Kumar Jha </span>
            from <span className="purple"> Delhi</span>
            <br />
            I am currently a final-year B.Tech student majoring in Computer Science Engineering at LPU.
            <br />
            Passionate about web development, I've mastered HTML, CSS, and JavaScript, creating seamless digital experiences. As a 3-star coder at CodeChef, I thrive on challenges, honing my problem-solving skills
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't Blame the Distractions, Improve Your Focus"{" "}
          </p>
          <footer className="blockquote-footer">Vivek Kumar Jha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
