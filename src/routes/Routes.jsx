import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import AllProducts from "../pages/products/AllProducts";
import Home from "../components/home/Home";
import AllCategories from "../pages/all-categories/AllCategories";
import AddProduct from "../layouts/AddProduct";
import EditProduct from "../layouts/EditProduct";
import Dashboard from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../layouts/ProductDetails";
import EditUserProfile from "../layouts/EditUserProfile";


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
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
  path="profile/edit/:id"
  element={<EditUserProfile />}
  loader={({ params }) => fetch(`https://r-p-server-ltnrm38y1-tonmoy6054s-projects.vercel.app/users/get/${params.id}`).then(res => res.json())}
/>

      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
