import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { IssuesProvider } from './contexts/IssuesContext'
import { UserProvider } from './contexts/UserContext'
import { GlobalStyles } from './styles/globals'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <UserProvider>
          <IssuesProvider>
            <Router />
          </IssuesProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
