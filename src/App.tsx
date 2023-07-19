import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { UserProvider } from './contexts/UserContext'
import { GlobalStyles } from './styles/globals'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <UserProvider>
          <Router />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
