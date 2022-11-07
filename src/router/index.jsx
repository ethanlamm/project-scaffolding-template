import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react'

import Layout from '@/pages/layout'
const Home = lazy(() => import('@/pages/home'))
const About = lazy(() => import('@/pages/about'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
])

export default router