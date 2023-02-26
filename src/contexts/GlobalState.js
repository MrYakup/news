import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [search, setSearch] = useState("")
    return (
        <GlobalContext.Provider value={{ search, setSearch }}>
            {
                props.children
            }
        </GlobalContext.Provider>
    )
}
