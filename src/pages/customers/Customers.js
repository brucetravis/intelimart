import React, { useEffect, useState } from 'react'
import './Customers.css'
import Button from '../../components/buttons/Button';
import { Search } from 'lucide-react';
import Customer from '../../components/modals/customer/Customer';
import { useUsers } from '../../contexts/UsersProvider';
import { useAuth } from '../../contexts/AuthProvider'

export default function Customers() {

    // state to open the customer modal
    const [ showCustomer, setShowCustomer ] = useState(false) // initial state is false meaning the modal is initially closed

    // state to display the selected customer data
    const [ selectedCustomer, setSelectedCustomer ] = useState(null) // initial state is null/empty

    // state to handle the seatch term
    const [ searchTerm, setSearchTerm ] = useState("") // Empty strings for flexibility of characters

    // state to store the filtered users
    const [ filteredUsers, setFilteredUsers ] = useState([]) // initial state is an empty array

    // function to open the customer modal
    const openCustomer = (customer) => {
        setSelectedCustomer(customer)
        setShowCustomer(true) // update dynamically
    }

    // function to close the modal
    const closeCustomer = () => {
        setShowCustomer(false)
    }

    // get the users from the users provider
    const { users } = useUsers()

    // get the decodedToken from the authProvider
    const { decodedToken } = useAuth()

    // function to handle the change in input characters
    const handleChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase())
    }

    // useEffect to filter the products
    useEffect(() => {
        // if the search bar is empty
        if (!searchTerm.trim() === "") {
            // return all the users
            setFilteredUsers(users)
            // exit the function
            return
        }

        // otherwise filter by the name, email phone etc
        setFilteredUsers(
            users?.filter((user) =>
                user?._id.includes(searchTerm) ||
                user?.firstName?.toLowerCase().includes(searchTerm) || // filter by the first name
                user?.secondName?.toLowerCase().includes(searchTerm) || // filter by the second name
                user?.email.includes(searchTerm) ||
                user?.phoneNumber?.includes(searchTerm) ||
                user?.role?.toLowerCase().includes(searchTerm)
            )
        )

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

    }, [searchTerm, users]) // watch out for the users and the search term

  return (
    <>
        <section
            className='customers-page'
        >
            <h4>Customers</h4>
            
            
            <div
                className='customer-controls'
            >
                <Search size={18} className='search-icon' />
                
                <input
                    type='text'
                    placeholder='Search id, name, email, role'
                    className='customer-search'
                    name='search'
                    value={searchTerm}
                    onChange={handleChange}
                />

            </div>

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>role</th>
                        <th>Status</th>
                        <th>Date Joined</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredUsers?.length > 0 ? (
                        filteredUsers?.map((user) => (
                            <tr
                                key={user._id}
                            >
                                <td>{user._id.length > 20 ? user._id.substring(0, 10) + "..." : user._id}</td>
                                <td className='customer-name'>
                                    <img 
                                        src={user?.img || "https://i.pinimg.com/1200x/cd/4b/d9/cd4bd9b0ea2807611ba3a67c331bff0b.jpg"}
                                        alt={user?.firstName.split(" ")[0]}
                                        className='customer-image'
                                    />
                                    {user.firstName.split(" ")[0]}
                                </td>
                                <td>
                                    {user.secondName}
                                </td>
                                <td>{user.email}</td>
                                <td>{user?.phone || "+2547100000000"}</td>
                                <td>{user.role}</td>
                                <td
                                    className={
                                        decodedToken?.firstName === user.firstName ? "status-active" : "status-inactive" 
                                    }
                                >
                                    {decodedToken?.firstName === user.firstName ? "active" : "inactive"}
                                </td>
                                <td>{user.createdAt.split("T")[0]}</td>
                                <td className='user-actions'>
                                    <Button name="view" text="View" clickFunction={() => openCustomer(user)}/>
                                    <Button name="delete" text="Delete" />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr
                            className='no-customers'
                        >
                            <td colSpan={9}>No Users Available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>

        {showCustomer && selectedCustomer && (
            <Customer 
                customer={selectedCustomer} 
                onClick={closeCustomer} 
            />
        )}
    </>
  )
}
