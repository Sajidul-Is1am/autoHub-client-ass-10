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


const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element:<Home></Home>
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
                path:'/addproduct',
                element:<AddProduct>`</AddProduct>
            },
            {
                path:"/mycard",
                element:<MyCard></MyCard>,
                loader: () => fetch('')
            },
            {
                path:'/addbrandpersonal',
                element:<AddBrandPersonal></AddBrandPersonal>
            },
            {
                path:'/products/:id',
                element:<BrandAdvirticement></BrandAdvirticement>,
                loader: ({params}) => fetch(`http://localhost:5000/products`)
            }
        ]
    },
]);

export default Route;