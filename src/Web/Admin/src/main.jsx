import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Category from './components/pages/category.jsx';
import Dashboard from './components/pages/dashboard.jsx';
import Product from './components/pages/product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/category",
        element: <Category />
      },
      {
        path: "/product",
        element: <Product />
      }
    ]
  },
  // {
  //   path: "/login", 
  //   element: <LoginPage />
  // },
  // {
  //   path: "/register",
  //   element: <RegisterPage />
  // }
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <RouterProvider router={router} />
  </StrictMode>,
)
