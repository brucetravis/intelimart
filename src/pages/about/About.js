import React from 'react'
import './About.css'
import AboutCard from '../../components/cards/aboutcard/AboutCard'
import { Brain, Shield, ShoppingCart, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/buttons/Button'

export default function About() {

  const navigate = useNavigate()

  return (
    <main className='about-page'>
        <h4>ABOUT INTELIMART</h4>

        <section className='about-page-content'>
          <p>
            INTELIMART is an AI-powered e-commerce platform designed to simplify and improve the online shopping 
            experience. It helps customers quickly find the right products by analyzing their preferences, budget, 
            size, and browsing behavior. Instead of manually searching through many items, users receive smart, 
            relevant recommendations that guide them toward the best choice. The platform focuses on reducing 
            decision fatigue and increasing shopping efficiency by using intelligent systems that understand user 
            needs and match them with the most suitable products in real time.INTELIMART is an AI-powered e-commerce 
            platform designed to simplify and improve the online shopping experience. It helps customers quickly find 
            the right products by analyzing their preferences, budget, size, and browsing behavior. Instead of manually 
            searching through many items, users receive smart, relevant recommendations that guide them toward the best 
            choice. The platform focuses on reducing decision fatigue and increasing shopping efficiency by using 
            intelligent systems that understand user needs and match them with the most suitable products in real time.
          </p>
        </section>

        <section className='about-section-cards'>
          <AboutCard
            icon={<Brain />}
            title="AI Recommendations"
            description="Smart product suggestions based on user behavior and preferences."
          />

          <AboutCard
            icon={<ShoppingCart />}
            title="Smart Shopping"
            description="Helps users quickly find the right product without browsing endlessly."
          />

          <AboutCard
            icon={<Sparkles />}
            title="Personalized Experience"
            description="Adapts to user budget, style, and purchase history in real time."
          />

          <AboutCard
            icon={<Shield />}
            title="Secure Platform"
            description="Safe transactions and reliable product management system."
          />
        </section>

        <Button name="shop-nav" text="Shop Now" clickFunction={() => navigate('/users/shop')} />
    </main>
  )
}
