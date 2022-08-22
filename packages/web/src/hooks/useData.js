import { useContext, createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children, data }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export const useData = () => {
  const context = useContext(DataContext)

  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider ')
  }

  return context
}
