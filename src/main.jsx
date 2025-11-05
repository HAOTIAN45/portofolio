import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import 'remixicon/fonts/remixicon.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto'>
      <RouterProvider router={router}/>
    </div>
  </StrictMode>,
)
