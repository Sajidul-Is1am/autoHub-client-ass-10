import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = ({ darkMode, setDarkMode }) => {
  const { user, handleLogOut } = useContext(AuthContext);

  const LogOut = () => {
    handleLogOut()
      .then((resuls) => {
        toast.success("Successfully LogOut");
        console.log(resuls.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleToggle = () => {
    setDarkMode((c) => !c);
  };
  const navLink = (
    <div className="lg:flex items-center gap-10 navlink">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addproduct"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/mycard"}>My Cart</NavLink>
      </li>
      { user?
        <li>
          <NavLink to={"/dashboard"}>DashBoard</NavLink>
        </li>:''
      }
      <li
        className="capitalize cursor-pointer hover:text-red-600"
        onClick={handleToggle}
      >
        {darkMode ? "light" : "dark"}
      </li>
    </div>
  );
  return (
    <div className="bg-[#08213e] py-6 navLink">
      <div className="text-white lg:mx-24 md:mx-16 mx-10">
        <div className="navbar w-full">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content mt-8 z-[1] p-2 shadow bg-[#08213e] border  w-40 text-center "
              >
                {navLink}
              </ul>
            </div>
            <Link to={"/"}>
              {" "}
              <img
                src="https://i.ibb.co/Fs0w3Wx/auto-Hub-logo.png"
                alt=""
                className="w-[175px] h-[45px]"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                {user ? (
                  <img className="w-10 h-10 rounded-full" src={user.photoURL} />
                ) : (
                  <NavLink className={"btn"} to={"/login"}>
                    Login
                  </NavLink>
                )}
              </label>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content mt-8  z-[1] p-4 shadow bg-[#08213e] border  w-36 text-center -ml-10"
              >
                {user ? (
                  <>
                    <p className="mx-2 mb-4">{user.displayName}</p>
                    <NavLink
                      className={"p-4 text-red-500"}
                      onClick={LogOut}
                      to={"/login"}
                    >
                      LogOut
                    </NavLink>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>

          <div className=" hidden md:flex navbar-end font-bold">
            {user ? (
              <div className="flex items-center">
                <div>
                  <img className="w-10 h-10 rounded-full" src={user.photoURL} />
                </div>
                <p className="mx-2">{user.displayName}</p>
                <NavLink className={"btn"} onClick={LogOut} to={"/login"}>
                  LogOut
                </NavLink>
              </div>
            ) : (
              <NavLink className={"btn"} to={"/login"}>
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
