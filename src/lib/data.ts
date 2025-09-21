import { Service, ProcessStep, Project, TimelineEvent, FAQ, SocialLink } from '@/types';

export const services: Service[] = [
  {
    id: 'scripting',
    title: 'Scripting & Concept',
    description: 'Création de concepts créatifs et rédaction de scripts percutants pour vos vidéos',
    icon: '📝'
  },
  {
    id: 'production',
    title: 'Mise en Scène & Tournage',
    description: 'Direction artistique et production vidéo professionnelle avec notre équipe',
    icon: '🎬'
  },
  {
    id: 'editing',
    title: 'Montage & Post-Production',
    description: 'Montage créatif et effets visuels pour donner vie à vos projets',
    icon: '✂️'
  },
  {
    id: 'strategy',
    title: 'Stratégie Marketing',
    description: 'Développement de stratégies marketing adaptées à votre audience',
    icon: '📊'
  },
  {
    id: 'community',
    title: 'Community Management',
    description: 'Gestion et animation de vos communautés sur tous les réseaux',
    icon: '👥'
  },
  {
    id: 'social',
    title: 'Social Media Management',
    description: 'Création et planification de contenu pour vos réseaux sociaux',
    icon: '📱'
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: 'meet',
    step: 1,
    title: 'Rencontre',
    description: 'Échange sur vos objectifs et analyse de votre projet'
  },
  {
    id: 'concept',
    step: 2,
    title: 'Concept & Script',
    description: 'Développement du concept créatif et rédaction du script'
  },
  {
    id: 'shooting',
    step: 3,
    title: 'Tournage',
    description: 'Production vidéo avec notre équipe de créateurs'
  },
  {
    id: 'editing',
    step: 4,
    title: 'Montage',
    description: 'Post-production et finalisation de votre contenu'
  },
  {
    id: 'distribution',
    step: 5,
    title: 'Diffusion',
    description: 'Publication et optimisation sur vos plateformes'
  }
];

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Campagne Brand Awareness',
    description: 'Série de vidéos pour une marque de mode éthique',
    tag: 'Fashion',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'project2',
    title: 'Tutoriel Tech',
    description: 'Série éducative sur les nouvelles technologies',
    tag: 'Education',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'project3',
    title: 'Documentaire Corporate',
    description: 'Film institutionnel pour une entreprise innovante',
    tag: 'Corporate',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'project4',
    title: 'Campagne Social Media',
    description: 'Contenu viral pour TikTok et Instagram',
    tag: 'Social Media',
    image: '/api/placeholder/400/300'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2022',
    title: 'Lancement ALJ Creative Studio',
    description: 'Création de l\'agence avec une vision: réunir les meilleurs créateurs'
  },
  {
    year: '2023',
    title: 'Expansion du Collectif',
    description: 'Plus de 50 créateurs rejoignent notre réseau de talents'
  },
  {
    year: '2024',
    title: 'Scaling International',
    description: 'Ouverture de nos services à l\'international et nouveaux marchés'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'Comment fonctionne votre collectif de créateurs ?',
    answer: 'Notre collectif regroupe des créateurs spécialisés dans différents domaines. Nous sélectionnons la meilleure équipe pour chaque projet selon vos besoins spécifiques.'
  },
  {
    id: 'faq2',
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Les délais varient selon la complexité du projet. En moyenne, comptez 2-4 semaines pour un projet standard, de la conception à la livraison finale.'
  },
  {
    id: 'faq3',
    question: 'Travaillez-vous avec des budgets serrés ?',
    answer: 'Oui, nous adaptons nos services à tous les budgets. Nous proposons des packages flexibles et des solutions créatives pour maximiser votre ROI.'
  },
  {
    id: 'faq4',
    question: 'Comment puis-je rejoindre votre collectif ?',
    answer: 'Nous recherchons constamment de nouveaux talents. Contactez-nous avec votre portfolio et nous étudierons votre candidature pour rejoindre notre réseau.'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/aljcreativestudio',
    icon: '📷'
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@aljcreativestudio',
    icon: '🎵'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/aljcreativestudio',
    icon: '💼'
  }
];
