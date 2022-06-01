export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    img:string;
    specs:object;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Pixel 6',
      price: 799,
      description: 'A large phone with one of the best screens',
      img:'https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/08/02/google-pixel-6-orange.png?q=80&fit=crop&w=1368&dpr=1.5',
      specs: [{ss: '6.4"', "battery" :'4614mAh', "cam" :'50MP Back, 8MP Front', "storage":'512GB | 1TB', "ram":'8GB', "launchDate":'Oct 2021'}]
    },
    {
      id: 2,
      name: 'Galaxy S22',
      price: 699,
      description: 'A phone for camera enthusiasts',
      img:'https://fscl01.fonpit.de/devices/23/2223-w320h320.png',
      specs: [{ss: '6.1"', "battery":'3700mAh', "cam": '50MP Back, 10MP Front', "storage":'256GB | 512GB | 1TB', "ram":'8GB', "launchDate":'Feb 2022'}]

    },
    {
        id: 3,
        name: 'Galaxy A50',
        price: 550,
        description: 'A great phone for beginners',
        img:'https://www.notebookcheck.net/fileadmin/_processed_/4/7/csm_4_zu_3_Samsung_Galaxy_A50_7d30955c48.png',
        specs: [{ss: '6.4inch', "battery":'4000mAh', "cam": '25MP Back, 25MP Front', "storage":'256GB | 512GB', "ram":'4GB | 6GB', "launchDate":'March 2019'}]
      },
      {
        id: 4,
        name: 'Galaxy S22 Ultra',
        price: 1020,
        description: 'A great phone with one of the best cameras',
        img:'https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-ultra-s908-413037-sm-s908ezggmea-530970243',
        specs: [{ss: '6.8inch', "battery":'5000mAh', "cam": '108MP Back, 40MP Front', "storage":'512GB | 1TB', "ram":'8GB | 12GB', "launchDate":'Feb 2022'}]
      },
    {
      id: 5,
      name: '',
      price: 0,
      description: '',
      img:'',
      specs:[{}]
    }
  ];
  
  
