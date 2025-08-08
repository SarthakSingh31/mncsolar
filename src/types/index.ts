export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  message?: string;
}

export interface NavItem {
  href: string;
  label: string;
}