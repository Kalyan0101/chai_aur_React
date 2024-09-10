import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



const reactElement = React.createElement(
  'h1',
  {
    href: 'https://google.com', target: '_blank'
  },
  'Click me to visit Google'
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
  // </StrictMode>,
  reactElement
)
