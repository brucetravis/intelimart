import axios from "axios"

// function to register a user
export const registerUser = async (data) => {
    
    // try catch block to handle errors in backend submission
    try {
        // backend response
        const response = await axios.post('http://locahost:5000/register', data)

        // log a success success messag
        console.log("User data successfully submited to the backend.", response)
        
    } catch (err) {
        console.error(err.response?.data || err.response)
    }
}

