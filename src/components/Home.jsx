import React, { useEffect, useRef } from "react";

import About from "../components/sections/About";
import Events from "../components/sections/Events";
import Blogs from "../components/sections/Blogs";
import Projects from "../components/sections/Projects";
import Board from "../components/sections/Board";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";


function Home({ scrollToElement }) {
  // Create refs for each section
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const blogsRef = useRef(null);
  const projectRef = useRef(null);
  const boardRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll when a route requests it
  useEffect(() => {
    const scrollTo = (ref) => {
      if (ref && ref.current) {
        window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
      }
    };
    if (scrollToElement) {
      if (scrollToElement === "about") scrollTo(aboutRef);
      if (scrollToElement === "events") scrollTo(eventsRef);
      if (scrollToElement === "blogs") scrollTo(blogsRef);
      if (scrollToElement === "board") scrollTo(boardRef);
      if (scrollToElement === "gallery") scrollTo(galleryRef);
      if (scrollToElement === "contact") scrollTo(contactRef);
    }
  }, [scrollToElement]);

  return (
    <section>
      <h1 className="text-center text-3xl text-white"> Home</h1>

      <div ref={aboutRef} style={{ marginBottom: "100px" }}>
        <About />
      </div>

      <div ref={eventsRef} style={{ marginBottom: "100px" }}>
        <Events />
      </div>

      <div ref={blogsRef} style={{ marginBottom: "100px" }}>
        <Blogs />
      </div>

      <div ref={projectRef} style={{ marginBottom: "100px" }}>
        <Projects />
      </div>

      <div ref={boardRef} style={{ marginBottom: "100px" }}>
        <Board />
      </div>

      <div ref={galleryRef} style={{ marginBottom: "100px" }}>
        <Gallery />
      </div>

      <div ref={contactRef} style={{ marginBottom: "100px" }}>
        <Contact />
      </div>
    </section>
  );
}

export default Home;
