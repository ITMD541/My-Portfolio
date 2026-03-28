import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, Briefcase } from 'lucide-react';
import resume from '../resume/Sai Prashanth Alakuntla.pdf';
import profile from '../assets/pexels-photo.jpeg';


const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-900 flex items-center justify-center px-6 md:px-12 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-emerald-400 uppercase tracking-wide font-medium mb-2">
              Greetings
            </p>

            {/* Full Name in Single Line */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white whitespace-nowrap mb-4">
              Sai Prashanth Alakuntla
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
              Software Engineer
            </h2>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              
              {/* Download CV */}
              <a
                href={resume}
                download
                className="btn-primary flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>

              {/* Contact Button */}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-outline cursor-pointer flex items-center"
              >
                Contact Me
              </Link>

              {/* ✅ Experience Button (Scroll to Internships Section) */}
              <Link
                to="internships"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-outline cursor-pointer flex items-center"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                4 Years Experience
              </Link>

            </div>
          </motion.div>
          
          {/* Right Column (Image) */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl">
              <img
                src={profile}
                alt="Sai Prashanth"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;