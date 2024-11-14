import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
