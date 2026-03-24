import React, { useState } from 'react';
import './Register.css';
import { registerUser } from '../../services/authServices/register';

export default function Register() {

  // state to toggle between sign up and sign In
  const [ isLogIn, setIsLogIn ] = useState(false) // initially Log in is false

  // loading state
  const [ loading, setLoading ] = useState(false) // initially not loading

  // state to collect all the form data
  const [ formData, setFormData ] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  // funtion to handle the form submission
  const handleSubmit = async (e) => {
    // prevent the default form submission
    e.preventDefault()

    try {
      // set loading to true
      setLoading(true)

      // store the data in an object
      const data = {
        nameOne: formData.firstName,
        nameTwo: formData.secondName,
        email: formData.email,
        passowrd: formData.password,
        confirmPassword: formData.confirmPassword
      }
      
      // export the data for backend submission
      await registerUser(data)

      // clear the form
      setFormData(() => ({
        firstName: "",
        secondName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }))
      
      // setLoading to false
      setLoading(false)

    } catch (err) {
      console.error("Error exporting data the services file for backend submission: ", err)

    }
  }

  // function to update each form input according to the value using the name
  const handleChange = (e) => {
    // Destructure to get the name and the value
    const { name, value } = e.target

    // Update each form input
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  
  return (
    <section 
      className='registration-page'
    >
      <div className='column-one'>
        <h4>Welcome to INTELIMART</h4>
      </div>

      <div className='column-two'>
        <div className='title'>
          <h4>{ isLogIn ? "LOG IN" : "CREATE ACCOUNT" }</h4>
          
          <div className='alternatives'>
            <div className='google'>
              <div className='icon'>
                <img 
                  src='https://i.pinimg.com/736x/dc/d4/78/dcd478c78464521aa60ca34990de09d6.jpg'
                  alt='google icon'
                />
              </div>

              <h6>{ isLogIn ? "Sign In" :"Sign Up"} with Google</h6>
            </div>
            
            <div className='faceBook'>
              <div className='icon'>
                <img 
                  src='https://i.pinimg.com/1200x/5b/b0/f7/5bb0f73a7b3e0f976acad614a42e5040.jpg'
                  alt='facebook logo'
                />
              </div>

              <h6>{ isLogIn ? "Sign In" :"Sign Up"} with Facebook</h6>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
        >
          {!isLogIn && (
            <div className='first-row'>
              <div className='input-div'>
                <h6>First Name</h6>

                <input 
                  type='text'
                  placeholder='John'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='input-div'>
                <h6>Second Name</h6>

                <input 
                  type='text'
                  placeholder='Doe'
                  name='secondName'
                  value={formData.secondName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          <div className='input-div'>
            <h6>Email:</h6>

            <input 
              type='text'
              placeholder='john.doe@gmail.com'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>


          <div className='second-row'>
            <div className='input-div'>
              <h6>Password</h6>

              <input 
                type='password'
                placeholder='*********'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {!isLogIn && (
              <div className='input-div'>
                <h6>Confirm Password</h6>

                <input 
                  type='password'
                  placeholder='*********'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </div>

          <div className='button-div'>
            <button type='submit' className='submit-btn'>
              { isLogIn && loading ? "Log In....." : isLogIn ? "Log In" : !isLogIn && loading ? "Creating user...." : "Sign Up" }
            </button>

            <h6
              onClick={() => setIsLogIn((prev) => (!prev))}
            >
              { isLogIn ? "Don't have an Account yet? Sign Up": "Already have an Account? Sign In"}
            </h6>
          </div>
        </form>
      </div>
    </section>
  );
}
