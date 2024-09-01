import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Shop from './Components/Shop.jsx';
import Products from './Components/Products.jsx';
import Cart from './Components/Cart.jsx';
import Orders from './Components/Orders.jsx';
import Add_Product from './Components/Add_Product.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'',
        element:<Shop/>
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'add-product',
        element: <Add_Product />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
