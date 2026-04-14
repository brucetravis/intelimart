import React from 'react'
import './LogIn.css'
import { useNavigate } from 'react-router-dom'
import { XCircle } from 'lucide-react'
import { useAuth } from '../../../contexts/AuthProvider'

export default function LogIn() {
    const navigate = useNavigate()

    // get the function to close the modal
    const { setIsLoginModal } = useAuth()

    // function that runs when the sign up button is clicked
    const handleClick = () => {
        // close the modal
        setIsLoginModal(false)
        
        // navigate to the registration page
        navigate('/register')
    }

    return (
        <div className="login-overlay">
            <div className="login-modal">
                <XCircle 
                    size={24}
                    stroke="#ff2b14"
                    className='close-btn'
                    onClick={() => setIsLoginModal(false)}
                />

                <div className="login-image">
                    <img
                        src="https://i.pinimg.com/736x/29/5a/32/295a325cd52d968104e686df3ed761df.jpg"
                        alt="Sales banner"
                    />
                </div>

                <div className="login-content">
                    <h3>Sign up to get the Best deals</h3>

                    <button onClick={handleClick}>
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    )
}