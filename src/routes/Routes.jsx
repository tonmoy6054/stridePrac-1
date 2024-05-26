// import {
//     createBrowserRouter,
   
//   } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";

// import About from "../pages/about/About";
// import Contact from "../pages/contact/Contact";
// import Login from "../pages/Login/Login";
// import Register from "../pages/register/Register";
// import AllProducts from "../pages/products/AllProducts";

// import Home from "../components/home/Home";
// import AllCategories from "../pages/all-categories/AllCategories";

// import AddProduct from "../layouts/AddProduct";
// import EditProduct from "../layouts/EditProduct";
// import Dashboard from "../layouts/DashboardLayout";

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <MainLayout />,
//       children: [
//         {
//         index: true,
//         element: <Home />
//       },
//         {
//         path: 'about',
//         element: <About />
//       },
//         {
//         path: 'contact',
//         element: <Contact />
//       },
//         {
//         path: 'login',
//         element: <Login />
//       },
//         {
//         path: 'register',
//         element: <Register />
//       },
//         {
//         path: 'allproducts',
//         element: <AllProducts />
//       },
//     {
//       path: 'all-categories',
//       element: <AllCategories />

//     }
//     ]
//     },
    
    
//     <PrivateRoute path="/dashboard" component={Dashboard} />
    
//     {
//         path: '/edit-product/:id',
//         element: <EditProduct />
//     },
//     {
//         path: '/add-product',
//         element: <AddProduct />
//     },
//   ])
//   export default router;

// src/routes/Routes.jsx
// src/routes/Routes.jsx
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Login from '../pages/Login/Login';
import Register from '../pages/register/Register';
import AllProducts from '../pages/products/AllProducts';
import Home from '../components/home/Home';
import AllCategories from '../pages/all-categories/AllCategories';
import AddProduct from '../layouts/AddProduct';
import EditProduct from '../layouts/EditProduct';
import Dashboard from '../layouts/DashboardLayout';
import PrivateRoute from '../routes/PrivateRoute';
import ProductDetails from '../layouts/ProductDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="allproducts" element={<AllProducts />} />
        <Route path="all-categories" element={<AllCategories />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
