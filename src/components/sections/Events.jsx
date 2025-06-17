import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";

function Events() {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    // Update baseWidth and baseHeight when window resizes
    function handleResize() {
      setWidth(window.innerWidth * 0.9);
      setHeight(window.innerHeight * 0.8);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{ height: `${height}px`, position: "relative" }}
        className="flex justify-center items-center flex-col">
          <h1 className="text-3xl sm:text-5xl text-white font-bold mb-6">
            Events
          </h1>
        <Carousel
          baseWidth={width}
          autoplay={true}
          autoplayDelay={4000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </>
  );
}

export default Events;
