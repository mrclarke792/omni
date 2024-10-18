import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import'./assets/css/style.css'
import './assets/css/remixicon.css'
import './assets/css/style.scss'
import './assets/css/responsive.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
