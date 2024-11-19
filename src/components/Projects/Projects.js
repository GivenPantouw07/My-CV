import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.jpeg";
import project6 from "../../Assets/Projects/project6.png";

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
              imgPath={project1}
              isBlog={false}
              title="System Analysis and Design"
              description="Developed a new booking checking system system to improve work efficiency and customer experience customer experience at Starbucks."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Academic English Writing III"
              description="Social media has become a fundamental part of daily life and is widely used for socializing and business purposes. Platforms like Facebook, X, and Instagram connect millions of active users worldwide, fostering communication and information sharing. However, as their popularity grows, these platforms have also become major targets for cyberattacks."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Business Process Reengeneering"
              description=" The end result of the research will be strategic recommendations to minimize operational errors, improve efficiency, and optimize processes by considering limited resources."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="Web Design"
              description="Making a web for e-commerce."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="Bimble to new Student"
              description="Teaching new student especially in Computer Programming."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6}
              isBlog={false}
              title="Data Mining and Warehousing"
              description="Perform training on election data (datapemilukpu.xls) using Decision Tree (C4.5), Naive Bayes, K-Nearest Neighbor, RandomForest, Logistic Regression algorithms. Split the data with a ratio of 80:20. Test using 10 fold Xvalidation, determine the best algorithm."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
