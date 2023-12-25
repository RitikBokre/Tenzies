/**
 * Challenge: Start a brand new React app!
 * - Create a separate App component
 * - Import and render the App component here
 * - In the App component, render a <main> element
 * - Style everything to look like the slide
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '/App'

const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl);
root.render(<App />)