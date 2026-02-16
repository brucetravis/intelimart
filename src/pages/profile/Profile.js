import React from 'react'
import './Profile.css'
import { Edit, Mail, MapPin, Phone } from 'lucide-react'

export default function Profile() {
  return (
    <main
        className='profile-page'
    >
        <h4>User Profile</h4>

        <section
            className='profile-page'
        >
            <section
                className='profile-info'
            >
                <img 
                    src={'https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg'}
                    alt="user profile"
                />
                
                <div
                    className='mt-4'
                >
                    <h4>JENSEN HUANG</h4>
                </div>

                <div>
                    <span className='title'>
                        <MapPin size={15} stroke="#1cc462" />
                    </span>
                    <span>Boston</span>
                </div>

                <div>
                    <span className='title'>
                        <Mail size={15} stroke="#1cc462" />
                        EMAIL:
                    </span>
                    <span>jhuang@gmail.com</span>
                </div>
                
                <div>
                    <span className='title'>
                        <Phone size={15} stroke="#1cc462" />
                        PHONE:
                    </span>
                    <span>+254711234567</span>
                </div>
            </section>

            <section>
                <div
                    className='account-details'
                >
                    <div className='profile-title'>
                        <h4>Account Details</h4>
                        <Edit size={15} stroke="#333" />
                    </div>

                    <div>
                        <span className='title'>First Name</span>
                        <span>Jensen</span>
                    </div>
                    
                    <div>
                        <span className='title'>Last Name</span>
                        <span>Huang</span>
                    </div>

                    <div>
                        <span className='title'>Date of Birth</span>
                        <span>10 June 1990</span>
                    </div>
                    
                    <div>
                        <span className='title'>Gender</span>
                        <span>Male</span>
                    </div>
                </div>

                <div
                    className='shipping-address'
                >
                    <div
                        className='profile-title'
                    >
                        <h4>Address</h4>
                        <Edit size={15} stroke="#333" />
                    </div>

                    <div>
                        <span className='title'>Address</span>
                        <span>898 Joanne Lane Street</span>
                    </div>
                    
                    <div>
                        <span className='title'>City</span>
                        <span>Boston</span>
                    </div>

                    <div>
                        <span className='title'>Country</span>
                        <span>United states</span>
                    </div>
                    
                    <div>
                        <span className='title'>State</span>
                        <span>Massachusetts</span>
                    </div>

                    <div>
                        <span className='title'>Zip Code</span>
                        <span>02110</span>
                    </div>
                </div>
            </section>
            
            <section
                className='payment-methods'
            >
                <div
                    className='credit-card'
                >
                    <div
                        className='profile-title'
                    >
                        <h4>Payment Methods</h4>
                        <Edit size={15} stroke="#333" />
                    </div>
                    
                    <img 
                        src='https://i.pinimg.com/736x/e1/bb/06/e1bb063ed475f43742a0b347c21b22c8.jpg'
                        alt='credit card'
                    />
                </div>

                <div
                    className='card-details'
                >
                    <div>
                        <span className='title'>Card Type</span>
                        <span>VISA</span>
                    </div>
                    
                    <div>
                        <span className='title'>Card Holder</span>
                        <span>Jensen Huang</span>
                    </div>

                    <div>
                        <span className='title'>Expire</span>
                        <span>12/31</span>
                    </div>
                    
                    <div>
                        <span className='title'>Card Number</span>
                        <span>0123 4567 8910 1112</span>
                    </div>

                    <div>
                        <span className='title'>Balance</span>
                        <span>$ 1,000,000</span>
                    </div>
                </div>
            </section>
        </section>
        
    </main>
  )
}
