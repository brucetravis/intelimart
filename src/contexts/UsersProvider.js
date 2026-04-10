import axios from "axios";

const { createContext, useContext, useEffect, useState } = require("react");

// create the context
const UsersContext = createContext()

// create and export a custom hook
export const useUsers = () => useContext(UsersContext)



// create and export a Users Provider
export default function UsersProvider({ children }) {

    // state to store all users
    const [ users, setUsers ] = useState(null) // initial state is null

    // loading state
    const [ loading, setLoading ] = useState(false) // initilally not loading

    // function to ge all the users
    const getUsers = async () => {

        try {
            // start loading
            setLoading(true)

            // send a request to the backend
            const res = await axios.get('http://localhost:5000/users')

            // store the users in state
            setUsers(res.data.users)

            // stop loading
            setLoading(false)

        } catch(err) {
            console.error("ERROR getting all users.")
        
        } finally {
            setLoading(false)
        }
    }

    // fetch all users on mount
    useEffect(() => {
        getUsers()

    }, [])

    return (
        <UsersContext.Provider value={{
            getUsers, loading, users
        }}>
            { children }
        </UsersContext.Provider>
    )
}