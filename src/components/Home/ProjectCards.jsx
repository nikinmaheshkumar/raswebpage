import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaGithub, FaMedium } from "react-icons/fa";

function ProjectCards(props) {
  const cardStyles = {
    background: "linear-gradient(145deg, #1e1e2f, #25253a)",
    color: "#e6e6e6",
    border: "none",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    position: "relative", // To ensure consistent layout during hover
  };

  const cardHoverStyles = {
    transform: "translateY(-10px) scale(1.03)",
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.4)",
    border: "2px solid #8a2be2", // Purple glowing border
  };

  const imgWrapperStyles = {
    position: "relative",
    overflow: "hidden",
    borderBottom: "3px solid rgba(255, 255, 255, 0.1)",
  };

  const imgStyles = {
    width: "100%",
    height: "auto",
    transition: "transform 0.6s ease",
  };

  const titleStyles = {
    fontSize: "1.6rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#ffbf00",
    textAlign: "center",
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
  };

  const descriptionStyles = {
    textAlign: "justify",
    fontSize: "1rem",
    lineHeight: "1.8",
    flexGrow: 1,
    marginBottom: "20px",
    color: "#ffffff", // White description for better readability
    transition: "color 0.4s ease", // Ensure smooth transition for text color
  };

  const buttonContainerStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "auto",
  };

  const buttonStyles = {
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "12px 24px",
    borderRadius: "10px",
    backgroundColor: "#ff5722", // Bright orange color
    color: "#ffffff",
    border: "none",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const buttonHoverStyles = {
    backgroundColor: "#ff3d00", // Slightly darker orange on hover
    transform: "translateY(-3px)",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.4)",
  };

  const animateCard = (e) => {
    e.currentTarget.style.transition = "transform 0.5s, box-shadow 0.5s";
    Object.assign(e.currentTarget.style, cardHoverStyles);
  };

  const resetCardAnimation = (e) => {
    e.currentTarget.style.transition = "transform 0.4s, box-shadow 0.4s";
    Object.assign(e.currentTarget.style, {
      transform: "none",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
      border: "none",
    });
  };

  return (
    <Card
      style={cardStyles}
      onMouseEnter={animateCard}
      onMouseLeave={resetCardAnimation}
    >
      <div style={imgWrapperStyles}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={imgStyles}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
      <Card.Body>
        <Card.Title style={titleStyles}>{props.title}</Card.Title>
        <Card.Text style={descriptionStyles}>{props.description}</Card.Text>
        <div style={buttonContainerStyles}>
          {props.isBlog && props.mediumLink && (
            <Button
              href={props.mediumLink}
              target="_blank"
              style={buttonStyles}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, buttonHoverStyles)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  backgroundColor: "#ff5722",
                  transform: "none",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                })
              }
            >
              <FaMedium size={20} /> Medium
            </Button>
          )}
          {props.isProject && props.ghLink && (
            <Button
              href={props.ghLink}
              target="_blank"
              style={buttonStyles}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, buttonHoverStyles)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  backgroundColor: "#ff5722",
                  transform: "none",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                })
              }
            >
              <FaGithub size={20} /> GitHub
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
