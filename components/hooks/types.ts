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
  /**
   * Optional badge text shown on the card (e.g. "New Listing", "Upcoming").
   * Defaults to "New Listing" when not provided.
   */
  badge?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  description?: string;
  image: string;
  imagePosition: 'left' | 'right';
}

