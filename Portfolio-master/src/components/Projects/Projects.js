import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import qkart from "../../Assets/Projects/qkart.png";
import qtrip from "../../Assets/Projects/qtrip.png";
import XBoard from "../../Assets/Projects/XBoard.png";

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
              imgPath={qkart}
              title="Qkart"
              description={
                <div>
                  <p>
                    QKart is an e-commerce application offering a variety of
                    products for customers to choose from. During the course of
                    this project,
                  </p>
                  <ul>
                    <li>
                      Implemented the corelogic for authentication, shopping
                      cart, and checkout.
                    </li>
                    <li>
                      Improved UI by adding responsive design elements for a
                      uniform experience across different devices.
                    </li>
                    <li>
                      Utilized REST APIs to dynamically load and render data
                      served by the backend server.
                    </li>
                  </ul>
                </div>
              }
              demoLink="https://qkartsantamk.netlify.app/"
              details="https://www.crio.do/learn/portfolio/santtamk/ME_QKART_FRONTEND_V2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qtrip}
              title="Qtrip"
              description={
                <div>
                  <p>
                    QTrip is a travel website aimed at travellers looking for a
                    multitude of adventures in different cities. During the
                    course of this project,
                  </p>
                  <ul>
                    <li>
                      Created web pages using HTML and CSS and made them dynamic
                      using JavaScript
                    </li>
                    <li>
                      Improved UX with multi-select filters, image carousels
                    </li>
                    <li>
                      Utilised localStorage to persist user preferences at
                      client-side
                    </li>
                  </ul>
                </div>
              }
              demoLink="https://magnificent-mermaid-156005.netlify.app/"
              details="https://www.crio.do/learn/portfolio/santtamk/ME_QTRIPDYNAMIC/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={XBoard}
              title="XBoard"
              description={<div>
              <p>
              XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.
              During the course of this project,
              </p>
              <ul>
                <li>
                Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch
                </li>
                <li>
                Used Accordions and Image Carousel to improve UI
                </li>
                <li>
                Fetched news content from flipboard's RSS feed using REST API
                </li>
              </ul>
            </div>}
              details="https://www.crio.do/learn/portfolio/santtamk/ME_BUILDOUT_XBOARD/"
              demoLink="https://6464fa117c0b5d09ea93c603--santamk-xborad.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
