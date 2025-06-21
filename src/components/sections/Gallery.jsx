import React from "react";
import Masonry from "../Masonry/Masonry";
function Gallery() {
  const items = [
    {
      id: "1",
      img: "https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/1.jpg",
      height: 500,
    },
    {
      id: "2",
      img: "https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/2.jpg",
      height: 600,
    },
    {
      id: "3",
      img: "https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/3.jpg",
      height: 400,
    },
    {
      id: "4",
      img: "https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/4.jpg",
      height: 500,
    },
    {
      id: "5",
      img: "https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/5.jpg",
      height: 300,
    },
    {
      id: "6",
      img: "https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/6.jpg",
      height: 350,
    },
    {
      id: "7",
      img: "src/assets/7.jpg",
      height: 350,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center mb-200">
        <h2 className="text-3xl font-semibold text-gray-100">
          Gallery Section
        </h2>
        <Masonry
          items={items}
          gap={10}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </>
  );
}

export default Gallery;
