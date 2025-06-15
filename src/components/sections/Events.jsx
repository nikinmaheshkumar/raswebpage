import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";

function Events() {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    // Update baseWidth and baseHeight when window resizes
    function handleResize() {
      setWidth(window.innerWidth * 0.8);
      setHeight(window.innerHeight * 0.6);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{ height: `${height}px`, position: "relative" }}
        className="flex justify-center items-center mt-120 sm:mt-0 mb-120 sm:mb-0">
        <Carousel
          baseWidth={width}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </>
  );
}

export default Events;
