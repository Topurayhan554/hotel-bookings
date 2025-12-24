import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink } from "react-router";
import { assets } from "../assets/assets";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { IoMdSettings } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logOutFunc } = useContext(AuthContext);
  const navLinks = (
    <>
      {/* Home */}
      <NavLink
        to="/"
        className={`group relative w-fit ${
          isScrolled ? "text-white" : "text-white"
        }`}
      >
        Home
        <span
          className={`absolute left-0 -bottom-1 h-[2px] w-0
    transition-all duration-300 group-hover:w-full
    ${isScrolled ? "bg-blue-600" : "bg-blue-400"}`}
        />
      </NavLink>

      {/* Hotels */}
      <NavLink
        to="/hotels"
        className={`group relative w-fit ${
          isScrolled ? "text-white" : "text-white"
        }`}
      >
        Hotels
        <span
          className={`absolute left-0 -bottom-1 h-[2px] w-0
    transition-all duration-300 group-hover:w-full
    ${isScrolled ? "bg-blue-600" : "bg-blue-400"}`}
        />
      </NavLink>

      {/* Experience */}
      <NavLink
        to="/experience"
        className={`group relative w-fit ${
          isScrolled ? "text-white" : "text-white"
        }`}
      >
        Experience
        <span
          className={`absolute left-0 -bottom-1 h-[2px] w-0
    transition-all duration-300 group-hover:w-full
    ${isScrolled ? "bg-blue-600" : "bg-blue-400"}`}
        />
      </NavLink>

      {/* About */}
      <NavLink
        to="/about"
        className={`group relative w-fit ${
          isScrolled ? "text-white" : "text-white"
        }`}
      >
        About
        <span
          className={`absolute left-0 -bottom-1 h-[2px] w-0
    transition-all duration-300 group-hover:w-full
    ${isScrolled ? "bg-blue-600" : "bg-blue-400"}`}
        />
      </NavLink>
    </>
  );

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    setIsScrolled((prev) => (location.pathname !== "/" ? true : prev));
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".relative")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const handleLogOut = () => {
    logOutFunc()
      .then(() => {
        toast.success("LogOut successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center bg-blue-500 justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-gray-600  backdrop-blur-xl shadow-md  py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <img
          src={assets.logo}
          alt="logo"
          className={`h-9 text-black ${isScrolled && "invert-opacity-80"}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks}

        <Link
          to={"/dashboard"}
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
            isScrolled ? "text-white" : "text-black"
          } transition-all`}
        >
          Dashboard
        </Link>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <img
          src={assets.searchIcon}
          alt="search"
          className={`${
            isScrolled && "invert"
          } h-7 transition-all duration-500`}
        />

        {user ? (
          <div className="relative ml-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:ring-2 hover:ring-amber-500 transition-all duration-300 overflow-hidden"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-lg font-semibold text-gray-700">
                  {user.email?.charAt(0).toUpperCase()}
                </span>
              )}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">
                    {user.displayName || "User"}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>

                {/* Menu Items */}
                <div className="py-1">
                  <Link
                    to="/manage-account"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <IoMdSettings /> Manage Account
                    </div>
                  </Link>
                  <Link
                    to="/my-booklist"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <FaBookmark /> My Booklist
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleLogOut();
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FaArrowRightToBracket />
                      LogOut
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to={"/login"}
            className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
              isScrolled ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}

      <div className="flex items-center gap-3 md:hidden">
        {user ? (
          <div className="relative ml-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:ring-2 hover:ring-amber-500 transition-all duration-300 overflow-hidden"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-lg font-semibold text-gray-700">
                  {user.email?.charAt(0).toUpperCase()}
                </span>
              )}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">
                    {user.displayName || "User"}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>

                {/* Menu Items */}
                <div className="py-1">
                  <Link
                    to="/manage-account"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <IoMdSettings /> Manage Account
                    </div>
                  </Link>
                  <Link
                    to="/my-booklist"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <FaBookmark /> My Booklist
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleLogOut();
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FaArrowRightToBracket />
                      LogOut
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to={"/login"}
            className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
              isScrolled ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Login
          </Link>
        )}

        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt="menuIcon"
          className={`${isScrolled && "invert"} h-4`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-blue-400 text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="cloneMenu" className="h-6.5" />
        </button>

        {navLinks}

        <Link
          to={"/dashboard"}
          className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
