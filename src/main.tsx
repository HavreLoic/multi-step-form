import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import {
  ErrorPage,
  AddOn,
  FinishingUp,
  PersonalInfoCard,
  PlanSelection,
  ThankYou,
} from './UI'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/your-info',
        element: <PersonalInfoCard />
      },
      {
        path: '/select-plan',
        element: <PlanSelection />
      },
      {
        path: '/add-ons',
        element: <AddOn />
      },
      {
        path: '/summary',
        element: <FinishingUp />
      },
      {
        path: '/thank-you',
        element: <ThankYou />
      },
      {
        path: '*',
        element: <ErrorPage />
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
