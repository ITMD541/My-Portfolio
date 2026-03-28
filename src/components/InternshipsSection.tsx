import React from 'react';
import { motion } from 'framer-motion';
import { internships } from '../data/internshipsData';

const InternshipsSection: React.FC = () => {
  return (
    <section id="internships" className="bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
           Experience
        </motion.h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <InternshipCard 
              key={index} 
              internship={internship} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface InternshipCardProps {
  internship: {
    company: string;
    role: string;
    duration: string;
    logoUrl: string;
    responsibilities: string[];
    tech: string[];
  };
  index: number;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, index }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl shadow-2xl p-6 hover:scale-102 transition-transform duration-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-emerald-500 mr-4 flex items-center justify-center">
          <img
            src={internship.logoUrl}
            alt={internship.company}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{internship.company}</h3>
          <p className="text-gray-300">{internship.role}</p>
          <p className="text-gray-500 text-sm">{internship.duration}</p>
        </div>
      </div>
      
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        {internship.responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {internship.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default InternshipsSection;