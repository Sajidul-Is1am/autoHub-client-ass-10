import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar/Navbar";
import { useState } from "react";


const Layout = () => {
    const [darkMode, setDarkMode]=useState(false)
    console.log(darkMode);
    return (
        <div data-theme={darkMode?"dark":"light"} className="font-urbanist">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
            <Outlet></Outlet>
        </div> 
    );
};

export default Layout;