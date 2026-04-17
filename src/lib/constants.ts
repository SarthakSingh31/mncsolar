import { ContactInfo, ServiceItem, NavItem, StatItem } from '@/types';

export const CONTACT_INFO: ContactInfo = {
  email: 'contact@mncsolar.com',
  phone: '+91 9643805595',
  whatsapp: '919643805595',
  address: 'BMP-16, Rd Number 1, Maurya Vihar Colony, Khagaul, Patna, Bihar 801105'
};

export const COMPANY_NAME = 'Mahadeva And Company';
export const COMPANY_SHORT = 'MNC Solar';

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/why-solar', label: 'Why Solar' },
  { href: '/why-mnc-solar', label: 'Why MNC Solar' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
];

export const STATS: StatItem[] = [
  { value: '200+', label: 'Installations' },
  { value: '5+', label: 'Years Experience' },
  { value: '₹0', label: 'Electricity Bill Goal' },
  { value: '25yr', label: 'Panel Lifespan' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ongrid',
    title: 'On-Grid Systems',
    description: 'Grid-connected solar systems that reduce electricity bills while maintaining grid connection.',
    features: [
      'Net metering support',
      'Grid synchronization',
      'Reduce bills to zero',
      'Government subsidy eligible',
      'High efficiency panels'
    ],
    icon: 'Zap',
    capacity: '2 KW - 100 KW'
  },
  {
    id: 'offgrid',
    title: 'Off-Grid Systems',
    description: 'Independent solar power systems with battery storage for areas without grid connectivity.',
    features: [
      'Complete energy independence',
      'Advanced battery storage (LiFePO4)',
      'Remote monitoring',
      'Weather-resistant design',
      '24-hour availability'
    ],
    icon: 'Battery',
    capacity: '2 KW - 50 KW'
  },
  {
    id: 'hybrid',
    title: 'Hybrid Systems',
    description: 'Best of both worlds — grid connection with battery backup for uninterrupted power.',
    features: [
      'Grid + battery backup',
      'Power during outages',
      'Ideal for varying loads',
      'Net metering compatible',
      'Smart energy management'
    ],
    icon: 'RefreshCw',
    capacity: '3 KW - 100 KW'
  },
  {
    id: 'institutional',
    title: 'Institutional & Commercial',
    description: 'Custom solar solutions for schools, offices, and commercial establishments with varying load requirements.',
    features: [
      'Custom load analysis',
      'Mini-grid solutions',
      'No generator dependency',
      'Minimal maintenance',
      'Scalable capacity'
    ],
    icon: 'Building2',
    capacity: '10 KW - 100 KW'
  }
];

export const SERVICE_AREAS = ['Jharkhand', 'Bihar'];
