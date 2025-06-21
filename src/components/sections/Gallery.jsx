import React from "react";
import Masonry from "../Masonry/Masonry";
function Gallery() {
  const items = [
    {
      id: "1",
      img: "https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/1.jpg",
      height: 400,
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
      height: 600,
    },
    {
      id: "5",
      img: "https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/5.jpg",
      height: 350,
    },
    {
      id: "6",
      img: "https://19arnab190201.github.io/ieeeRAS/assets/img/gallery/6.jpg",
      height: 400,
    },
    {
      id: "7",
      img: "src/assets/7.jpg",
      height: 500,
    },
    {
      id: "8",
      img: "src/assets/8.jpg",
      height: 500,
    },
    {
      id: "9",
      img: "src/assets/9.jpg",
      height: 350,
    },
    {
      id: "10",
      img: "src/assets/10.jpg",
      height: 300,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-100 mb-5">
          Gallery
        </h2>
        <Masonry
          items={items}
          gap={10}
          ease="power3.out"
          duration={1}
          stagger={0.4}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.9}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </>
  );
}

export default Gallery;
