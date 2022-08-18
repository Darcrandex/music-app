import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { RecoilRoot } from 'recoil'

import App from './App'
import './index.css'

const client = new QueryClient()
const root = createRoot(document.getElementById('root') || document.documentElement)

root.render(
  <BrowserRouter>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </BrowserRouter>
)
