export interface Service {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  // icon: any;
  features: string[];
  process?: string[];
  gallery?: string[];
  beforeAfterPairs?: Array<{ before: string; after: string }>;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
}


