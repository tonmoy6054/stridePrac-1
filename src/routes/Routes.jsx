import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import AllProducts from "../pages/products/AllProducts";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../components/home/Home";
import AllCategories from "../pages/all-categories/AllCategories";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
        index: true,
        element: <Home />
      },
        {
        path: 'about',
        element: <About />
      },
        {
        path: 'contact',
        element: <Contact />
      },
        {
        path: 'login',
        element: <Login />
      },
        {
        path: 'register',
        element: <Register />
      },
        {
        path: 'allproducts',
        element: <AllProducts />
      },
    {
      path: 'all-categories',
      element: <AllCategories />

    }
    ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>
    }
  ])
  export default router;