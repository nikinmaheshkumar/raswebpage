import React, { useState, useEffect } from "react";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {load ? <Preloader /> : (
        <div
          className='min-h-screen bg-[linear-gradient(to_right_bottom,#13121b,#13101d,#130e1f,#130b21,#140822,#170d28,#1a102f,#1e1236,#251944,#2c2053,#332863,#393073)]'
          id="scroll"
      
        >
          <Navbar />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home scrollToElement="about" />} />
            <Route path="/event" element={<Home scrollToElement="events" />} />
            <Route path="/blog" element={<Home scrollToElement="blogs" />} />
            <Route path="/projects" element={<Home scrollToElement="projects" />} />
            <Route path="/board" element={<Home scrollToElement="board" />} />
            <Route path="/gallery" element={<Home scrollToElement="gallery" />} />
            <Route path="/contact" element={<Home scrollToElement="contact" />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />
        </div>
      )}

    </Router>
  );
}

export default App;
