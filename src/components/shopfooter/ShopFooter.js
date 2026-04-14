import React from 'react'
import './ShopFooter.css'
import { Link } from 'react-router-dom'

export default function ShopFooter() {

    const quickLinks = [
        { id: 1, name: "Shop", link: "/users/shop" },
        { id: 2, name: "About", link: "/users/about" },
        { id: 3, name: "Privacy Policy", link: "/" },
        { id: 4, name: "Terms & Conditions", link: "/" }
    ]

    const customerHelp = [
        { id: 1, name: "Contact Us", link: "/users/shop" },
        { id: 2, name: "FAQ", link: "/users/about" },
        { id: 3, name: "Shipping Info", link: "/" },
        { id: 4, name: "Returns /refund Policy", link: "/" }
    ]

    const socialMedia = [
        { id: 1, name: "Instagram", link: "/" },
        { id: 2, name: "Twitter", link: "/" },
        { id: 3, name: "Email Support", link: "/" }
    ]

  return (
    <footer className='footer-section'>
        <section className='footer-content'>
            <div className='footer-logo'>
                <h4>INTELIMART</h4>
            </div>

            <div className='footer-links'>
                <h4>Quick Links</h4>
                
                <div className='links'>
                    {quickLinks.map((l) => (
                        <Link
                            key={l.id}
                            to={l.link}
                        >
                            {l.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className='footer-links'>
                <h4>Customer Help</h4>
                
                <div className='links'>
                    {customerHelp.map((l) => (
                        <Link
                            key={l.id}
                            to={l.link}
                        >
                            {l.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className='footer-links'>
                <h4>Find Us</h4>
                
                <div className='links'>
                    {socialMedia.map((l) => (
                        <Link
                            key={l.id}
                            to={l.link}
                        >
                            {l.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        <section className='footer-bottom'>
            <div className='footer-logo'>
                <h4>INTELIMART</h4>
            </div>

            <div className='footer-logo'>
                <h4>&copy;INTELIMART 2026</h4>
            </div>
        </section>
    </footer>
  )
}
