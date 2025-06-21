// Common types used throughout the application

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectType {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  link?: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}