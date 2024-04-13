import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import NewPost from './components/NewPost';
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> }, // <our-domain>
  { path: '/home', element: <App /> }, // <our-domain>
  { path: '/create-post', element: <NewPost /> }, // <our-domain>
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
