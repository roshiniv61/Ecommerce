// src/data/products.js
import productDefaultImg from '../assets/Rectangle 5.png';
import productDefaultImg1 from '../assets/product-img.png';
import image1 from '../assets/back-tshrit.png';
import image2 from '../assets/front-tshrit.png';
import image3 from '../assets/left-tshrit.png';
import image4 from '../assets/right-tshrit.png';
import LogoImg from '../assets/Logo.png'


const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    category: 'T-Shirts',
    price: 19.99,
    description: 'A classic white t-shirt made from 100% cotton. Comfortable and versatile.',
    imageUrl: productDefaultImg,
    images:[image1,image2,image3,image4],
    // 'https://example.com/images/classic-white-tshirt.jpg',
    rating: 4.5,
    brand:"adidas",
    // color:["white","Blue","Red","Black"],
    color:["#FFFFFF"],
    gender: "male",
    productcode: "JF001",
    sizes: ['2XS','XS','S', 'M', 'L', 'XL','2XL','3XL','4XL','5XL'],
    // logo: {file: LogoImg , status : true},
    referencenumber:'000000000001'
  },
  {
    id: 2,
    name: 'Denim Blue Jeans',
    category: 'Jeans',
    price: 39.99,
    description: 'Stylish denim jeans with a slim fit. Made with high-quality denim fabric.',
    images:[image1,image2,image3,image4],

    imageUrl: productDefaultImg1,
    // imageUrl: 'https://example.com/images/denim-blue-jeans.jpg',
    rating: 4.5,
    brand:"nike",
    // color:["white","Blue","Red","Black"],
    color:["#FFFFFF"],
    gender: "female",
    productcode: "JF002",
    sizes: ['2XS','XS','S', 'M', 'L', 'XL','2XL','3XL','4XL','5XL'],
    // logo: {file: LogoImg , status : true}
    referencenumber:'000000000002'

  },
  {
    id: 3,
    name: 'Red Hoodie',
    category: 'Hoodies',
    price: 49.99,
    description: 'Warm and cozy red hoodie with a front pocket and adjustable drawstrings.',
    images:[image1,image2,image3,image4],

    imageUrl: productDefaultImg,
    // imageUrl: 'https://example.com/images/red-hoodie.jpg',
    rating: 4.5,
    brand:"adidas",
    // color:["white","Blue","Red","Black"],
    color:["#FFFFFF"],
    gender: "male",
    productcode: "JF003", 
    sizes: ['2XS','XS','S', 'M', 'L', 'XL','2XL','3XL','4XL','5XL'],
    // logo: {file: LogoImg , status : true},
    referencenumber:'000000000003'

  },
  {
    id: 4,
    name: 'Black Leather Jacket',
    category: 'Jackets',
    price: 129.99,
    description: 'Premium black leather jacket with a sleek design. Perfect for a night out.',
    images:[image1,image2,image3,image4],

    imageUrl: productDefaultImg,
    // imageUrl: 'https://example.com/images/black-leather-jacket.jpg',
    rating: 4.5,
    brand:"adidas",
    // color:["white","Blue","Red","Black"],
    color:["#FFFFFF"],
    gender: "unisex",
    productcode: "JF004",
    sizes: ['2XS','XS','S', 'M', 'L', 'XL','2XL','3XL','4XL','5XL'],
    // logo: {file: LogoImg , status : true}
    referencenumber:'000000000004'

  },
  {
    id: 5,
    name: 'Floral Summer Dress',
    category: 'Dresses',
    price: 34.99,
    description: 'Light and airy summer dress with a vibrant floral pattern. Ideal for warm weather.',
    imageUrl: productDefaultImg,
    images:[image1,image2,image3,image4],

    // imageUrl: 'https://example.com/images/floral-summer-dress.jpg',
    rating: 4.5,
    brand:"puma",
    color:["#0000FF","#FF0000","#000000"],
    gender: "male",
    productcode: "JF005",
    sizes: ['2XS','XS','S', 'M', 'L', 'XL','2XL','3XL','4XL','5XL'],
    // logo: {file: LogoImg , status : true}
    referencenumber:'000000000005'

  },
];

export default products;


// const products = [
//     {
//       "id": "1",
//       "name": "Wireless Bluetooth Headphones",
//       "description": "High-quality wireless headphones with noise cancellation.",
//       "price": 89.99,
//       "category": "Electronics",
//       "image": "https://example.com/images/headphones.jpg",
//       "rating": 4.5
//     },
//     {
//       "id": "2",
//       "name": "Portable SSD 1TB",
//       "description": "Fast and compact portable SSD with 1TB storage.",
//       "price": 129.99,
//       "category": "Electronics",
//       "image": "https://example.com/images/ssd.jpg",
//       "rating": 4.7
//     },
//     {
//       "id": "3",
//       "name": "Smartwatch Series 6",
//       "description": "Smartwatch with health tracking and GPS.",
//       "price": 299.99,
//       "category": "Wearables",
//       "image": "https://example.com/images/smartwatch.jpg",
//       "rating": 4.8
//     },
//     {
//       "id": "4",
//       "name": "Ergonomic Office Chair",
//       "description": "Comfortable office chair with lumbar support and adjustable features.",
//       "price": 159.99,
//       "category": "Furniture",
//       "image": "https://example.com/images/chair.jpg",
//       "rating": 4.2
//     }
//   ];

  
// export default products;
