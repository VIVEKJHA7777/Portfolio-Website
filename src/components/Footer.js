import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode ,SiCodechef } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Vivek Kumar Jha</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} VJ</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/VIVEKJHA7777"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vivek-jha-16b61b226/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://leetcode.com/u/vivekjha07777/"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <SiLeetcode />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/vivek_298"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <SiCodechef />
                </a>
              </li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
