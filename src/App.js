import React from 'react'
import GlobalStyles from './styles/global'
import RoutesApp from './routes'
import { AuthProvider } from './context/auth'

const App = () => {
  return (
    <AuthProvider>
    <RoutesApp/>
    <GlobalStyles/>
    </AuthProvider>
  )
}

export default App