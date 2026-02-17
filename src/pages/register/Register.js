import React from 'react';
import './Register.css';
import { useNavigate } from 'react-router';

export default function Register() {
  
  // function to navigate to another page
  const navigate = useNavigate()
  
  return (
    <section 
      className='registration-page'
    >
      <div className='column-one'>
        <h4>Welcome to INTELIMART</h4>
        
      </div>

      <div className='column-two'>
        <form
          onSubmit={() => navigate('/users/shop')}
        >
          <div className='names'>
            <div>
              <h6>First Name</h6>

              <input 
                type='text'
                placeholder='John'
                required
              />
            </div>

            <div>
              <h6>Second Name</h6>

              <input 
                type='text'
                placeholder='Doe'
                required
              />
            </div>
          </div>

          <div className='email'>
            <h6>Email:</h6>
            <input 
              type='text'
              placeholder='Doe'
              required
            />
          </div>
          
          <div className='passwords'>
            <div>
              <h6>Password</h6>

              <input 
                type='password'
                placeholder='*********'
                required
              />
            </div>

            <div>
              <h6>Confirm Password</h6>

              <input 
                type='password'
                placeholder='*********'
                required
              />
            </div>
          </div>

          <div>
            <button type='submit' className='submit-btn'>
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
