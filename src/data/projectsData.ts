interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    title: 'TaskMaster Pro',
    description:
      'A full-stack task management platform with real-time collaboration, built on MERN and deployed on AWS.',
    imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Tailwind CSS'],
    repoLink: 'https://github.com/rohan-kapoor/taskmaster-pro',
    liveLink: 'https://taskmaster-pro.example.com',
  },
  {
    title: 'EcoShop E-Commerce',
    description:
      'A green-themed React front-end integrated with Stripe for payments, and a Firebase backend for inventory management.',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['React', 'Stripe API', 'Firebase', 'Tailwind CSS'],
    repoLink: 'https://github.com/rohan-kapoor/ecoshop',
    liveLink: 'https://ecoshop-shop.web.app',
  },
  {
    title: 'AlgoVisualizer CLI',
    description:
      'A Python CLI tool that visualizes algorithm steps in the terminal, helping learners debug sorting/search algorithms.',
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    techStack: ['Python', 'Rich (terminal graphics)', 'TUI'],
    repoLink: 'https://github.com/rohan-kapoor/algovisualizer-cli',
  },
];