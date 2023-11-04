import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <div className="grid grid-cols-12 h-screen">
          {/* manu */}
          <div className="col-span-3 bg-gray-300 h-full text-yellow-700 flex flex-col gap-6 justify-center">
            <NavLink
              to={"/dashboard"}
              className="py-4 w-full border-blue-400 border text-center"
            >
              Home
            </NavLink>
            <NavLink
              to={"/dashboard/add-product"}
              className="py-4 w-full border-blue-400 border text-center"
            >
              Add Product
            </NavLink>
            <NavLink
              to={"/dashboard/manage-product"}
              className="py-4 w-full border-blue-400 border text-center"
            >
              Manage Product
            </NavLink>
            <NavLink
              to={"/dashboard/add-catagory"}
              className="py-4 w-full border-blue-400 border text-center"
            >
              Add Catagory
            </NavLink>
            <NavLink
              to={"/dashboard/manage-catagory"}
              className="py-4 w-full border-blue-400 border text-center"
            >
              Manage Catagory
            </NavLink>
          </div>
          {/* added item section */}
          <div className="col-span-9 bg-rose-200 h-full">
            <Outlet></Outlet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
