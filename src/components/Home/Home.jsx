import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Events from "./Events";
import Board from "./Board";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Projects from "./Projects";
import './Home.css';
import aiImg from "../../assets/Home/robo1-Photoroom.png";

function Home({ scrollToElement }) {
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const boardRef = useRef(null);
  const galleryRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const scrollToRef = (ref, offset = 0) => {
      if (ref && ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop - offset,
          behavior: "smooth",
        });
      }
    };

    switch (scrollToElement) {
      case "about":
        scrollToRef(aboutRef);
        break;
      case "events":
        scrollToRef(eventsRef, 60);
        break;
      case "board":
        scrollToRef(boardRef, 60);
        break;
      case "gallery":
        scrollToRef(galleryRef, 60);
        break;
      case "projects":
        scrollToRef(projectsRef, 60);
        break;
      case "contact":
        scrollToRef(contactRef, 60);
        break;
      default:
        scrollToRef();
        break;
    }
  }, [scrollToElement]);

  return (
    <section>
      <Particle />
      <Container fluid className="home-section" id="home">
        <Container fluid className="home-content">
          <Row className="justify-content-between align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ fontSize: "2.5vw" }}>
                Welcome to
              </h1>
              <h1 className="heading-name">
                <strong className="main-name">IEEE - Robotics and Automation Society - VIT</strong>
              </h1>
              <div className="typing-wrapper">
                <div className="typing-content">
                  <span className="typing-text line1">Here Innovation Sparks,</span>
                  <span className="typing-text line2">Solutions Unfold with AI and Robotics</span>
                </div>
              </div>
            </Col>
            <Col md={5} className="home-img">
              <img src={aiImg} alt="AI and Robotics" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>

      <div ref={aboutRef}>
        <Home2 />
      </div>

      <div ref={eventsRef}>
        <Events />
      </div>

      

      <div ref={galleryRef}>
        <Gallery />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={boardRef}>
        <Board />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </section>
  );
}

export default Home;
