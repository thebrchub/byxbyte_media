export type ProcessStep = {
  title: string;        // 👈 step name
  description: string;  // 👈 detailed text
  img?: string;         // 👈 optional image
};

export type ServiceProcess = {
  title: string;
  steps: ProcessStep[];
};

export type Service = {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  features: string[];
  process?: ServiceProcess[];   // 👈 optional now
  gallery?: string[];           // 👈 optional now
  className: string;
  titleClassName?: string;
  descriptionClassName?: string;
  img?: string;                 // 👈 optional now
  imgClassName?: string;
  beforeAfterPairs?: { before: string; after: string }[];
  spareImg?: string;
};
