import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import './scss/index.scss'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
  colorSchemes: {
    dark: true,
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
