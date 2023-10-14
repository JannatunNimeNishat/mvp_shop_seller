import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import ShopDataProvider from './Providers/ShopDataProvider'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <ShopDataProvider>
        <RouterProvider router={router}></RouterProvider>
      </ShopDataProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
