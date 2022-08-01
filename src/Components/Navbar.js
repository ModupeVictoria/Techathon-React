import React, { useState } from "react";
import {  NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div>
      <nav className="bg-[#d5e5f5] px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to="/" className="flex items-center">
           <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#6692d7] italic"
           
           >
              Our Pet
             </span>
           </NavLink>

          <div className="flex md:order-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
              <svg
              className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
               ) : (
                <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
               )}
            </button>
            <div className="hidden relative md:block">
            <div className={`flex flex-col p-4 mt-4  bg-[#d5e5f5] rounded-lg z-[-1] w-full border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#d5e5f5] md:mx-10 ${isOpen ? 'top-20' : 'top-[-490px]'}` 
           }>

            <NavLink
              to="/"
              className="block py-2 pr-4 pl-3 mx-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
              aria-current="page"
              style={({isActive}) =>
              isActive ? {color: '#6692d7'} : {color: '#001d46'}
            }
            >
              Home
            </NavLink>

            <NavLink
              to="/register"
              className="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6692d7] md:p-0"
              style={({isActive}) =>
              isActive ? {color: '#6692d7'} : {color: '#001d46'}
            }
            >
              Register
            </NavLink>

            <NavLink
              to="/login"
              className="block py-2 pr-4 pl-3 mx-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6692d7] md:p-0"
              style={({isActive}) =>
              isActive ? {color: '#6692d7'} : {color: '#001d46'}
            }
            >
              Login
            </NavLink>

            

        </div>
            </div>
            
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
