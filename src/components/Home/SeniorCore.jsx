import React from "react";
import Card from "react-bootstrap/Card";

function SeniorCore(props) {
  return (
    <div className="board-card-container">
      <Card className="board-card-view" style={{ width: "11rem", borderRadius: "12px", background: "rgba(43, 26, 57, 0.755)", border: "2px solid #c770f0" }}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body className="p-3">
          <Card.Title style={{ color: "white", fontSize: "1.1rem" }}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "center", color: "white", fontSize: "0.9rem" }}>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default SeniorCore;
