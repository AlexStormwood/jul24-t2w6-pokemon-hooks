import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserJwtProvider } from './contexts/UserJwtContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <UserJwtProvider>
      <App />
    </UserJwtProvider>
      
    
  </StrictMode>,
)
