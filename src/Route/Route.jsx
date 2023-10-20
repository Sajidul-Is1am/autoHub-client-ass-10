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
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: () => fetch('https://autohub-brand-shop-server-ch57x3wps-mds040772-gmailcom.vercel.app/mycard')
            },
            {
                path: '/addbrandpersonal',
                element: <AddBrandPersonal></AddBrandPersonal>
            },
            {
                path: '/products/:brandName',
                element: <BrandAdvirticement></BrandAdvirticement>,
                loader: ({ params }) => fetch(`https://autohub-brand-shop-server-ch57x3wps-mds040772-gmailcom.vercel.app/${params.brandName}`)
            },
            {
                path: '/update/:id',
                element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
                loader: () => fetch(`https://autohub-brand-shop-server-ch57x3wps-mds040772-gmailcom.vercel.app`)
            },
            {
                path: '/products/details/:model',
                element: <PrivetRoute><Details></Details></PrivetRoute>,
                loader: () => fetch(`https://autohub-brand-shop-server-ch57x3wps-mds040772-gmailcom.vercel.app`)
            }
        ]
    },
]);

export default Route;