import { Property, Service } from '@/components/hooks/types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Villa Colva',
    location: 'Vanelim-Colva, Salcete, South Goa',
    price: '₹3 crore - ₹6 crore',
    type: 'Villa',
    image: './images/villa 4.png',
    // Additional details for PropertyInfo component
    description:
      'Villa Colva offers luxury living in the peaceful coastal village of Colva, blending modern amenities with traditional Goan charm. The project features 4BHK villa designed for contemporary living.',
    projectStatus: 'Under Construction (6th project in progress)',
    features: [
      'Private Garden',
      'Swimming Pool (5.00m x 3.00m Infinity-inspired plunge pool)',
      'Car Parking',
      'Vitrified Flooring',
      'Jaguar Bathroom Fixtures & Sanitaryware',
      'Modular Kitchen with Faber Chimney & Hob',
      'UPVC Windows',
      '3 Phase Electricity Connection',
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
      "Life's essentials within 5–10 minutes",
      'Colva Police Station - 1km',
      'Colva Beach - 2km',
      'Sernabatim Beach - 2km',
      'KTC Bus Stand - 5km',
      'Hospicio Hospital - 6km',
      'Margao Market - 6km',
    ],
    gallery: [
      '/images/villa 4.png',
      '/images/1 (3).png',
      '/images/1 (11).jpg.jpeg',
      '/images/1 (14).jpg.jpeg',
      '/images/1 (17).jpg.jpeg',
      '/images/APX08197.jpg.jpeg',
      '/images/APX08198.jpg.jpeg',
      '/images/APX08201.jpg.jpeg',
      '/images/APX08270.jpg.jpeg',
      '/images/APX08260.jpg.jpeg',
      '/images/Villa 5.png',

    ],
  },
  {
    id: '2',
    title: 'Villa ',
    location: '',
    price: '',
    type: 'Villa',
    image: './images/Villa 6.png',
    // Additional details for PropertyInfo component
    description:
      '',
    projectStatus: 'Under Construction (6th project in progress)',
    badge:'Under Construction',
    features: [
      '',
    ],
    locationAdvantages: [
      '',
    ],

    gallery: [
      '/images/Villa 6.png',

    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Real Estate Services',
    description:
      'Comprehensive property management and advisory services to help you make the best investment decisions.',
    icon: 'domain',
  },
  {
    id: '2',
    title: 'Sell Your Home',
    description:
      'Market-leading valuation and listing services to ensure you get the maximum value for your property.',
    icon: 'sell',
  },
  {
    id: '3',
    title: 'Home Inspection',
    description:
      'Detailed structural and technical inspections by certified professionals for your peace of mind.',
    icon: 'engineering',
  },
];
