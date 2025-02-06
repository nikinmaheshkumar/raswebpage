import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.css';
import rasFooterLogo from '../assets/Home/ras-footer-Photoroom.png';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer text-white py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Logo and Club Description */}
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <div className="d-flex">
              <img
                src={rasFooterLogo}
                alt="IEEE RAS Logo"
                className="footer-logo img-fluid me-3"
                style={{ maxWidth: "150px" }}
              />
              <div>
                <h5 className="mb-2">IEEE Robotics and Automation</h5>
                <p className="mb-0">
                  Follow us on our social media for more updates about events,
                  workshops, and opportunities to grow your technical skills.
                </p>
              </div>
            </div>
          </Col>

          {/* Middle Column: Social Media Links */}
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h5 className="text-center mb-3">Connect With Us</h5>
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/company/ieee-ras-vit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={25} />
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a
                  href="mailto:ieeeras@vit.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Gmail"
                >
                  <AiOutlineMail size={25} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/ieeerasvit?igsh=MWplNGRpOHhpNjQwZg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram size={25} />
                </a>
              </li>
            </ul>
          </Col>

          {/* Right Column: Contact Information */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <h5 className="mb-3">Contact Us</h5>
            <p className="mb-1" style={{ fontSize: "1rem" }}>Email: ieeeras@vit.ac.in</p>
            <p className="mb-0" style={{ fontSize: "1rem" }}>Phone: +91 76786 73442 </p>
            <p className="mb-0" style={{ fontSize: "1rem" }}>  +91 95666 35820</p>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom: Copyright */}
      <Container fluid className="text-center py-3 mt-4 border-top border-light">
        <Row>
          <Col>
            <p className="mb-0">
              Designed and Developed by IEEE RAS - VIT Student Chapter
            </p>
            <p className="mb-0">Copyright &copy; {year} IEEE RAS. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;