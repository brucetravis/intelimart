import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth, googleProvider } from "../configs/firebase";

// create the context
const AuthContext = createContext()

// create a custom hook for the context
export const useAuth = () => useContext(AuthContext)

// export the context provider as deafult
export default function AuthProvider({ children }) {

    // state to toggle between sign up and sign In
    const [ isLogIn, setIsLogIn ] = useState(false) // initially Log in is false

    // state to render the UI when the user is logged in
    const [ isLoggedIn, setIsLoggedIn ] = useState(false) // initial state is false meaning user is not logged in

    // state to store theuser Google token
    const [ userToken, setUserToken ] = useState(null) // initiallt the state has nothing 

    // function to navigate to another page
    const navigate = useNavigate()

    // function to register a user
    const registerUser = async (userData, loadingFunc) => {

        // try catch block to handle errors in backend submission
        try {
            
            loadingFunc(true)
            
            // data sent to the backend
            // console.log("BACKEND DATA: ", userData)
            
            // backend response
            const response = await axios.post('http://localhost:5000/users/register', userData)

            loadingFunc(false)

            // set the logged in state to true
            setIsLoggedIn(true)

            // log a success success messag
            // console.log("User data successfully submited to the backend.", response)
            console.log("User data successfully submited to the backend.", response)
            
            // Submit a toast frontend success message
            toast.success("User Signed Up successfully.")

            // update the login state to true
            setIsLogIn(true)
            
        } catch (err) {
            console.error('ERROR SENDING DATA TO THE BACKEND', err.response?.data || err.response)
            
             // error messages
            const errorMessage = 
                err.response?.data?.message || // abckend server error
                err.response || // axios/Network error
                'Something went wrong'
            
            toast.error(errorMessage)
        }
    }

    // function to sign in with Google
    const signInWithGoogle = async () => {

        try {
            // get the user data from the opened pop up (displayName, email, photoURL, uid)
            const result = await signInWithPopup(auth, googleProvider)

            // The signed-in user info
            const user = result.user

            // get the token if needed
            const googleToken = await user.getIdToken()

            // update the token google state with the token
            setUserToken(googleToken)

            // log the user info
            console.log("Google User: ", user)

            // success log in toast messsage
            
            return googleToken

        } catch(err) {
            console.error("Google Sign In Error: ", err)
            throw err
        }
    }

    const loginUser = async (userData, loadingFunc) => {

        try {
            // start loading
            loadingFunc(true)

            // post the data to the backend in order to log in
            const response = await axios.post('http://localhost:5000/users/logIn', userData)

            // Get the token from the backend
            const token = response.data.token

            // store the token in localStorage for now
            localStorage.setItem("token", token)

            // set the LoggedIn state to true
            setIsLoggedIn(true)

            // navigate the user to the home page
            navigate('/users/shop')

            // stop loading
            loadingFunc(false)

            // toast a user a success message
            toast.success("User Logged In successfully")

        } catch(err) {
            console.error("ERROR Submitting the data to the backend for Login: ", err)

            // error messages
            const errorMessage = 
                err.response?.data?.message || // abckend server error
                err.response || // axios/Network error
                'Something went wrong'
            
            toast.error(errorMessage)
        
        } finally {
            loadingFunc(false)
        }

    }

    //  functiont to log out a user
    const handleLogOut = () => {
        // Get the MongoDB token from localStorage
        localStorage.removeItem('token')

        // Get the Google token from localStorage
        localStorage.removeItem('googleToken')

        // remove the google token
        setUserToken(null)
        
        // set the state to false
        setIsLoggedIn(false)

        // navigate the user to the landing page
        navigate('/users/landing')

        // notify the user that they have been logged out successfully
        toast.success("User Logged out successfully.")
    }

    

    return(
        <AuthContext.Provider value={{
            handleLogOut, isLoggedIn, setIsLoggedIn, 
            loginUser, registerUser, isLogIn, setIsLogIn,
            signInWithGoogle, userToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}