export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  description: string;
  projectStatus: string;
  features: string[];
  locationAdvantages: string[];
  gallery: string[];

}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
