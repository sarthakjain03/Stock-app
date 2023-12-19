import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/ContextProvider.jsx'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
