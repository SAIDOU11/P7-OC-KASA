import React, { useContext, useEffect } from 'react'
import DataProducts from './data.json'

const AppContext = React.createContext()

// React.createContext() Récupere (Provider & Consumer) AppContext.Provider AppContext.Consumer

const AppProvider = ({ children }) => {
  console.log(DataProducts)

  useEffect(() => {
    console.log('fetch data here')
  }, [])

  return (
    <AppContext.Provider value={{ id: 'c67ab8a7', title: 'Appartement cosy' }}>
      <div>
        {children}
        <h1>{DataProducts[0].title}</h1>
      </div>
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
