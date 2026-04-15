import axios from "axios";

const { createContext, useContext, useEffect, useState, useCallback } = require("react");

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
    const getUsers = useCallback(async () => {

        try {
            // start loading
            setLoading(true)

            // get the user token from localStorage
            const token = localStorage.getItem('token')
            const googleToken = localStorage.getItem('googleToken')

            // send a request to the backend
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
                headers: {
                    Authorization: `Bearer ${ token || googleToken }`
                }
            })

            // store the users in state
            setUsers(res.data.users)

            // stop loading
            setLoading(false)

        } catch(err) {
            console.error("ERROR getting all users: ", err)
        
        } finally {
            setLoading(false)
        }
    }, [])

    // fetch all users on mount
    useEffect(() => {
        getUsers()

    }, [getUsers])

    return (
        <UsersContext.Provider value={{
            getUsers, loading, users
        }}>
            { children }
        </UsersContext.Provider>
    )
}