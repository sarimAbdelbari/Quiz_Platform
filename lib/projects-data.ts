export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  features: string[];
  role: string;
  duration: string;
  company: string;
}

export const projects: Project[] = [
  {
    title: 'Document Management System',
    slug: 'document-management-system',
    description: 'A hierarchical CMS for managing company documents with advanced permission controls and user management.',
    image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1600&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Redux'],
    github: 'https://github.com/SarimAbdelbari',
    features: [
      'Hierarchical document organization',
      'Advanced permission system',
      'Real-time collaboration',
      'Version control',
      'Document preview and editing',
      'Audit logging'
    ],
    role: 'Full Stack Developer',
    duration: '3 months',
    company: 'Groupe Chiali'
  },
  {
    title: 'Service Provider Platform',
    slug: 'service-provider-platform',
    description: 'A dashboard connecting clients with skilled workers, featuring real-time updates and booking management.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux', 'Node.js'],
    github: 'https://github.com/SarimAbdelbari',
    features: [
      'Real-time booking system',
      'Service provider profiles',
      'Review and rating system',
      'Payment integration',
      'Chat system',
      'Calendar management'
    ],
    role: 'Frontend Developer',
    duration: '2 months',
    company: 'Jar Bricola'
  },
  {
    title: 'Social Network Platform',
    slug: 'social-network-platform',
    description: 'A LinkedIn-inspired platform for connecting business owners, agency owners, and freelancers with potential clients.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop',
    technologies: ['MERN Stack', 'Socket.io', 'Redux', 'TypeScript', 'AWS'],
    github: 'https://github.com/SarimAbdelbari',
    features: [
      'Professional networking',
      'Real-time messaging',
      'Job posting and applications',
      'Business profile management',
      'Advanced search and filtering',
      'Analytics dashboard'
    ],
    role: 'Full Stack Developer',
    duration: '4 months',
    company: 'Personal Project'
  }
];