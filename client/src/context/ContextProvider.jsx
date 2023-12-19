import React, { useContext, createContext, useState } from 'react'

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    // const [symbolData, setSymbolData] = useState()

    return (
        <StateContext.Provider
            value={{
                // symbolData, setSymbolData,
            }}
        >
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)