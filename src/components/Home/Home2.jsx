import React from "react";
import { Container } from "react-bootstrap";
import "./Home2.css"; // Import CSS file

function Home2() {
  return (
    <Container fluid className="home-about">
      <Container>
        <div className="home-about-box">
          <h1 className="about-title">
            ABOUT <span className="purple"> IEEE-RAS </span>
          </h1>
          <h3 className="about-subtitle">Nurturing the Tech Enthusiasts</h3>
          <p className="home-about-body">
            IEEE - Robotics and Automation (RAS) is a student chapter situated at Vellore Institute of Technology (VIT), Vellore.
            Our members hail from diverse disciplines but share a fervent passion for cutting-edge computational practices and
            precision robotics. Together, we form a strong community of engineering students.
            We've successfully completed numerous significant projects and organized a variety of technical events within the university.
            Driven by our commitment to innovation, we actively engage with fellow inventors and enthusiasts through our lively online community.
            Additionally, we prioritize the development of skills among our junior members through workshops and hands-on sessions covering various technical domains.
            <br />
            As a result of our continuous efforts, IEEE-RAS has come up to be one of the nominees for best technical club and chapter and also the
            leading international student chapters here in VIT.
            <br />
            <br />
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default Home2;
