import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: 'My Circles of Care',
  description: 'We celebrate your Diff-ability! Trusted NDIS disability support provider on Central Coast NSW.',
  url: 'https://mycirclesofcare.com.au',
  phone: '0413 610 404',
  phoneLink: 'tel:+61413610404',
  email: 'contact@mycirclesofcare.com.au',
  address: {
    street: '152 Mann St',
    city: 'Gosford',
    state: 'NSW',
    postcode: '2250',
    country: 'Australia',
  },
  social: {
    facebook: 'https://www.facebook.com/mycirclesofcarepatshandil',
    linkedin: 'https://www.linkedin.com/in/pat-shandil-0a066b29',
  },
  businessHours: {
    weekdays: '9:00 AM - 5:00 PM',
    weekends: 'Closed',
  },
};

export const services = [
  {
    id: 'support-coordination',
    title: 'Support Coordination',
    shortTitle: 'Support Coordination',
    description: 'Connect with the right providers and services to achieve your NDIS goals.',
    longDescription: 'Our Support Coordination service helps you navigate the NDIS system, connect with suitable providers, and ensure your plan supports your goals. We source the right providers with the right services for you, connecting you to locally available recreational, educational, and health resources.',
    icon: 'Users',
    features: [
      'Navigate the NDIS system with expert guidance',
      'Connect with suitable service providers',
      'Coordinate multiple services seamlessly',
      'Build your capacity to manage supports independently',
    ],
  },
  {
    id: 'personal-care',
    title: 'Personal Activities',
    shortTitle: 'Personal Care',
    description: 'Personalized support for daily activities tailored to your needs.',
    longDescription: 'Our Personal Activities support focuses on personalized care with flexible arrangements ranging from 3 to 24 hours. We match your needs with our skilled support team to ensure your individual wellbeing and help you live your best life.',
    icon: 'Heart',
    features: [
      'Flexible support from 3 to 24 hours',
      'Personalized care plans',
      'Skilled and compassionate support workers',
      'Focus on your individual wellbeing',
    ],
  },
  {
    id: 'plan-management',
    title: 'NDIS Plan Management',
    shortTitle: 'Plan Management',
    description: 'Expert guidance to help you maximize your NDIS plan.',
    longDescription: 'Our Plan Management service helps you with goal-setting and plan review processes. We assist participants in assessing achievement and identifying new objectives around daily living and life transitions, ensuring you get the most from your NDIS funding.',
    icon: 'FileText',
    features: [
      'Goal setting and tracking',
      'Plan review preparation',
      'Budget management assistance',
      'Provider payment processing',
    ],
  },
  {
    id: 'independent-living',
    title: 'Support Independent Living',
    shortTitle: 'Independent Living',
    description: 'Support to help you live independently in your own home.',
    longDescription: 'Our Independent Living support helps you develop the skills and confidence to live as independently as possible. We provide tailored assistance to help you manage daily tasks, make decisions, and participate fully in your community.',
    icon: 'Home',
    features: [
      'Skills development for daily living',
      'Support with household management',
      'Building independence and confidence',
      'Tailored to your living situation',
    ],
  },
  {
    id: 'community-participation',
    title: 'Community Participation',
    shortTitle: 'Community',
    description: 'Connect with your community and pursue your interests.',
    longDescription: 'Our Community Participation support helps you engage with your local community, build social connections, and pursue activities you enjoy. We support you to participate in recreational, social, and community activities that matter to you.',
    icon: 'Users2',
    features: [
      'Social and recreational activities',
      'Community engagement support',
      'Building meaningful connections',
      'Pursuing your interests and hobbies',
    ],
  },
  {
    id: 'household-tasks',
    title: 'Household Tasks',
    shortTitle: 'Household Tasks',
    description: 'Assistance with daily household tasks and home management.',
    longDescription: 'Our Household Tasks support provides assistance with daily domestic activities to help you maintain a comfortable and clean living environment. We work with you to manage household responsibilities while building your skills and independence.',
    icon: 'Sparkles',
    features: [
      'Cleaning and tidying assistance',
      'Laundry and ironing support',
      'Meal preparation help',
      'Home organization',
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Support Coordination Client',
    content: 'My Circles of Care has changed my life. They truly understand what I need and always go above and beyond to help me achieve my goals. The team celebrates who I am, not just what I need help with.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David & Family',
    role: 'Family of Participant',
    content: 'Finding My Circles of Care was a blessing for our family. They don\'t just support our son - they support all of us. The peace of mind knowing he\'s in such caring hands is invaluable.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael T.',
    role: 'Independent Living Client',
    content: 'The team at My Circles of Care helped me gain confidence to live more independently. They never make me feel like a burden - they celebrate my achievements, no matter how small.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jennifer R.',
    role: 'Plan Management Client',
    content: 'Navigating the NDIS was overwhelming until I found My Circles of Care. They explained everything clearly and helped me get the most from my plan. Highly recommend!',
    rating: 5,
  },
];

export const stats = [
  { value: '500+', label: 'Families Supported' },
  { value: '10,000+', label: 'Hours of Care' },
  { value: '5+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export const locations = [
  { name: 'Gosford', slug: 'gosford' },
  { name: 'Wyong', slug: 'wyong' },
  { name: 'Woy Woy', slug: 'woy-woy' },
  { name: 'Tuggerah', slug: 'tuggerah' },
  { name: 'Terrigal', slug: 'terrigal' },
  { name: 'Central Coast', slug: 'central-coast' },
];

export const faqs = [
  {
    question: 'What is the NDIS?',
    answer: 'The National Disability Insurance Scheme (NDIS) is Australia\'s national scheme for people with disability. It provides funding for supports and services to help people with disability achieve their goals, including independence, community involvement, education, and employment.',
  },
  {
    question: 'Am I eligible for NDIS?',
    answer: 'You may be eligible for NDIS if you are under 65 years old, are an Australian citizen or permanent resident, and have a permanent and significant disability that affects your ability to take part in everyday activities. Contact us for a free eligibility discussion.',
  },
  {
    question: 'What services does My Circles of Care offer?',
    answer: 'We offer comprehensive NDIS services including Support Coordination, Personal Activities, NDIS Plan Management, Support for Independent Living, Community Participation, and Household Tasks support. All services are tailored to your individual needs and goals.',
  },
  {
    question: 'Does My Circles of Care service the Central Coast?',
    answer: 'Yes! My Circles of Care provides NDIS disability support services across the entire Central Coast NSW region, including Gosford, Wyong, Woy Woy, Tuggerah, Terrigal, and surrounding areas. Our office is located at 152 Mann St, Gosford.',
  },
  {
    question: 'How do I get started with My Circles of Care?',
    answer: 'Getting started is easy! Simply call us at 0413 610 404 or fill out our contact form. We\'ll arrange a free consultation to understand your needs, discuss your goals, and explain how our services can support your NDIS plan.',
  },
  {
    question: 'Is My Circles of Care a registered NDIS provider?',
    answer: 'Yes, My Circles of Care is a registered NDIS provider. This means we meet the NDIS Quality and Safeguards Commission\'s standards and can provide services to all NDIS participants, including those with plan-managed and agency-managed funding.',
  },
  {
    question: 'What is Support Coordination?',
    answer: 'Support Coordination is an NDIS-funded service that helps participants connect with providers, understand their plan, and build skills to manage supports independently. Our Support Coordinators help you navigate the NDIS system and ensure your plan supports your goals.',
  },
  {
    question: 'Can I choose my own support workers?',
    answer: 'Absolutely! We believe in participant choice and control. We work with you to match you with support workers who understand your needs, respect your preferences, and celebrate your unique abilities.',
  },
];
