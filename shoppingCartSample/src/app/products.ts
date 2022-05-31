export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    img:string
  }
  
  export const products = [
    {
      id: 1,
      name: 'Pixel 6',
      price: 799,
      description: 'A large phone with one of the best screens',
      img:'https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/08/02/google-pixel-6-orange.png?q=80&fit=crop&w=1368&dpr=1.5'
    },
    {
      id: 2,
      name: 'Galaxy S22',
      price: 699,
      description: 'A great phone with one of the best cameras',
      img:'https://fscl01.fonpit.de/devices/23/2223-w320h320.png'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: 'upcoming models',
      img:''
    }
  ];
  
  
