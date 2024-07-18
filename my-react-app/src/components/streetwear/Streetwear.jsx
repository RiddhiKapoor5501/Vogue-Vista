import React from 'react';
import './Streetwear.css';
import Navbar from '../../assets/images/navbar.png'
const products = [
  {
    id: 1,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNI8x0aPTjCogSN8iA5aZ3TCsMBXie6kmCfg&s',
    brand: 'Newme',
    name: 'Oversized Varsity',
    originalPrice: '₹1,799',
    discountPrice: '₹719',
    discount: '60% OFF'
    
  },
  {
    id: 2,
    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/f965e67abe1ddb3b1d7e7e588944346b.jpg?imageView2/2/w/500/q/60/format/webp',
    brand: 'LULU & SKY',
    name: 'Beige Oversized Jogger',
    originalPrice: '₹3,798',
    discountPrice: '₹1,595',
    discount: '58% OFF',
    
  },
  {
    id: 3,
    image: 'https://www.fashionnova.com/cdn/shop/products/02-16-23Studio2_HY_RL_14-31-24_19_ZAPP4694_Ivorycombo_0419_SG_360x.jpg?v=1677094414',
    brand: 'StyleCast',
    name: 'Leather Cropped Varsity',
    originalPrice: '₹3,299',
    discountPrice: '₹1,349',
    discount: 'Rs.1950 OFF',
    bestPrice: '₹1,281'
  },
  {
    id: 4,
    image: 'https://imgs7.luluandsky.com/catalog/product/x/m/xmfp05272_____july25ac.jpeg',
    brand: 'H&m',
    name: 'Baggy Cargo Pants',
    originalPrice: '₹2,999',
    discountPrice: '₹1,199',
    discount: 'Rs.1800 OFF'
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0rGq2uX5G4Z85nFN633f4Scl2JWKgx2tmT23kI5u7uX8QLyZiAX1QTPC_9Z6ZehpcjQ&usqp=CAU',
    brand: 'LULU & SKY',
    name: 'Cropped Baby Tee',
    originalPrice: '₹4,999',
    discountPrice: '₹2,499',
    discount: '50% OFF'
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg5ir96klaUfREA8r7zJV_YsH4mXNwOwmi5o7Y3pIgxQXhp_N0ICjLu_XAD7SWtpNDig&usqp=CAU',
    brand: 'ZARA',
    name: 'Cropped Denim Jacket',
    originalPrice: '₹7,999',
    discountPrice: '₹4,799',
    discount: '40% OFF'
  },
  {
    id: 7,
    image: 'https://images-cdn.ubuy.co.in/636a66d99545bd3a91370fab-women-y2k-harajuku-long-sleeve-crop-tops.jpg',
    brand: 'H&M',
    name: 'Long Sleeve Cropped T-shirt',
    originalPrice: '₹2,299',
    discountPrice: '₹1,149',
    discount: '50% OFF'
  },
  {
    id: 8,
    image: 'https://y2kdream.com/cdn/shop/files/2db6c0e80231aac0f5b326f3c07d578e.jpg?v=1702389253&width=564',
    brand: 'ZARA',
    name: 'Olive Parachute Pants',
    originalPrice: '₹3,499',
    discountPrice: '₹2,099',
    discount: '40% OFF'
  },
  {
    id: 9,
    image: 'https://m.media-amazon.com/images/I/71CXwQ+TU3L.jpg',
    brand: 'GUESS',
    name: 'Long Sleeve Grunge Tee',
    originalPrice: '₹2,999',
    discountPrice: '₹1,799',
    discount: '40% OFF'
  },
  {
    id: 10,
    image: 'https://m.media-amazon.com/images/I/31t8PqKrIuL._AC_UY350_.jpg',
    brand: 'GAP',
    name: 'Rust Brown Mid-Waist Cargos ',
    originalPrice: '₹4,299',
    discountPrice: '₹2,579',
    discount: '40% OFF'
  },
  {
    id: 11,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBOjcR13PWjnomNwUM8ed3_eZ18OIdhkmysz1VPQXuzubfC1F-frOv8kCaY90fVV1B70&usqp=CAU',
    brand: 'Newme',
    name: 'Streetwear Sleeveless Activity Tank Top',
    originalPrice: '₹3,499',
    discountPrice: '₹2,099',
    discount: '40% OFF'
  },
  {
    id: 12,
    image: 'https://m.media-amazon.com/images/I/51LsboExz3S._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
    brand: 'StyleCast',
    name: 'Printed Cropped T-shirt',
    originalPrice: '₹5,299',
    discountPrice: '₹3,179',
    discount: '40% OFF'
  },
  {
    id: 13,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxa-WjqVsiiBhDXEqxlX1f8HtVGWGNNaqlPychGZfX5jrYhhgWfSKWS_QTzZYqI5LhF1U&usqp=CAU',
    brand: 'ZARA',
    name: 'Utility Multi Pocket Cargos',
    originalPrice: '₹4,999',
    discountPrice: '₹2,999',
    discount: '40% OFF'
  },
  {
    id: 14,
    image: 'https://i.pinimg.com/736x/a0/9a/bb/a09abb72bd282c367987bb6c49ea440d.jpg',
    brand: 'Street 9',
    name: 'Loose O Neck Sweatshirt',
    originalPrice: '₹5,999',
    discountPrice: '₹3,599',
    discount: '40% OFF'
  },
  {
    id: 15,
    image: 'https://5.imimg.com/data5/ECOM/Default/2023/6/316785746/TA/TM/DS/9422220/jeans-woman-high-waist-clothes-flare-jeans-fashion-streetwear-stretch-denim-pants-606-500x500.jpg',
    brand: 'ZARA',
    name: 'HighWaist Flared Jeans',
    originalPrice: '₹7,999',
    discountPrice: '₹4,799',
    discount: '40% OFF'
  }
];

const Streetwear = () => {
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
      <h1>STREETWEAR</h1>
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

export default Streetwear;
