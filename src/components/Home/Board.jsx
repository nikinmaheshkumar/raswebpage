import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BoardCard from "./BoardCards";
import SeniorCore from "./SeniorCore";
import Particle from "../Particle";
import faculty from "../../assets/Home/faculty.png";
import darrin from "../../assets/Home/Darrin.png";
import anvi from "../../assets/Home/anvi.png";
import vasu from "../../assets/Home/vasu.png";
import sparsh from "../../assets/Home/sparsh.png";
import khyati from "../../assets/Home/khyati.png";
import namratha from "../../assets/Home/namratha.png";
import divyal from "../../assets/Home/divyal.png";
import ayushmaan from "../../assets/Home/ayushmaan.png";
import kamya from "../../assets/Home/kamya.png";
import swastika from "../../assets/Home/swastika.png";
import anupam from "../../assets/Home/anupam.png";
import damini from "../../assets/Home/damini.png";
import dheeraj from "../../assets/Home/dheeraj.png";
import hari from "../../assets/Home/hari.png";
import harshavardhan from "../../assets/Home/harshavardhan.png";
import jacob from "../../assets/Home/jacob.png";
import jasmeet from "../../assets/Home/jasmeet.png";
import karan from "../../assets/Home/karan.png";
import miruthula from "../../assets/Home/miruthula.png";
import monish from "../../assets/Home/monish.png";
import nikin from "../../assets/Home/nikin.png";
import sanjushree from "../../assets/Home/sanjushree.png";
import sharan from "../../assets/Home/sharan.png";
import shrikar from "../../assets/Home/shrikar.png";
import sriram from "../../assets/Home/sriram.png";
import taher from  "../../assets/Home/taher.png";





function Board() {
  return (
    <Container fluid className="home-board-section">
      <Particle />
      <Container>
        {/* Faculty Section */}
        <div className="text-center mb-5">
          <h1 className="purple mb-4">FACULTY</h1>
          <div className="d-flex justify-content-center">
            <BoardCard imgPath={faculty} title="Sumit Kumar Jindal" description="" />
          </div>
        </div>

        {/* Board Section */}
        <div className="text-center mb-5">
          <h1 className="purple mb-4">BOARD</h1>
          
          <Row className="g-4 justify-content-center">
            {[
              { imgPath: darrin, title: "Darrin Bright", description: "Chairperson" },
              { imgPath: anvi, title: "Anvi Kapoor", description: "Vice-Chairperson" },
              { imgPath: vasu, title: "Vasu Johri", description: "Secretary" },
              { imgPath: sparsh, title: "Sparsh Srivastava", description: "Co-Secretary" },
              { imgPath: khyati, title: "Khyati Kejriwal", description: "Technical Head" },
              { imgPath: namratha, title: "Namratha K", description: "Design Head" },
              { imgPath: divyal, title: "Divyal Gupta", description: "Finance Head" },
              { imgPath: ayushmaan, title: "Ayushmaan Mishra", description: "Events Head" },
              { imgPath: kamya, title: "Kamya Mittal", description: "Management Head" },
              { imgPath: swastika, title: "Swastika Mishra", description: "HR Head" },
            ].map((member, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <BoardCard imgPath={member.imgPath} title={member.title} description={member.description} />
              </Col>
            ))}
          </Row>
        </div>
        
        {/* Board Section */}
        <div className="text-center mb-5">
          <h1 className="purple mb-4">SENIOR CORE</h1>
          
          <Row className="g-4 justify-content-center">
            {[
              { imgPath: anupam, title: "Anupam Hari", description: "Embedded Lead" },
              { imgPath: monish, title: "Monish Kumar", description: "Embedded Lead" },
              { imgPath: sharan, title: "Sharan", description: "Events Lead" },
              { imgPath: damini, title: "Damini K", description: "Events Lead" },
              { imgPath: taher, title: "Taher", description: "Events Lead" },
              { imgPath: dheeraj, title: "Dheeraj V P", description: "Web Dev Lead" },
              { imgPath: nikin, title: "Nikin", description: "Web Dev Lead" },
              { imgPath: hari, title: "Harisarvesh", description: "Finance Lead" },
              { imgPath: karan, title: "Karan Parekh", description: "Finance Lead" },
              { imgPath: harshavardhan, title: "Harshavardhan", description: "Marketing Lead" },
              { imgPath: jacob, title: "Jacob Thomas", description: "Design Lead" },
              { imgPath: jasmeet, title: "Jasmeet", description: "AI/ML Lead" },
              { imgPath: sanjushree, title: "Sanjushree", description: "AI/Ml Lead" },
              { imgPath: shrikar, title: "Shrikar", description: "Mechatronics Lead" },
              { imgPath: miruthula, title: "Miruthula", description: "Editoral Lead" },
              { imgPath: sriram, title: "Sriram", description: "Editoral Lead" },
              ].map((member, index) => (
              <Col key={index} xs={8} sm={6} md={4} lg={2}>
                <SeniorCore imgPath={member.imgPath} title={member.title} description={member.description} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );  
}

export default Board;
