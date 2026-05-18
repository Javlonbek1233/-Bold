export interface Car {
  id: string;
  name: string;
  brand: string;
  price: string;
  hp: number;
  topSpeed: number;
  zeroToSixty: number;
  image: string;
  category: 'Hypercar' | 'Supercar' | 'Luxury';
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'Revuelto',
    brand: 'Lamborghini',
    price: '$608,358',
    hp: 1001,
    topSpeed: 350,
    zeroToSixty: 2.5,
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800',
    category: 'Hypercar'
  },
  {
    id: '2',
    name: 'SF90 Stradale',
    brand: 'Ferrari',
    price: '$524,815',
    hp: 986,
    topSpeed: 340,
    zeroToSixty: 2.5,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800',
    category: 'Supercar'
  },
  {
    id: '3',
    name: 'Phantom VIII',
    brand: 'Rolls Royce',
    price: '$460,000',
    hp: 563,
    topSpeed: 250,
    zeroToSixty: 5.3,
    image: 'https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?auto=format&fit=crop&q=80&w=800',
    category: 'Luxury'
  },
  {
    id: '4',
    name: 'Jesko Absolut',
    brand: 'Koenigsegg',
    price: '$3,000,000',
    hp: 1600,
    topSpeed: 531,
    zeroToSixty: 2.5,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    category: 'Hypercar'
  },
  {
    id: '5',
    name: 'P1',
    brand: 'McLaren',
    price: '$1,150,000',
    hp: 903,
    topSpeed: 350,
    zeroToSixty: 2.8,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    category: 'Hypercar'
  },
  {
    id: '6',
    name: '911 GT3 RS',
    brand: 'Porsche',
    price: '$223,800',
    hp: 518,
    topSpeed: 296,
    zeroToSixty: 3.2,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    category: 'Supercar'
  }
];
