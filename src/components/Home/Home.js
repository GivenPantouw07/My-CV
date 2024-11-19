import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/given2.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const Home = () => {
  const [home, setHome] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home");
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {home.text1}
                <span className="wave" role="img" aria-labelledby="wave">
                  {home.emot}
                </span>
              </h1>

              <h1 className="heading-name">
                {home.text2}
                <strong className="main-name"> {home.text3}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
};

export default Home;
