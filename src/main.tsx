// src/main.tsx
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@generouted/react-router'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root')!)
root.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)
