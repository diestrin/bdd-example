import { DataProvider } from '../hooks/useData'

const Layout = ({ children, data }) => {
  return (
    <DataProvider data={data}>
      <div className='app'>
        <main>{children}</main>
      </div>
    </DataProvider>
  )
}

export default Layout
