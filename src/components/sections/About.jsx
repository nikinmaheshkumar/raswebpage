import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { BackgroundGradient } from "../ui/background-gradient";
import { Users, Activity, Award } from "lucide-react";

function About() {
  return (
    <>

      <h1 className="text-4xl font-semibold text-center mt-12 mb-8 text-white">
        About Us 
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        <SpotlightCard className="p-6 rounded-3xl " spotlightColor="rgba(128, 0, 128, 0.30)"> 
          <Users size={40} className="text-white mb-4" />
          <p className="text-xl font-semibold relative z-20 mt-2 text-white">
            ABOUT IEEE-RAS
          </p>
          <div className="text-white mt-4 relative z-20">
            IEEE - Robotics and Automation (RAS) is a student chapter situated at Vellore Institute of Technology (VIT), Vellore.
            Our members hail from diverse disciplines but share a fervent passion for cutting-edge computational practices and
            precision robotics. Together, we form a strong community of engineering students.
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-6 rounded-3xl" spotlightColor="rgba(128, 0, 128, 0.30)"> 
          <Activity size={40} className="text-white mb-4" />
          <p className="text-xl font-semibold relative z-20 mt-2 text-white">
            Our Activities
          </p>
          <div className="text-white mt-4 relative z-20">
            We've successfully completed numerous significant projects and organized a variety of technical events within the university.
            Driven by our commitment to innovation, we actively engage with fellow inventors and enthusiasts through our lively online community.
          </div>
        </SpotlightCard>

        <SpotlightCard className="p-6 rounded-3xl" spotlightColor="rgba(128, 0, 128, 0.30)"> 
          <Award size={40} className="text-white mb-4" />
          <p className="text-xl font-semibold relative z-20 mt-2 text-white">
            Our Impact
          </p>
          <div className="text-white mt-4 relative z-20">
            Additionally, we prioritize the development of skills among our junior members through workshops and hands-on sessions covering various technical domains.
            As a result of our continuous efforts, IEEE-RAS has come up to be one of the nominees for best technical club and chapter and also the leading international student chapters here in VIT.
          </div>
        </SpotlightCard>
      </div>
    </>
  );
}

export default About;
