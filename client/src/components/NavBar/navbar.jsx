import React, { useEffect, useState } from "react";
import Logo from "../../../public/images/Logo.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { set } from "react-hook-form";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggin, setIsLoggin] = useState(false);

  const token = localStorage.getItem("token");
  
  useEffect(() => {
    if (token) {
      setIsLoggin(true);
    }
  }, [token]);


  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navitems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/companies", title: "Companies" },
    { path: "/post-job", title: "Post A Job" },
  ];
  return (
    <header className="w-full mx-auto xl:px-4 px-4">
      <nav className="flex justify-between items-center py-6">
        <a className="flex items-center gap-2 text-2xl text-slate-950" href="/">
          <img className="nav-bar-logo" src={Logo} alt="logo" />
          <span>NiceJob</span>
        </a>
        {/* <!-- nav items for larger device --> */}
        <ul className="hidden md:flex gap-12">
          {navitems.map(({ path, title }) => (
            <li
              key={path}
              className="w-50 h-50 text-base text-primary hover-effect font-bold first:text-blue"
            >
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
        </ul>
        {/* singup and login button */}
        {!isLoggin ? (
          <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
            <Link
              to="/login"
              className="py-2 px-5 border rounded hover:bg-gray-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="py-2 px-5 border rounded bg-blue text-white  hover:bg-cyan-950"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="flex items-center text-base text-primary font-medium space-x-2">
            <img
              src="https://media.licdn.com/dms/image/D5603AQGVruyFtHN25g/profile-displayphoto-shrink_200_200/0/1710589784479?e=1718841600&v=beta&t=dZj7qZVwAqL-OpHzO-_Urh3Lu4gq4ga-hT17RjNGksk"
              alt="Profile"
              className="rounded-full h-10 w-10"
            />
            <span className="text-lg">Hi</span>
            <span className="text-lg">Kavinda</span>
          </div>
        )}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "transition-all duration-1000 opacity-100" : "hidden"
        }`}
      >
        <ul>
          {navitems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-blue py-1"
            >
              <NavLink to={path} className="active">
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
