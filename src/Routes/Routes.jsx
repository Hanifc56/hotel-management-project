import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Error/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Home from "../Pages/Home/Home";
import PrivetRoutes from "./PrivetRoutes";

import Brand from "../Pages/Home/Brand";
import ProductByBrand from "../Pages/Brands/ProductByBrand";
import ProductDetails from "../Pages/Brands/ProductDetails";
import UpdateProduct from "../Pages/Brands/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivetRoutes>
            <AddProduct></AddProduct>
          </PrivetRoutes>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivetRoutes>
            <MyCart></MyCart>
          </PrivetRoutes>
        ),
        loader: () =>
          fetch("https://brand-shop-server-bthj.onrender.com/mycart"),
      },
      {
        path: "/brand",
        element: <Brand></Brand>,
      },
      {
        path: "/brand/:brandName",
        element: (
          <PrivetRoutes>
            <ProductByBrand></ProductByBrand>
          </PrivetRoutes>
        ),
        loader: () =>
          fetch("https://brand-shop-server-bthj.onrender.com/products"),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivetRoutes>
            <ProductDetails></ProductDetails>
          </PrivetRoutes>
        ),
        loader: () =>
          fetch("https://brand-shop-server-bthj.onrender.com/products"),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivetRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-bthj.onrender.com/products/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
