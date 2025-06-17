import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// replace icons with your own if needed
import Reboot from "../../assets/reboot.svg";
import Roboescape from "../../assets/roboescape.svg";

const DEFAULT_ITEMS = [
  {
    title: "Reboot 3.0",
    description: "The sequel to our annual hackathon, REBOOT 3.0, presents an intensive 36-hour event where participants immerse themselves in continuous collaboration. Throughout the hackathon, attendees will be treated to enlightening presentations by esteemed speakers, providing valuable insights. To add excitement and foster creativity, engaging contests will be interspersed, offering a refreshing break from the intense work sessions. The pinnacle of the event will be the evaluation of projects by a panel of distinguished experts, each renowned in their respective fields. Their discerning judgment will culminate in the recognition of the three most innovative ideas conceived from scratch during the hackathon.REBOOT 3.0 promises to be an unparalleled experience, combining relentless innovation, intellectual discourse, and spirited competition to inspire and propel participants towards groundbreaking solutions.",
    id: 1,
    src: Reboot,
  },
  {
    title: "Roboescape",
    description: "Participants immersed themselves in the world of Roboescape, where every moment was filled with excitement. They faced challenging puzzles and mysterious riddles, each one leading to the next level of fun. As they delved deeper, the puzzles became even more intriguing, keeping them engaged and eager for more.Amidst the thrill of the game, participants remained vigilant, ready for any surprises that might come their way. Winners were celebrated with exciting prizes, adding to the excitement of the event.Roboescape offers an extraordinary adventure, seamlessly blending limitless innovation with cherished moments shared among friends and the triumphs over challenges.",
    id: 2,
    src: Roboescape,
  },
  {
    title: "Roboverse",
    description: "Participants immersed themselves in the dynamic world of Roboverse, where every moment sparked creativity and innovation. They tackled thought-provoking challenges and brainstorming sessions, each unlocking new avenues of ideas and solutions. As they delved deeper into the ideathon, the problems presented grew more stimulating, fueling their curiosity and pushing their creative boundaries. Guided by mentors and driven by a shared vision, participants explored diverse perspectives, crafting ideas that had the potential to make a real-world impact. Amidst the excitement of collaborative ideation, participants remained focused, ready to pivot and adapt to new insights. Teams worked tirelessly, blending technical expertise with imaginative thinking, transforming raw concepts into actionable plans. Winning teams were celebrated with prestigious accolades, recognizing their innovative solutions and teamwork. Roboverse offers an extraordinary platform, seamlessly blending limitless imagination with moments of camaraderie, the joy of overcoming challenges, and the pride of creating meaningful change. It’s more than an ideathon; it’s a launchpad for visionaries to shape the future.",
    id: 3,
    src: "https://via.placeholder.com/300x200.png?text=Components",
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0,
      },
    };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${round
        ? "rounded-full "
        : "rounded-[24px] "
        }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${round
                ? "items-center justify-center text-center bg-white/10 border-0"
                : "items-start justify-between bg-white/10 border border-[#222] rounded-[12px]"
                } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div className={`${round ? "mx-auto pt-2" : "mx-auto pt-2"}`}>
                <img
                    src={item.src}
                    alt={item.title}
                    className="img-fluid mx-auto"
                    style={{ maxHeight: "200px" }}
                  />
              </div>
              <div className="p-5">
                <div className="mb-1 font-black text-lg text-white text-center">
                  {item.title}
                </div>
                <p className="text-sm text-white text-pretty mb-2">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div
        className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
          }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transform transition-all duration-500 ease-in-out ${currentIndex % items.length === index
                ? round
                  ? "bg-purple-500 scale-125 shadow-purple-500/50 shadow-md"
                  : "bg-purple-500 shadow-purple-500/50 shadow-md"
                : round
                  ? "bg-purple-300/30"
                  : "bg-gray-500/30"
                }`}

              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
