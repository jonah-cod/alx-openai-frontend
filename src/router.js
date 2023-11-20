import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homePage';
import ProductListings from './pages/productListings';
import AdminReports from './pages/adminReports';
import ProductDetails from './components/productDetails';
import Cart from './pages/cart'



export const routes = createBrowserRouter([
      {path: '/', element:<HomePage/>, children: [
            {index: 'index', element: <ProductListings/>},
            {path: '/product/:id', element: <ProductDetails/>},
            {path: '/cart', element:<Cart/>}
      ]},
      {path: '/reports', element:<AdminReports/>}
]);