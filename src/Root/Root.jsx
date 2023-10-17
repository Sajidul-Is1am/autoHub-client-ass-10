import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar/Navbar";


const Root = () => {
    return (
        <div className="font-urbanist">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;