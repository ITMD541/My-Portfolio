interface Internship {
  company: string;
  role: string;
  duration: string;
  logoUrl: string;
  responsibilities: string[];
  tech: string[];
}

export const internships: Internship[] = [
  {
    company: 'Numerator',
    role: 'Software Engineer',
    duration: 'March 2024 – Present',
    logoUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    responsibilities: [
      'Designed scalable backend services to process large consumer datasets, improving data ingestion efficiency',
      'Developed high-performance RESTful APIs to support large-scale analytics and seamless system integrations.',
      'Optimized data pipelines and implemented event-driven architecture using Apache Kafka, reducing latency.',
      'Built and deployed microservices using Spring Boot, Docker, and AWS, reducing deployment time by 35%.'
    ],
    tech: ['Java', 'Spring Boot', 'RESTful API', 'AWS', 'Docker'],
  },
  {
    company: 'Parts Town',
    role: 'Software Engineer',
    duration: 'July 2021 – June 2023',
    logoUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    responsibilities: [
      'Built scalable backend services to improve inventory and order processing, increasing fulfillment speed by 30%.',
      'Developed RESTful APIs for high-volume B2B transactions, enhancing integration and data reliability.',
      'Refactored Java microservices and optimized database queries, improving processing efficiency by 35%.',
      'Collaborated with cross-functional teams to deliver supply chain features with consistent on-time execution.'
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'RESTful API'],
  },
];