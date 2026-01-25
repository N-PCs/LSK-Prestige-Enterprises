import { Property, Service } from '@/components/hooks/types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Villa Colva',
    location: 'Colva (village), Margao (city), Goa (state)',
    price: '₹3 crore - ₹6 crore',
    type: 'Villa',
    image: './images/1 (1).png',
    // Additional details for PropertyInfo component
    description: 'Villa Colva offers luxury living in the peaceful coastal village of Colva, blending modern amenities with traditional Goan charm. The project features 9 plots with both 3BHK and 4BHK villas designed for contemporary living.',
    propertyType: '3BHK & 4BHK Villas (9 plots)',
    projectStatus: 'Under Construction (6th project in progress)',
    features: [
      'Private Garden',
      'Swimming Pool',
      'Car Parking',
    ],
    locationAdvantages: [
      'Nestled in Colva, a peaceful coastal village',
      'Close to vibrant tourist life yet maintains calm of true Goan living',
      'Local village school nearby',
      'Familiar clinic stops for everyday care',
      'Fresh fish at the local market',
      'Small marts lining the lanes',
      'Scenic road through open fields leading to Colva’s beautiful beach',
      'Just 20-minute walk or 10-minute drive to beach',
      'Life\'s essentials within 5–10 minutes'
    ],
    gallery: [
      '/images/1 (1).png',
      '/images/1 (3).png',
      '/images/1 (11).jpg.jpeg',
      '/images/1 (14).jpg.jpeg',
      '/images/1 (17).jpg.jpeg',
      '/images/APX08197.jpg.jpeg',
      '/images/APX08198.jpg.jpeg',
      '/images/APX08201.jpg.jpeg',
      '/images/APX08270.jpg.jpeg',
      '/images/APX08260.jpg.jpeg',


    ],
    floorPlans: [
      { name: '3BHK Villa', size: '1800 sqft', rooms: '3 Bedrooms, 3 Bathrooms' },
      { name: '4BHK Villa', size: '2500 sqft', rooms: '4 Bedrooms, 4 Bathrooms' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Real Estate Services',
    description: 'Comprehensive property management and advisory services to help you make the best investment decisions.',
    icon: 'domain'
  },
  {
    id: '2',
    title: 'Sell Your Home',
    description: 'Market-leading valuation and listing services to ensure you get the maximum value for your property.',
    icon: 'sell'
  },
  {
    id: '3',
    title: 'Home Inspection',
    description: 'Detailed structural and technical inspections by certified professionals for your peace of mind.',
    icon: 'engineering'
  }
];