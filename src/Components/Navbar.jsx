import { IoSearchOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-[32px]">Recipe Calories</a>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#150b2bb3] font-semibold text-base ">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>

            <div className=" gap-2">
                <div className="form-control relative">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <div className="text-2xl absolute right-0 translate-y-1/2 px-4">
                    <IoSearchOutline />
                </div>
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="text-4xl text-green-400">
                    <FaCircleUser />
                    </div>
                </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;