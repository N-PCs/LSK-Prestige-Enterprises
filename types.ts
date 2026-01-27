export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: "Apartment" | "Villa" | "Commercial" | "House";
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  agent: {
    name: string;
    avatar: string;
  };
  postedAt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
