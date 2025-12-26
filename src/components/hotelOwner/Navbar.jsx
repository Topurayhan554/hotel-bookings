import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import { assets } from "../../assets/assets";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logOutFunc } = useContext(AuthContext);

  // Close dropdown when clicking outside
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
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      {/* Logo - Left Side */}
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="h-9 invert opacity-80" />
      </Link>

      {/* User Profile - Right Side */}
      {user ? (
        <div className="relative">
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

          {/* Dropdown Menu */}
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
          className="px-8 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
