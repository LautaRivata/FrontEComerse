import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  ErrorPage,
  HomePage,
  LogInPage,
  RegisterPage,
  EditPage,
  LogoutPage,
  ConfirmPage,
  OrdersPage,
} from "./pages"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/EditPage/:id?" element={<EditPage />} />
          <Route path="/OrdersPage/:id?" element={<OrdersPage />} />
          <Route path="/ConfirmPage" element={<ConfirmPage />} />
        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
