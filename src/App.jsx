import React, { useState, useEffect } from "react";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {load ? <Preloader /> : (
        <div
          className='min-h-screen bg-gradient-to-br from-[#13121b] via-[#1e1236] to-[#393073]
'
          id="scroll"
      
        >
          <Navbar />
          

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" />
            <Route path="/event"  />
            <Route path="/blog" />
            <Route path="/board"  />
            <Route path="/gallery" />
            <Route path="/contact"  />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </div>
      )}

    </Router>
  );
}

export default App;
