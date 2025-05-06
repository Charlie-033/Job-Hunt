import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { FaUserTie } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from '../assets/userIcon.jpg'
// import { Link, Navigate, NavLink, useLocation, useNavigate, useParams } from "react-router";
// import userIcon from "../assets/user.png";
// import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  //   const {pathname} = useLocation();
  //   console.log(pathname);
  //   const isCategoryPage = pathname.startsWith("/category/");
  //   const { id } = useParams();
    const { user, logOut } = useContext(AuthContext);
  //   console.log(user);

    const handleLogOut = () => {
      logOut().then(alert("Logged Out Succesfully")).catch(error => console.log(error))
    }

  return (
    <div className="navbar bg-base-200 px-3 md:px-8 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/carrer">Carrer</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1 md:gap-3 lg:gap-4">
          <img
            src="https://i.ibb.co.com/3yFvy2qV/job-search.png"
            alt=""
            className="w-7 md:w-10 lg:w-12 hidden md:block"
          />
          <a className="text-2xl lg:text-4xl font-bold text-blue-900">JobHunt</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li className="text-[17px] font-semibold hover:bg-blue-900 hover:text-white rounded text-gray-600">
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className="text-[17px] font-semibold hover:bg-blue-900 hover:text-white rounded text-gray-600">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-[17px] font-semibold hover:bg-blue-900 hover:text-white rounded text-gray-600">
            <NavLink to="/about">Carrer</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        <span>
          <img className="w-10 h-10 rounded-full" src={user ? user.photoURL : userIcon}alt="" />
        </span>
        {
          user ? 
          <>
          <Link to="/auth/login"><button onClick={handleLogOut} className="btn bg-blue-900 text-white rounded-full">LogOut</button></Link>
          <Link to="/auth/register"><button className="btn bg-blue-900 text-white rounded-full">Register</button></Link> 
          </>
          : 
          <>
          <Link to="/auth/login"><button className="btn bg-blue-900 text-white rounded-full">Login</button></Link>
        <Link to="/auth/register"><button className="btn bg-blue-900 text-white rounded-full">Register</button></Link>
        </>
        }
      </div>
    </div>
  );
};

export default Navbar;
