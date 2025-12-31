import { Service, ProcessStep, Project, TimelineEvent, FAQ, SocialLink } from '@/types';

// Brand Book 2025 - Core Services
export const serviceCategories = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery & Strategy',
    services: [
      {
        id: 'content-planning',
        title: 'Content Planning',
        description: 'Strategic content roadmaps aligned with your business goals',
        icon: 'camera'
      },
      {
        id: 'creative-direction',
        title: 'Creative Direction & Scripting',
        description: 'Compelling narratives and visual concepts that captivate',
        icon: 'typewriter'
      },
      {
        id: 'marketing-strategy',
        title: 'Marketing Strategy',
        description: 'Data-driven strategies to maximize your content ROI',
        icon: 'chart'
      }
    ]
  },
  {
    id: 'production',
    number: '02',
    title: 'Creative Production',
    services: [
      {
        id: 'mise-en-scene',
        title: 'Mise en Scene (Setup)',
        description: 'Professional set design and artistic direction',
        icon: 'setup'
      },
      {
        id: 'video-shooting',
        title: 'Video Shooting',
        description: 'Cinematic video production with cutting-edge equipment',
        icon: 'video'
      },
      {
        id: 'editing',
        title: 'Editing & Post-Production',
        description: 'Premium editing, color grading, and visual effects',
        icon: 'edit'
      }
    ]
  },
  {
    id: 'talent',
    number: '03',
    title: 'Talent & Creative Support',
    services: [
      {
        id: 'ugc-creators',
        title: 'UGC Creators',
        description: 'Access to our network of authentic content creators',
        icon: 'creator'
      },
      {
        id: 'models',
        title: 'Models',
        description: 'Professional talent for your visual campaigns',
        icon: 'models'
      },
      {
        id: 'full-video',
        title: 'Full Video Creation',
        description: 'End-to-end video production for all industries',
        icon: 'fullvideo'
      }
    ]
  }
];

// Legacy services for backward compatibility
export const services: Service[] = [
  {
    id: 'scripting',
    title: 'Scripting & Concept',
    description: 'Creative concepts and compelling scripts for your videos',
    icon: 'script'
  },
  {
    id: 'production',
    title: 'Video Production',
    description: 'Professional video shooting with our expert team',
    icon: 'camera'
  },
  {
    id: 'editing',
    title: 'Editing & Post-Production',
    description: 'Creative editing and visual effects to bring your projects to life',
    icon: 'edit'
  },
  {
    id: 'strategy',
    title: 'Marketing Strategy',
    description: 'Data-driven marketing strategies tailored to your audience',
    icon: 'chart'
  },
  {
    id: 'community',
    title: 'Community Management',
    description: 'Building and engaging your community across all platforms',
    icon: 'users'
  },
  {
    id: 'social',
    title: 'Social Media Management',
    description: 'Content creation and planning for your social networks',
    icon: 'social'
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: 'meet',
    step: 1,
    title: 'Discovery',
    description: 'Understanding your objectives and analyzing your project needs'
  },
  {
    id: 'concept',
    step: 2,
    title: 'Concept & Script',
    description: 'Developing creative concepts and writing compelling scripts'
  },
  {
    id: 'shooting',
    step: 3,
    title: 'Production',
    description: 'Professional video production with our team of creators'
  },
  {
    id: 'editing',
    step: 4,
    title: 'Post-Production',
    description: 'Editing, color grading, and finalizing your content'
  },
  {
    id: 'distribution',
    step: 5,
    title: 'Distribution',
    description: 'Publishing and optimizing across your platforms'
  }
];

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Fashion Brand Campaign',
    description: 'Video series for an ethical fashion brand',
    tag: 'Fashion',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop'
  },
  {
    id: 'project2',
    title: 'Tech Tutorial Series',
    description: 'Educational series on emerging technologies',
    tag: 'Education',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop'
  },
  {
    id: 'project3',
    title: 'Corporate Documentary',
    description: 'Institutional film for an innovative company',
    tag: 'Corporate',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop'
  },
  {
    id: 'project4',
    title: 'Social Media Campaign',
    description: 'Viral content for TikTok and Instagram',
    tag: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2022',
    title: 'ALJ Creative Studio Launch',
    description: 'Founded with a vision to unite the best creators'
  },
  {
    year: '2023',
    title: 'Collective Expansion',
    description: 'Over 50 creators joined our network of talents'
  },
  {
    year: '2024',
    title: 'International Scaling',
    description: 'Expanding services internationally and into new markets'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'How does your creator collective work?',
    answer: 'Our collective brings together creators specialized in different domains. We select the best team for each project based on your specific needs.'
  },
  {
    id: 'faq2',
    question: 'What are your delivery timelines?',
    answer: 'Timelines vary based on project complexity. On average, expect 2-4 weeks for a standard project, from concept to final delivery.'
  },
  {
    id: 'faq3',
    question: 'Do you work with tight budgets?',
    answer: 'Yes, we adapt our services to all budgets. We offer flexible packages and creative solutions to maximize your ROI.'
  },
  {
    id: 'faq4',
    question: 'How can I join your collective?',
    answer: 'We are constantly looking for new talents. Contact us with your portfolio and we will review your application to join our network.'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/aljcreativestudio',
    icon: 'instagram'
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@aljcreativestudio',
    icon: 'tiktok'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/aljcreativestudio',
    icon: 'linkedin'
  }
];

// Brand Statistics from Brand Book
export const brandStats = [
  { number: '50+', label: 'Clients Trusted Us' },
  { number: '+100', label: 'Creative Videos Produced' },
  { number: '15+', label: 'Expert Creators' }
];

// Brand Values from Voice & Tone section
export const brandValues = [
  { title: 'Trustworthy', description: 'Clear, confident, reliable.' },
  { title: 'Creative', description: 'Imaginative, bold, full of fresh ideas.' },
  { title: 'Professional', description: 'Expert yet human, approachable without losing authority.' }
];
