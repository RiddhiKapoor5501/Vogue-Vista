import React from 'react';
import './vintage.css';
import Navbar from '../../assets/images/navbar.png'
const products = [
  {
    id: 1,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYty3MeKWIRV6Gow4FH2pd8Se-VOaQ3wyiw&s',
    brand: 'Vero Moda',
    name: 'Antique Edwardian Fingerless Golden Lace Gloves ',
    originalPrice: '₹1,799',
    discountPrice: '₹719',
    discount: '60% OFF'
    
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/c2/fd/1a/c2fd1a8bb0a7354c5ec423797daa2342.jpg',
    brand: 'LULU & SKY',
    name: 'Classic Double Breasted Faux Fur Collar Swing Wollen Coat',
    originalPrice: '₹3,798',
    discountPrice: '₹1,595',
    discount: '58% OFF',
    
  },
  {
    id: 3,
    image: 'https://i.etsystatic.com/5945911/r/il/02aa8e/2486388239/il_570xN.2486388239_o2hu.jpg',
    brand: 'StyleCast',
    name: 'Off White Lace Gloves',
    originalPrice: '₹3,299',
    discountPrice: '₹1,349',
    discount: 'Rs.1950 OFF',
    bestPrice: '₹1,281'
  },
  {
    id: 4,
    image: 'https://insertface.com/fb/1901/princess-seam-coat-face-1900957-pjmv0-fb.jpg',
    brand: 'GINGER',
    name: 'Princess Seamed Coat',
    originalPrice: '₹2,999',
    discountPrice: '₹1,199',
    discount: 'Rs.1800 OFF'
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/564x/5c/91/5d/5c915d28dbd8e9266dbf6e4a677f9a8d.jpg',
    brand: 'MANGO',
    name: 'Polka dot dress with Bow shaped ',
    originalPrice: '₹4,999',
    discountPrice: '₹2,499',
    discount: '50% OFF'
  },
  {
    id: 6,
    image: 'https://stylecaster.com/wp-content/uploads/2021/08/Paris-str-F22-0625.jpg?resize=1000,1500',
    brand: 'CHANEL',
    name: 'Vintage Cropped Chanel Sweatshirt',
    originalPrice: '₹7,999',
    discountPrice: '₹4,799',
    discount: '40% OFF'
  },
  {
    id: 7,
    image: 'https://i.pinimg.com/736x/cf/b4/96/cfb4964f771459e3c53e690b915509d3.jpg',
    brand: 'Ralph Lauren',
    name: 'Knitted Sweater',
    originalPrice: '₹2,299',
    discountPrice: '₹1,149',
    discount: '50% OFF'
  },
  {
    id: 8,
    image:'https://rubynz.com/cdn/shop/files/RUBY_RINA_TANK_WHITE_TRULLI_SKIRT_RED_AND_WHITE_GINGHAM_4.jpg?v=1696810345&width=1200',
    brand: 'ZARA',
    name: 'Red Gingham Skirt',
    originalPrice: '₹3,499',
    discountPrice: '₹2,099',
    discount: '40% OFF'
  },
  {
    id: 9,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83L039TL41lmY00I8RXdR5Jz8xfHMehtKsA&s',
    brand: 'GUESS',
    name: 'Pleated Floral Vintage Dress',
    originalPrice: '₹2,999',
    discountPrice: '₹1,799',
    discount: '40% OFF'
  },
  {
    id: 10,
    image: 'https://i.etsystatic.com/5998005/r/il/b4f0bb/5198717149/il_570xN.5198717149_qg0w.jpg',
    brand: 'Ginger',
    name: 'Linen Wrap Tea Length Dress',
    originalPrice: '₹4,299',
    discountPrice: '₹2,579',
    discount: '40% OFF'
  },
  {
    id: 11,
    image: 'https://www.revival-retro.com/cdn/shop/articles/ROYAL_VINTAGE_SHOES_EVELYN_JUST_ARRIVED-348131.jpg?v=1644271220',
    brand: 'Shoes London',
    name: 'Vintage Marylin Pumps',
    originalPrice: '₹3,499',
    discountPrice: '₹2,099',
    discount: '40% OFF'
  },
  {
    id: 12,
    image: 'https://preview.redd.it/vintage-ralph-lauren-bruce-webster-ads-v0-pqoxdiovp0ea1.jpg?width=600&format=pjpg&auto=webp&s=5488135319721cd24b430ed893e2dbddb1e80830',
    brand: 'Ralph Lauren',
    name: 'Pant Suit ',
    originalPrice: '₹5,299',
    discountPrice: '₹3,179',
    discount: '40% OFF'
  },
  {
    id: 13,
    image: 'https://www.katescloset.com.au/uploads/2/1/2/9/21295692/203892812_orig.jpg',
    brand: 'Gucci',
    name: 'Houndstooth Dress',
    originalPrice: '₹4,999',
    discountPrice: '₹2,999',
    discount: '40% OFF'
  },
  {
    id: 14,
    image: 'https://i.pinimg.com/originals/fb/83/2d/fb832d545084c20220cb9966e7a2e00b.jpg',
    brand: 'Ralph Lauren',
    name: 'Brown Checkered Blazer',
    originalPrice: '₹5,999',
    discountPrice: '₹3,599',
    discount: '40% OFF'
  },
  {
    id: 15,
    image: 'https://raleighvintage.com/cdn/shop/files/Vintage2000Chanelsilkdress-5_2048x.jpg?v=1688351051',
    brand: 'CHANEL',
    name: 'Silk Print Dress',
    originalPrice: '₹7,999',
    discountPrice: '₹4,799',
    discount: '40% OFF'
  }
];

const Vintage = () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  return (
    <div className="product-page">
       <div className='navbar'>
          <img src={Navbar} alt="" style={{width:'1480px',position:'fixed',left:'0',top:'0'}}/>
    </div>
      <h1>VINTAGE</h1>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.brand}</h2>
            <p>{product.name}</p>
            <p className="original-price">{product.originalPrice}</p>
            <p className="discount-price">{product.discountPrice}</p>
            <p className="discount">{product.discount}</p>
            {product.rating && (
              <div className="rating">
                <span>{product.rating}</span>
                <span>⭐</span>
                <span>({product.reviews})</span>
              </div>
            )}
            {product.bestPrice && <p className="best-price">Best Price {product.bestPrice} with coupon</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vintage;
