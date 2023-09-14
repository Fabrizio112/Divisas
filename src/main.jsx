import React from 'react'
import ReactDOM from 'react-dom/client'
import CurrencyApp from './components/CurrencyApp'
import { Provider } from 'react-redux'
import { store } from './store/store'
import "./assets/css/styles.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <CurrencyApp />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
