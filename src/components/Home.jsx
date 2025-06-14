import React, { useEffect, useRef } from "react";
import About from "../components/sections/About";
import Events from "../components/sections/Events";
import Blogs from "./sections/Blogs";
import Board from "../components/sections/Board";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";
import "@google/model-viewer";
import SplitText from "../components/SplitText/SplitText";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Home() {
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const blogsRef = useRef(null);
  const boardRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  // Animate on scroll
  useEffect(() => {
    [aboutRef, eventsRef, blogsRef, boardRef, galleryRef, contactRef].forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {opacity: 0, y: 100},
          {
           opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 70%", // when section reaches 80% from the top
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="home">
      {/* Hero Section */}
      <div className="pt-28">
        <div className="flex items-center min-h-5xl max-w-[90%] mx-auto bg-gray-100/10 backdrop-blur-md border border-gray-100/30 shadow-md rounded-lg">
            <div className="flex flex-col items-start justify-center py-20 px-12">
              {/* Title */}
              <h1 className="text-4xl font-semibold text-gray-100 mb-4">
                Welcome to
              </h1>

              {/* Main Heading */}
              <h1 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500 leading-tight">
                IEEE - Robotics and <br /> Automation Society - VIT
              </h1>

              {/* Split Text or Animated Text */}
              <SplitText
                text={`Here Innovation Sparks,\n Solutions   Unfold with AI and Robotics`}
                className="text-2xl font-semibold text-gray-100 mt-6 leading-relaxed max-w-2xl"
                delay={200}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{opacity: 0, y: 40}}
                to={{opacity: 1, y: 0}}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            </div>

            {/* Model Viewer */}
            <model-viewer
              src="src/models/basic_robot_arm.glb"
              alt="A 3D robot"
              autoplay
              // camera-controls
              style={{ width: "100%", height: "500px" }}>
            </model-viewer>
          </div>
      </div>

      {/* Sections with refs for ScrollTrigger */}
      <div ref={aboutRef} id="about" className="scroll-mt-[100px]">
        <About />
      </div>

      <div ref={eventsRef} id="events" className="scroll-mt-[100px]">
        <Events />
      </div>

      <div ref={galleryRef} id="gallery" className="scroll-mt-[100px]">
        <Gallery />
      </div>
      <div ref={blogsRef} id="blog" className="scroll-mt-[100px]">
        <Blogs />
      </div>

      <div ref={boardRef} id="board" className="scroll-mt-[100px]">
        <Board />
      </div>


      <div ref={contactRef} id="contact" className="scroll-mt-[100px]">
        <Contact />
      </div>
    </section>
  );
}

export default Home;
