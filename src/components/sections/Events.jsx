"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function Events() {
  const DEFAULT_ITEMS = [
    {
      title: "Reboot 3.0",
      longDescription:
        "The sequel to our annual hackathon, REBOOT 3.0, presents an intensive 36-hour event where participants immerse themselves in continuous collaboration. Throughout the hackathon, attendees will be treated to enlightening presentations by esteemed speakers, providing valuable insights. To add excitement and foster creativity, engaging contests will be interspersed, offering a refreshing break from the intense work sessions.The pinnacle of the event will be the evaluation of projects by a panel of distinguished experts, each renowned in their respective fields. Their discerning judgment will culminate in the recognition of the three most innovative ideas conceived from scratch during the hackathon. REBOOT 3.0 promises to be an unparalleled experience, combining relentless innovation, intellectual discourse, and spirited competition to inspire and propel participants towards groundbreaking solutions.",
      shortDescription:
        "REBOOT 3.0 is an intense 36-hour hackathon where innovation meets collaboration. Participants dive into nonstop coding, guided by expert talks and energizing mini-contests. The event wraps up with top projects judged by industry veterans, rewarding the most impactful ideas.",
      id: 1,
      src: "/events/reboot.svg",
    },
    {
      title: "Roboescape",
      shortDescription:
        "Roboescape offered an immersive puzzle-solving adventure filled with brain-teasing challenges and thrilling twists. Participants worked together to solve riddles, unlock levels, and race against time, all while competing for exciting prizes in a fun, high-energy environment.",
      longDescription:
        "Participants immersed themselves in the world of Roboescape, where every moment was filled with excitement. They faced challenging puzzles and mysterious riddles, each one leading to the next level of fun. As they delved deeper, the puzzles became even more intriguing, keeping them engaged and eager for more.Amidst the thrill of the game, participants remained vigilant, ready for any surprises that might come their way. Winners were celebrated with exciting prizes, adding to the excitement of the event.Roboescape offers an extraordinary adventure, seamlessly blending limitless innovation with cherished moments shared among friends and the triumphs over challenges.",
      id: 2,
      src: "/events/roboescape.svg",
    },
    {
      title: "Roboverse",
      shortDescription:
        "Roboverse was a fast-paced ideathon where creativity met purpose. Teams brainstormed real-world solutions under mentor guidance, blending tech skills with big-picture thinking. The event fostered teamwork, innovation, and the drive to make meaningful impact, with top ideas earning accolades.",
      longDescription:
        "Participants immersed themselves in the dynamic world of Roboverse, where every moment sparked creativity and innovation. They tackled thought-provoking challenges and brainstorming sessions, unlocking new ideas and solutions. As the ideathon progressed, the problems grew more stimulating, pushing their curiosity and creative boundaries. Guided by mentors and united by a shared vision, teams explored diverse perspectives to craft ideas with real-world impact. Amidst the excitement of collaboration, participants stayed focused and adaptable, blending technical skills with imagination to turn raw concepts into actionable plans. Winning teams were recognized with prestigious accolades for their innovation and teamwork. Roboverse is more than an ideathon—it’s a launchpad for visionaries, blending imagination, camaraderie, and the joy of solving meaningful challenges.",
      id: 3,
      src: "/events/roboverse.jpg",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 py-3">
      <h1 className="text-4xl sm:text-5xl font-semibold text-center mt-6 mb-8 text-white">
        Events
      </h1>

      <div className="relative w-full flex justify-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
          opts={{
            loop: true,
            align: "center",
          }}
        >
          <CarouselPrevious className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 lg:left-10 text-white border-white/30 z-10" />
          <CarouselContent>
            {DEFAULT_ITEMS.map((items) => (
              <CarouselItem
                key={items.id}
                className="w-full flex justify-center"
              >
                <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-sm border-white/20 flex flex-col min-h-[500px]">
                  {items.src && (
                    <CardContent className="pt-6 pb-2 flex justify-center items-center">
                      <div className="w-48 h-36 flex items-center justify-center">
                        <img
                          src={items.src}
                          alt={items.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </CardContent>
                  )}
                  <CardHeader className="text-center px-6 flex-grow flex flex-col justify-center items-center">
                    <CardTitle className="text-white mb-4 text-center text-2xl">
                      {items.title}
                    </CardTitle>
  
                    <CardDescription className="text-white/80 leading-relaxed whitespace-pre-wrap hidden md:block text-center text-base">
                      {items.longDescription}
                    </CardDescription>

                    <CardDescription className="text-white/80 leading-relaxed whitespace-pre-wrap block md:hidden text-center text-md">
                      {items.shortDescription}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 lg:right-10 text-white border-white/30 z-10" />
        </Carousel>
      </div>
    </div>
  );
}

export default Events;