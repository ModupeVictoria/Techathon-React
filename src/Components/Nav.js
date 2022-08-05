import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {  NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-[#d5e5f5] px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <div className="flex items-center ">
            <NavLink to="/" className="flex items-center">
           <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#6692d7] italic"
           
           >
              Our Pet
             </span>
           </NavLink>

              <div className="hidden relative md:block">
                <div className="flex flex-col p-4 mt-4  bg-[#d5e5f5] rounded-lg z-[-1] w-full border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#d5e5f5] md:mx-10">
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
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#6692d7] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#4669a1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
            </div>
          </div>
       

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
          )}
        </Transition>
      </nav>

     
     
    </div>
  );
}

export default Nav;
