import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../assets/Home/leaf.png";
import emotion from "../../assets/Home/emotion.png";
import editor from "../../assets/Home/codeEditor.png";
import chatify from "../../assets/Home/chatify.png";
import suicide from "../../assets/Home/suicide.png";
import bitsOfCode from "../../assets/Home/blog.png";
import arduino from "../../assets/Home/arduino.png";
import lstm from "../../assets/Home/lstm.png"
import meds from "../../assets/Home/meds2.png"

function Projects() {
  return (
    <Container fluid className="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Blogs & Projects</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lstm}
              title="Stock Market Analysis using LSTM"
              description="Predicting stock prices is complex due to market volatility, but LSTM (Long Short-Term Memory) networks excel at capturing long-term dependencies in sequential data. By leveraging LSTMs, we can analyze historical stock prices, uncover patterns, and enhance prediction accuracy, making them a powerful tool for financial analysis."
              mediumLink="https://medium.com/@darrinbright/unraveling-stock-trends-using-lstm-67febf9608e0"
              isBlog
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meds}
              title="Cracking the Medical Data Code: How Multilingual LLMs Unlock Information"
              description="Multilingual LLMs are transforming global healthcare by breaking down language barriers. By processing diverse data formats—structured, unstructured, and image data—these models provide users with accurate medicinal insights in their preferred language, empowering better decision-making and improving access to essential healthcare information."
              mediumLink="https://medium.com/@AmanChauhan786/cracking-the-medical-data-code-how-multilingual-llms-unlock-information-79e2a4f2d04c"
              isBlog
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arduino}
              title="Arduino Controlled Car"
              description="This project involves building an Obstacle-Avoiding Arduino Controlled Car. Using an Arduino Uno board, L298D motor driver, ultrasonic sensor, and DC motors, the car navigates around obstacles. The ultrasonic sensor detects obstacles, and based on the distance, the car adjusts its movements to avoid collisions. If an obstacle is detected, the car stops, moves backward, and then turns based on the available space. This project serves as an introductory lesson for electronics and Arduino enthusiasts, showcasing basic motor control and sensor integration."
              mediumLink="https://medium.com/@kejriwalkhyati/arduino-controlled-car-ab9aa46ad26a"
              isBlog
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              isProject
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              isProject
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              isProject
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              isProject
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              isProject
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
