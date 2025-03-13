import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// css
import '../styles/semaforo.css'

// components
import Semaforo from './components/Semaforo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Semaforo />
  </StrictMode>,
)
