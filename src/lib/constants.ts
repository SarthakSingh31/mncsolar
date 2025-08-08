import { ContactInfo, ServiceItem, NavItem } from '@/types';

export const CONTACT_INFO: ContactInfo = {
  email: 'contact@mncsolar.com',
  phone: '+91 9643805595',
  address: 'BMP-16, Rd Number 1, Maurya Vihar Colony, Khagaul, Patna, Bihar 801105'
};

export const COMPANY_NAME = 'Mahadeva And Company';
export const COMPANY_SHORT = 'MNC Solar';

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'complete-home',
    title: 'Complete Home Solar Solutions',
    description: 'Comprehensive solar power systems designed for residential properties with complete installation and maintenance.',
    features: [
      'Custom system design',
      'Professional installation',
      'Grid-tie capability',
      'Battery backup options',
      '24/7 monitoring',
      'Maintenance support'
    ]
  },
  {
    id: 'village-power',
    title: 'Small Village Power Systems',
    description: 'Community-focused solar solutions to bring reliable electricity to rural areas and small villages.',
    features: [
      'Community-scale systems',
      'Reliable rural power',
      'Cost-effective solutions',
      'Local maintenance training',
      'Scalable installations'
    ]
  },
  {
    id: 'battery-offgrid',
    title: 'Battery-Based Off-Grid Systems',
    description: 'Independent solar power systems with battery storage for areas without grid connectivity.',
    features: [
      'Complete energy independence',
      'Advanced battery storage',
      'Remote monitoring',
      'Weather-resistant design',
      'Emergency backup power'
    ]
  },
  {
    id: 'ongrid-solutions',
    title: 'On-Grid Solutions',
    description: 'Grid-connected solar systems that reduce electricity bills while maintaining grid connection.',
    features: [
      'Net metering support',
      'Grid synchronization',
      'Reduced electricity bills',
      'Government subsidy eligible',
      'High efficiency panels'
    ]
  }
];

export const SERVICE_AREAS = ['Jharkhand', 'Bihar'];