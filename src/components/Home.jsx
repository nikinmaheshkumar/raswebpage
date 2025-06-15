import React, { useEffect, useRef } from "react";
import About from "../components/sections/About";
import Events from "../components/sections/Events";
import Blogs from "./sections/Blogs";
import Board from "../components/sections/Board";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";
import "@google/model-viewer";
import SplitText from "../components/SplitText/SplitText";
import "../styles/index.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Linkedin, PenTool } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const blogsRef = useRef(null);
  const boardRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);
  const particlesRef = useRef(null);

  // Enhanced scroll animations
  useEffect(() => {

    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          delay: 0.5
        }
      );
    }

    // Floating animation for particles
    if (particlesRef.current) {
      gsap.to(particlesRef.current.children, {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        stagger: 0.5,
        repeat: -1,
        yoyo: true
      });
    }

    // Section animations with improved triggers
    [aboutRef, eventsRef, blogsRef, boardRef, galleryRef, contactRef].forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            opacity: 0,
            y: 120,
            scale: 0.95,
            rotationX: 10
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 75%",
              end: "top 25%",
              toggleActions: "play none none reverse",
              scrub: false,
            },
          }
        );
      }
    });

    // Parallax effect for background elements
    gsap.to(".parallax-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-bg",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, []);

  return (
    <section id="home" className="relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 parallax-bg"></div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-purple-400/30 rounded-full blur-sm"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-blue-400/40 rounded-full blur-sm"></div>
        <div className="absolute top-60 left-1/4 w-4 h-4 bg-indigo-400/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-cyan-400/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-purple-400/40 rounded-full blur-sm"></div>
      </div>

      <div className="relative z-10 sm:pt-8 pt-20">
        <div ref={heroRef} className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-16">

          <div className="flex flex-col justify-center lg:w-1/2 space-y-8 lg:pr-12">

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img
                src="src/assets/Untitled.svg"
                alt="IEEE RAS Logo"
                className="relative w-80 sm:w-96 h-auto mix-blend-screen filter drop-shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg blur-sm"></div>
              <SplitText
                text="Here Innovation Sparks, Solutions Unfold with AI and Robotics"
                className="relative text-xl sm:text-2xl lg:text-3xl text-gray-50/90 leading-relaxed max-w-2xl electrolize-font font-light tracking-wide"
                delay={800}
                duration={0.8}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 50, rotationX: 90 }}
                to={{ opacity: 1, y: 0, rotationX: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-6 justify-center items-center">
              <button
                onClick={() => window.location.href = "https://www.instagram.com/ieeerasvit?igsh=MTI4NXdscWt4dmQ3ZQ=="}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F58529_0%,#DD2A7B_25%,#8134AF_50%,#515BD4_75%,#F58529_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-gray-50 backdrop-blur-3xl">
                  <Instagram size={20} color="#F58529" />
                  Follow on Instagram
                </span>
              </button>
              <button
                onClick={() => window.location.href = "https://www.linkedin.com/company/ieee-ras-vit/"}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0077B5_0%,#0A66C2_50%,#004182_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-gray-50 backdrop-blur-3xl">
                  <Linkedin size={20} color="#0077B5" />
                  Connect on LinkedIn
                </span>
              </button>
              <button
                onClick={() => window.location.href = "https://medium.com/@ieeeras"}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#00AB6C_50%,#000000_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-gray-50 backdrop-blur-3xl">
                  <PenTool size={20} color="#00AB6C" />
                  Follow on Medium
                </span>
              </button>

            </div>
          </div>


          <div className="flex items-center justify-center lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">

              <model-viewer
                src="src/models/robot_playground.glb"
                alt="IEEE RAS Robot"
                // auto-rotate
                // camera-controls
                autoplay
                animation-name="Wave"
                shadow-intensity="1"
                className="w-full h-96 md:h-[500px]"
                style={{ width: "500px", height: "500px", background: "transparent" }}>
              </model-viewer>

            </div>
          </div>
        </div>


      </div>

      <div className="relative z-10 space-y-32">
        <div ref={aboutRef} id="about" className="scroll-mt-[100px]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative">
              <div className="absolute -inset-4 "></div>
              <div className="relative  backdrop-blur-sm rounded-3xl p-8 ">
                <About />
              </div>
            </div>
          </div>
        </div>

        <div ref={eventsRef} id="events" className="scroll-mt-[100px]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
                <Events />
              </div>
            </div>
          </div>
        </div>

        <div ref={galleryRef} id="gallery" className="scroll-mt-[100px]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
                <Gallery />
              </div>
            </div>
          </div>
        </div>

        <div ref={blogsRef} id="blog" className="scroll-mt-[100px]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
                <Blogs />
              </div>
            </div>
          </div>
        </div>

        <div ref={boardRef} id="board" className="scroll-mt-[100px]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
                <Board />
              </div>
            </div>
          </div>
        </div>

        <div ref={contactRef} id="contact" className="scroll-mt-[100px] pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;