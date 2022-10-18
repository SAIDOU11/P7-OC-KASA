import React, { useContext } from 'react'
import products from './data.json'

const AppContext = React.createContext()

// React.createContext() Récupere (Provider & Consumer) AppContext.Provider AppContext.Consumer

const AppProvider = ({ children }) => {
  console.log(products)

  return (
    <AppContext.Provider value={"Hello I'm the provider value"}>
      <div>
        {children}
        <h1>{products[0].title}</h1>
      </div>
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
