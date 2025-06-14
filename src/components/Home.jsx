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
          { opacity: 0, y: 100 },
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
      <div className="sm:pt-28 pt-4">
        <div className="flex flex-col sm:flex-row max-h-auto max-w-[90%] mx-auto bg-gray-100/10 backdrop-blur-md border border-gray-100/30 shadow-md rounded-lg sm:py-4">

          <div className="flex flex-col items-start justify-center py-10 px-6 sm:w-1/2">
            {/* Title */}
            <h1 className="text-md sm:text-3xl font-semibold text-gray-100 mb-4 font-[Goldman]">
              Welcome to
            </h1>

            {/* Main Heading with Animated Gradient Text */}
            <h1 className="text-2xl sm:text-5xl font-medium animate-gradient leading-tight font-[Orbitron] text-shadow-lg">
              IEEE - Robotics and <br /> Automation Society - VIT
            </h1>


            {/* Split Text or Animated Text */}
            <SplitText
              text="Here Innovation Sparks, Solutions Unfold with AI and Robotics"
              className="text-md font-semibold text-gray-100 mt-6 leading-relaxed max-w-lg sm:text-2xl font-[Goldman]"
              delay={200}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

          {/* Model Viewer Section */}
          <div className="flex items-center justify-center sm:w-1/2 p-6">
            <model-viewer
              src="src/models/basic_robot_arm.glb"
              alt="A 3D robot"
              autoplay
              // camera-controls
              className="w-full h-55 sm:h-120 md:h-100"
            ></model-viewer>
          </div>
        </div>
      </div>

      {/* Sections with spacing */}
      <div ref={aboutRef} id="about" className="scroll-mt-[100px] mt-20">
        <About />
      </div>

      <div ref={eventsRef} id="events" className="scroll-mt-[100px] mt-20">
        <Events />
      </div>

      <div ref={galleryRef} id="gallery" className="scroll-mt-[100px] mt-20">
        <Gallery />
      </div>

      <div ref={blogsRef} id="blog" className="scroll-mt-[100px] mt-20">
        <Blogs />
      </div>

      <div ref={boardRef} id="board" className="scroll-mt-[100px] mt-20">
        <Board />
      </div>

      <div ref={contactRef} id="contact" className="scroll-mt-[100px] mt-20">
        <Contact />
      </div>
    </section>
  );
}

export default Home;
