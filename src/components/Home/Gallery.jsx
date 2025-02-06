import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";

function Gallery() {
  return (
    <Container fluid className="home-gallery-section">
      <Container>
        <h1 className="purple text-center mb-4">Gallery</h1>
        <p className="gallery-subtitle text-center">
          Take a glimpse at our work
        </p>
        <Row className="justify-content-center g-4">
          {[
            "1.jpg",
            "3.jpg",
            "5.jpg",
            "2.jpg",
            "4.jpg",
            "6.jpg",
          ].map((image, index) => (
            <Col sm={12} md={6} lg={4} key={index} className="gallery-card">
              <div className="gallery-image-wrapper">
                <img
                  src={`https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/${image}`}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-image"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Gallery;
