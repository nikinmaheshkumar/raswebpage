import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import './NavBar.css';  // Make sure to use the correct path to your CSS file

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlinePicture,
  AiOutlineTeam,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

import { BsRobot } from "react-icons/bs";

import { LuContact } from "react-icons/lu";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky-navbar" : "navbar"}
      style={{ transition: "background 0.3s ease" }}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto me-auto"
            defaultActiveKey="#home"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <AiOutlineHome style={{ marginBottom: "2px", fontSize: "1.5rem" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <BsRobot style={{ marginBottom: "2px", fontSize: "1.5rem" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/event"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px", fontSize: "1.5rem" }} /> Events
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/gallery"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <AiOutlinePicture style={{ marginBottom: "2px", fontSize: "1.5rem" }} /> Gallery
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blog"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <CgFileDocument style={{ marginBottom: "2px", fontSize: "1.5rem" }} /> Blogs & Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/board"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <AiOutlineTeam style={{ marginBottom: "2px", fontSize: "1.5rem" }} /> Board
              </Nav.Link>
            </Nav.Item>

            

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <LuContact style={{ marginBottom: "2px", fontSize: "1.5rem" }} /> Contact us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
