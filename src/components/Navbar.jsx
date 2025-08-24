import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="pt-3 shadow-sm">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="dark:text-2ndry-1 self-center text-2xl font-semibold whitespace-nowrap">
            Portfolio
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-3 md:order-2">
          <DarkModeToggle />

          {/* Toggle mobile menu */}
          <button
            onClick={toggleMenu}
            type="button"
            className="texthilit1 dark:hover:bg-primary focus:ring-2ndry-1 dark:focus:ring-primary-3 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:ring-2 focus:outline-none md:hidden"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <Link to="/" className="navilink">
                <span className="texthilit1">#</span>home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="navilink">
                <span className="texthilit1">#</span>works
              </Link>
            </li>
            <li>
              <Link to="/about" className="navilink">
                <span className="texthilit1">#</span>about
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navilink">
                <span className="texthilit1">#</span>contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
