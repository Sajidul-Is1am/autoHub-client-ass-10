import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Layout from "../Layout/Layout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCard from "../Pages/MyCard/MyCard";
import AddBrandPersonal from "../Componets/AddBrandPersonal/AddBrandPersonal";
import BrandAdvirticement from "../Componets/BrandAdvirticement/BrandAdvirticement";
import UpdateProduct from "../Componets/UpdateProduct/UpdateProduct";
import Details from "../Pages/Details/Details";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import Title from "../Pages/Register/Title";
import Addproduct from "../Pages/DashBoard/Addproduct/Addproduct";


const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/mycard",
        element: (
          <PrivetRoute>
            <MyCard></MyCard>
          </PrivetRoute>
        ),
      },
      {
        path: "/addbrandpersonal",
        element: <AddBrandPersonal></AddBrandPersonal>,
      },
      {
        path: "/products/:brandName",
        element: <BrandAdvirticement></BrandAdvirticement>,
        loader: ({ params }) =>
          fetch(
            `https://autohub-brand-shop-server-1xi8c9bdl-mds040772-gmailcom.vercel.app/products/${params.brandName}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <UpdateProduct></UpdateProduct>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            `https://autohub-brand-shop-server-1xi8c9bdl-mds040772-gmailcom.vercel.app/products`
          ),
      },
      {
        path: "/products/details/:model",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            `https://autohub-brand-shop-server-1xi8c9bdl-mds040772-gmailcom.vercel.app/products`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <Title>DashBoard</Title>,
      },
      {
        path: "/dashboard/add-product",
        element: <Addproduct></Addproduct>,
      },
      {
        path: "/dashboard/manage-product",
        element: <Title>Manage Product</Title>,
      },
      {
        path: "/dashboard/add-catagory",
        element: <Title>Add Catagory</Title>,
      },
      {
        path: "/dashboard/manage-catagory",
        element: <Title>Manage Catagory</Title>,
      },
    ],
  },
]);

export default Route;