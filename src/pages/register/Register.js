import React, { useState } from 'react';
import './Register.css';
import { useAuth } from '../../contexts/AuthProvider';
import Button from '../../components/buttons/Button';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function Register() {

  // loading state
  const [ loading, setLoading ] = useState(false) // initially not loading

  // get the function to login a user
  const { loginUser, registerUser, isLogIn, setIsLogIn, signInWithGoogle } = useAuth()
  

  // state to collect all the form data
  const [ formData, setFormData ] = useState({
    firstName: "",
    secondName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  // funtion to handle the form submission
  const handleRegister = async (e) => {
    // prevent the default form submission
    e.preventDefault()

    try {

      // store the data in an object
      const userData = {
        firstName: formData.firstName.trim(),
        secondName: formData.secondName.trim(),
        gender: formData.gender.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
        confirmPassword: formData.confirmPassword.trim()
      }
      
      // export the data for backend submission
      await registerUser(userData, setLoading)

      // clear the form
      setFormData(() => ({
        firstName: "",
        secondName: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: ""
      }))

    } catch (err) {
      console.error("Error exporting data to the context provider file for backend submission: ", err)
    }
  }

  // function to log in a user
  const handleLogin = async (e) => {
    // prevent the default form sunmition
    e.preventDefault()

    // try catch block

    try {
      // get all the user data
      const userData = {
        email: formData.email,
        password: formData.password
      }
      
      // resolve the promise while loggin in the user
      await loginUser(userData, setLoading)

      console.log("User data submitted to the Auth Provider for log In.")

    } catch(err) {
      console.error("ERROR exporting user data to the services file for user log in: ", err)
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

  const navigate = useNavigate()

  // function to handle log in with Google
  const handleGoogleLogIn = async () => {
    try {
      // set the loading state to true
      setLoading(true)

      // log/register in the user
      const token = await signInWithGoogle() // wait for the log in

      // store the token in localStorage
      localStorage.setItem('googleToken', token)

      // toast success message
      toast.success("User logged in successfully.")

      // set loading to false
      setLoading(false)

      // navigate to the shop
      navigate('/users/shop')

    } catch(err) {
      console.error("ERROR with Google sign-in: ", err)
      toast.error(err.message || "Google Sign In failed")
    }
  }
  
  return (
    <section 
      className='registration-page'
    >
      <div className='column-one'>
        <Button 
          name="registration-home-btn" 
          text="Home" 
          clickFunction={() => navigate('/users/landing')} 
        />

        <div className='text'>
          <h6>WELCOME TO INTELIMART</h6>
          <p>Your online intelligent market store</p>
        </div>
      </div>

      <div className='column-two'>
        <div className='title'>
          <h4>{ isLogIn ? "LOG IN" : "CREATE ACCOUNT" }</h4>
          
          <div className='alternatives'>
            <div className='google'>
              <div 
                className='icon'
                onClick={handleGoogleLogIn}
              >
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
          onSubmit={ isLogIn ? handleLogin : handleRegister }
        >
          {!isLogIn && (
            <div className='first-row'>
              <div className='input-div'>
                <h6>First Name</h6>

                <input 
                  type='text'
                  placeholder='John'
                  name='firstName'
                  value={formData.firstName.trim()}
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
                  value={formData.secondName.trim()}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {!isLogIn && (
            <div className='input-div'>
              <h6>Gender:</h6>

              <select
                name='gender'
                value={formData.gender.trim()}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          )}

          <div className='input-div'>
            <h6>Email:</h6>

            <input 
              type='text'
              placeholder='john.doe@gmail.com'
              name='email'
              value={formData.email.trim()}
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
                value={formData.password.trim()}
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
                  value={formData.confirmPassword.trim()}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </div>

          <div className='button-div'>
            { isLogIn ? (
              <button type="submit" className="submit-btn">
                { loading ? "Logging In...." : "Log In" }
              </button>
            ) : (
              <button type="submit" className="submit-btn">
                { loading ? "Creating User...." : "Sign Up" }
              </button>
            ) }

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
