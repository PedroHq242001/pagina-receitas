import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { FetchContextProvider } from './context/FetchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchContextProvider>
      <App />
    </FetchContextProvider>
  </StrictMode>,
)
