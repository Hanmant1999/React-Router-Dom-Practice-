import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, RouterProvider} from "react-router-dom";
import { createBrowserRouter,createRoutesFromElements,Routes,Route } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { Login } from './Login';
import {Products } from "./Products.jsx";
import { Product } from './Product.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index path='/' element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} >
          <Route path=":productid" element={<Product/>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> <App /></RouterProvider>
  </React.StrictMode>,
)
