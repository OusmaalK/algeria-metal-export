// components/request/types.ts

export interface RequestHeroProps {
    t: any;
  }
  
  export interface RequestFormProps {
    t: any;
    locale: string;
    formData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleProductChange: (product: string, value: string) => void;
  }
  
  export interface RequestContactDetailsProps {
    t: any;
    formData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  }
  
  export interface RequestShippingDetailsProps {
    t: any;
    formData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  }
  
  export interface RequestProductSelectionProps {
    t: any;
    formData: any;
    handleProductChange: (product: string, value: string) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  }
  
  export interface RequestFeaturesGridProps {
    t: any;
  }
  
  export interface RequestCtaProps {
    t: any;
  }