
import { Property, Service } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Black Glass House',
    location: 'Vatika Hills, Croatia',
    price: '$300',
    type: 'House',
    beds: 3,
    baths: 2,
    sqft: 1000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpeo-UhhP8_jqk6QcVDTgPYlnxBL7JQLTmwXjOL3mGZkhgNcChJa--AOBY2KFpvLG7yzTvxuWsoiIX_K7h3E-A1sq1U6uhcIkrSqfN_D4KWsYH6pyLRoU54EF0GuCsPNWCI68ZK3dZMW_V5yvB0DPPf5arjPY36_n4UZvVEuKZupb0baXjMi5Qexr8YelWfgiLeC0er4UGc32o-3djHNftwTxsPBfSd2shCPGy9TVKtOoFdZfDud7n5QNIOpHzdycEkpeLjFEFPfeF',
    agent: {
      name: 'Caroline Diana',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6-xC4Y6-EYI_IBwfQajr5dQ6fDzWAJx5h7N_QmBzUjPuGgx4YOekoxWo_jIxJE0Djo8J30SrWvq0UVnGd0NYvdsxG7Oe1qjvLy64uOebR8iGr3OoHi2JEWoxzmYrG4bVkntmoSubulEaJ5w3Ddl--3ieYjz4VuJ1cSBSwu1WA5GiyOLIqsl4qCoBsG_zOgpwNP7CrlpRpMQEUOo5KvwrjzMyMg2E_Aqlp3iyyJdOu4Zv0ldoqsA9ZVIKWsVrybOR5NSVVAkTwfApx'
    },
    postedAt: '2 MONTH AGO'
  },
  {
    id: '2',
    title: 'Silver Oak Estate',
    location: 'Zagreb, Croatia',
    price: '$450',
    type: 'House',
    beds: 4,
    baths: 3,
    sqft: 1250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZybD30BYmHtyqhzAUCIsfHOgBG1VSeJGZIt3uR19V8HTUJjxlqjbOnb2vPz5RsKJfMtmRHWGCSH_ViAztt6y6fynUQbJ_yoGomuohSKrOz7aETssEttPkM9qTAe9sJ--F27x8-_kpCHXfCqePB1yf5l6GNbUDZth2CzItKvCdG6qn2NK_pGMgJuiWxd6PY_Fp9K0mFAo1sv3BaD12U4liXER6ezWD-KYNo0WZ3oP39Ph3xerdEE9gQY0qAvF2KXIf4oayz2ggiHWb',
    agent: {
      name: 'Mark Thompson',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASlgAm7822g8MwMseg25dytbdI0bu5MX2XVBD3ltPy3Fg0aV1yJpJKNMsGmGDx4rXF4o6XfeEDBpkHuPjaESn0a35QqJ69CPNCiPr6auOw75Tt1fRIx8Z4iFBcdwj_8uKN3QhR273xAyCn9cNHeAiGQavE_3hdhM4wRWc9L5kcNXcpMnFUDwSp9oq7VaKMQk5vFXAMmP4z9mRDbfMbT2tBYmiMds7XG1gvHFtEOX2w5QeGcP0UBPva_ASRrQ-siTHpSpUWSDXqBol4'
    },
    postedAt: '1 WEEK AGO'
  },
  {
    id: '3',
    title: 'Gold Skyline Apt',
    location: 'City Center, Dubai',
    price: '$800',
    type: 'Apartment',
    beds: 2,
    baths: 2,
    sqft: 850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ__K_sQMET_MZYDN39r2_h-BNJ74uUagh3MFiH8CYhzEMpihzhqF4DeV1ZFdaqj6ujogAaLXX5exgle4m3I6uM1bXgfwNh0wNeDDWi42mOH1CpnkgM2K1PPguiHu4ICGu0nmiRdpk7mXZiKy6One6YGQZ7F03dBwZBLfYBuC5aegmHzkDZVjF0QmRXfUClQBCf4k1zrMK6LlHW_pHfx9EP_uvgpyCLAFa5Mo5X1OrqwJtDy6J6aebWJSmxQC6PLBxNAFnCm7rdyIq',
    agent: {
      name: 'Elena Rose',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0u1TTLskAM09jh4HlhGeIgX6rli2CFIYCdqtc3i4k46pK6S64vmbIsGQaPgVEjEfK5Y09SLGYSe0UMRnBOsa22D7WAlnwHtBICTRabVBdoaiX4VCiypLvqCE5ATiOUuICmwI6P4a7ksnhLcYuo_hpV_CshNSXY6o6kByz_VF8X1OMtXgL4OVb0mVkgj_o-yHRB2JVvOEPVAzAsdA87WGXN5lAyo_TqvvVOP3eOG9-N85sI08o3FHYr1gGXphuBrl8LcZjjxMlW4d9'
    },
    postedAt: '3 DAYS AGO'
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
