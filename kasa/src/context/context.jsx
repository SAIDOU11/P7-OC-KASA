import React, { useContext } from 'react'

const AppContext = React.createContext()

// React.createContext() Récupere (Provider & Consumer) AppContext.Provider AppContext.Consumer

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="hello I'm the Provider Value">
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
