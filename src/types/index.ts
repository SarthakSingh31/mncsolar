export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  registeredAddress: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  capacity: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}
