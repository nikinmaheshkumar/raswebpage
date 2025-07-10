import React from "react";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-transparent text-white">
      <div className="max-w-7xl mx-auto py-10 px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-start justify-between">
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4">
              <img src="/ras-footer-Photoroom.png" alt="footer logo" className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"/>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  IEEE RAS
                </h3>
                <p className="text-gray-300 text-sm">VIT Student Chapter</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Advancing robotics and automation through innovation, education, and collaboration.
              Join us in shaping the future of technology.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <h4 className="text-xl font-semibold text-pink-300">Get In Touch</h4>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/ieee-ras-vit/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 group"
              >
                <FaLinkedinIn className="text-lg group-hover:text-white" />
              </a>
              <a
                href="mailto:ieeeras@vit.ac.in"
                target="_blank"
                rel="noreferrer"
                aria-label="Gmail"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-red-500 hover:scale-110 transition-all duration-300 group"
              >
                <AiOutlineMail className="text-lg group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/ieeerasvit?igsh=MWplNGRpOHhpNjQwZg=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-110 transition-all duration-300 group"
              >
                <AiFillInstagram className="text-lg group-hover:text-white" />
              </a>
            </div>
          </div>
          <div className="space-y-6 flex flex-col items-center md:items-end text-center md:text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                  <AiOutlineMail className="text-pink-300" />
                </div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href="mailto:ieeeras@vit.ac.in" className="text-white hover:text-pink-300 transition-colors">
                    ieeeras@vit.ac.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                  <FaPhone className="text-pink-300" />
                </div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">Phone</p>
                  <div className="space-y-1">
                    <a href="tel:+917678673442" className="block text-white hover:text-pink-300 transition-colors">
                      +91 76786 73442
                    </a>
                    <a href="tel:+919566635820" className="block text-white hover:text-pink-300 transition-colors">
                      +91 95666 35820
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                  <FaMapMarkerAlt className="text-pink-300" />
                </div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white">VIT University, Vellore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t-2 border-white/10">
          <div className="w-full flex justify-center items-center">
            <div className="w-full text-center">
              <p className="text-gray-300 text-sm">
                Designed and Developed by IEEE RAS - VIT Student Chapter
              </p>
              <p className="text-gray-400 text-xs mt-1">
                &copy; {year} IEEE RAS. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
