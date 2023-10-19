import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Root from "../Root/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCard from "../Pages/MyCard/MyCard";
import AddBrandPersonal from "../Componets/AddBrandPersonal/AddBrandPersonal";
import BrandAdvirticement from "../Componets/BrandAdvirticement/BrandAdvirticement";
import UpdateProduct from "../Componets/UpdateProduct/UpdateProduct";
import Details from "../Pages/Details/Details";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addproduct',
                element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>
            },
            {
                path: "/mycard",
                element: <PrivetRoute><MyCard></MyCard></PrivetRoute>,
                loader: () => fetch('')
            },
            {
                path: '/addbrandpersonal',
                element: <AddBrandPersonal></AddBrandPersonal>
            },
            {
                path: '/products/:brandName',
                element: <PrivetRoute><BrandAdvirticement></BrandAdvirticement></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}`)
            },
            {
                path: '/update/:id',
                element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
            },
            {
                path: '/products/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    },
]);

export default Route;