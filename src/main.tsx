import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from '../src/components/Nav'
import Features from '../src/components/features'
import Email from './components/email'
import Stat from  './components/stat'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Nav />
   <Features />
   <Email />
   <Stat />
  </StrictMode>,
)
