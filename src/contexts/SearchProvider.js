import { createContext, useContext, useState } from "react";

// create the search context
const SearchContext = createContext()

// create a custom hook
export const useSearch = () => useContext(SearchContext)


export default function SearchProvider({ children }) {

    // state to control the search term
    const [ searchTerm, setSearchTerm ] = useState('') // empty strings for flexibility

    return (
        <SearchContext.Provider value={{
            searchTerm, setSearchTerm
        }}>
            { children }
        </SearchContext.Provider>
    )
}
