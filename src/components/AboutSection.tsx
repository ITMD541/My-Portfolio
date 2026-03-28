import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skillsData';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column (Bio) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Software Engineer with 4 years of experience specializing in backend development, microservices, and cloud-native solutions on AWS. Focused on building scalable systems that deliver high performance and reliability.
              </p>
              <p className="leading-relaxed">
                Experienced in developing data-driven applications and RESTful APIs that improve system efficiency and support large-scale real-time processing. Proven impact in reducing latency and increasing throughput.
              </p>
              <p className="leading-relaxed">
                Strong expertise in solving complex engineering problems and collaborating with cross-functional teams to deliver impactful solutions. Committed to building robust systems that drive value across data and eCommerce platforms.
              </p>
            </div>
          </motion.div>
          
          {/* Right Column (Tech Skills) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SkillCategory title="Languages & Backend" skills={skills.languages} />
              <SkillCategory title="Cloud & DevOps" skills={skills.frontend} />
              <SkillCategory title="Databases & Messaging" skills={skills.backend} />
              <SkillCategory title="Monitoring & Tools" skills={skills.tools} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div>
      <h3 className="text-xl text-emerald-400 font-medium mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;