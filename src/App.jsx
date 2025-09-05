import React from 'react'
import { Analytics } from '@vercel/analytics/react';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Discord from './pages/Discord'
import { ConfigProvider } from 'antd'
import AosProvider from './components/AosProvider'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
// data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000"
export default function App() {

  function PageLayout() {
    return <>
      <Header />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  }

  function ProtectedPagesLayout() {
    const site = useSelector(state => state.site)
    if (!site.isLoggedIn) {
      return <Navigate to="/login" replace />
    }
    else {
      return <>
        <div className="min-h-[80vh]">
          <Outlet />
        </div>
      </>
    }
  }

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <>
            <Home />
          </>
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/login",
          element: <Login />
        }
      ],
      errorElement: <Error />
    },
    {
      path: "/dashboard",
      element: <ProtectedPagesLayout />,
      children: [
        {
          path: "/dashboard/overview",
          element: <Discord />
        }
      ]
    },
  ])


  return (
    <>
      <Toaster />
      <ConfigProvider>
        <AosProvider>
          <RouterProvider router={pageRoutes}>
            <Analytics />
          </RouterProvider>
        </AosProvider>
      </ConfigProvider>
    </>
  )
}
