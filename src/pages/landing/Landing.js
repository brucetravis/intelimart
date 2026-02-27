import React from 'react'
import './Landing.css'
import Sales from '../../components/adverts/sale/Sale'
import { Handshake, MessageCircle, Truck } from 'lucide-react'
import HandCoin from "mdi-react/HandCoinIcon";
import { Link, useNavigate } from 'react-router';
import ProductCard from '../../components/cards/product/ProductCard';
import { useProduct } from '../../contexts/ProductProvider'

export default function Landing() {

  // get the available products from the database
  const { products } = useProduct()

  // function to navigate to another page
  const navigate = useNavigate()

  return (
    <main className='landing-page'>
      <section>
        <div>
          <Sales />
        </div>

        <div className='values'>
          <div className='icon'>
            <Truck size={35} stroke='#0808ff' />

            <div>
              <h5>Free Shipping</h5>
              <p>On All Orders Over $99</p>
            </div>
          </div>
        
          <div className='icon'>
            <Handshake size={35} stroke='#0808ff' />

            <div className='icon-text'>
              <h5>Secure Payment</h5>
              <p>We ensure secure payment</p>
            </div>
          </div>
          
          <div 
            className='icon'

          >
            <HandCoin width={24} height={24} className='shake'/>

            <div className='icon-text'>
              <h5>100% Money Back</h5>
              <p>We ensure secure payment</p>
            </div>
          </div>

          <div className='icon'>
            <MessageCircle size={35} stroke='#0808ff' />

            <div className='icon-text'>
              <h5>Online Support</h5>
              <p>24/7 Dedicated support</p>
            </div>
          </div>
        </div>

        <div className='grid-cards'>
          {/* LEFT - tall image */}
          <div 
            className='women-advert big'
            onClick={() => navigate('/users/shop')}
          >
            <img 
              src={require('../../images/women-model-removebg-preview.png')}
              alt='women-model'
            />
            
            <div className='advert-text'>
              <h6>New Arrivals</h6>
              <h5>Women's Style</h5>

              <p>Up to 70% Off</p>
              
              <button>Shop Now</button>
            </div>
          </div>

          {/* RIGHT - top left */}
          <div 
            className='right-column'
            onClick={() => navigate('/users/shop')}
          >
            <div className='top-cards'>
              <div className='women-advert card-one'>
                <img 
                  src={require('../../images/bag-model-removebg-preview.png')}
                  alt='bag-model'
                />

                <div className='advert-text bag'>
                  <h6>25% OFF</h6>
                  <h5>Handbag</h5>

                  <p>Shop Now</p>
                </div>
              </div>

              <div 
                className='women-advert card-two'
                onClick={() => navigate('/users/shop')}
              >
                <img 
                  src={require('../../images/watch-model-removebg-preview.png')}
                  alt='bag-model'
                />

                <div className='advert-text watch'>
                  <h6>45% OFF</h6>
                  <h5>Watch</h5>
                  <p>Shop Now</p>
                </div>
              </div>
            </div>

            <div 
              className='women-advert wide'
              onClick={() => navigate('/users/shop')}
            >
              <div className='advert-text backpack'>
                <h6>Accessories</h6>
                <h5>Backpack</h5>
                <h6>Min. 40%-80% Off</h6>
                <p>Shop Now</p>
              </div>

              <img 
                src={require('../../images/backpack-model-removebg-preview.png')}
                alt='bag-model'
              />
            </div>
          </div>

        </div>

        <div className='product-titles'>
          <h4>Featured Products</h4>

          <div className='product-texts'>
            <h5>New Arrival</h5>
            <h5>Best Selling</h5>
            <h5>Top Rated</h5>
          </div>
        </div>

        <div className='products'>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/users/productdetails/${product._id}`}
              className='text-dark text-decoration-none'
            >
              <ProductCard
                productCategory={product.category} 
                productName={product.name.length > 50 ? product.name.substring(0, 50) + '...' : product.name} 
                productPrice={product.price} 
                productImage={product.image}
              />
            </Link>
          ))}
        </div>

        <div className='promo'>
          <div 
            className='men'
            onClick={() => navigate('/users/shop')}
          >
            <div className='men-text'>
              <h6>Weekend Sale</h6>
              <h5>Men's Fashion</h5>
              <h6>Flat <span>70% Off</span></h6>
              <p>Shop Now</p>
            </div>

            <img
              src={require("../../images/men-model-removebg-preview.png")}
              alt='bag-model'
            />
          </div>

          <div 
            className='women'
            onClick={() => navigate('/users/shop')}
          >
            <div className='women-text'>
              <h6>Fashion Style</h6>
              <h5>Women's Wear</h5>
              <h6>Min. <span>35%-70% Off</span></h6>
              <p>Shop Now</p>
            </div>

            <img 
              src={require('../../images/bag-model-removebg-preview.png')}
              alt='bag-model'
            />
          </div>
        </div>
      </section>
    </main>
  )
}
