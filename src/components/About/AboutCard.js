import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Given Azarya Pantouw </span>
            from <span className="purple"> Manado, Indonesia</span>
            <br />
            I am currently a student at University Klabat.
            <br />
            I have completed the 5th semester.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hangout
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "People said we need to chase our dreams, that's why i go sleep
            almost everyday and everywhere."{" "}
          </p>
          <footer className="blockquote-footer">Given</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
