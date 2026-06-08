export interface Product {
    name: string;
    description: string;
    specs: string[];
    icon?: string;
  }
  
  export interface Stat {
    number: string;
    label: string;
  }
  
  export interface Port {
    name: string;
    location: string;
  }
  
  export interface Certification {
    name: string;
    logo?: string;
  }
  
  export interface RFQFormData {
    product: string;
    quantity: string;
    incoterm: string;
    destination: string;
    country: string;
    frequency: string;
    fullName: string;
    company: string;
    email: string;
    phone: string;
    file: File | null;
  }
  
  export interface Process {
    step: string;
    title: string;
    description: string;
  }