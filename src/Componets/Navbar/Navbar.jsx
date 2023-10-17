import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLink = <div className="lg:flex gap-10">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addproduct'}>Add Product</NavLink></li>
        <li><NavLink to={'/mycard'}>My Cart</NavLink></li>
        <li><NavLink to={'/mycard'}>Extra 1</NavLink></li>
        <li><NavLink to={'/mycard'}>Extra 2</NavLink></li>
    </div>
    return (
        <div className="bg-[#08213e] py-6">
            <div className="text-white lg:mx-24 md:mx-16 mx-10">
                <div className="navbar w-full">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navLink
                                }
                            </ul>
                        </div>
                        <Link to={'/'}> <img src="https://i.ibb.co/Fs0w3Wx/auto-Hub-logo.png" alt="" className="w-[175px] h-[45px]" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal px-1">
                            {
                                navLink
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;