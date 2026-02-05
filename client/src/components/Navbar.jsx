import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../store/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-md bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-lg font-semibold text-indigo-500">zteX</span>
            </NavLink>
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex sm:items-center sm:space-x-8">
            <NavLink to="/" className="text-white hover:text-indigo-600 transition">Home</NavLink>
            <NavLink to="/about" className="text-white hover:text-indigo-600 transition">About</NavLink>
            <NavLink to="/services" className="text-white hover:text-indigo-600 transition">Services</NavLink>
            <NavLink to="/spam-detection" className="text-white hover:text-indigo-600 transition">spam-detection</NavLink>

            <NavLink to="/contact" className="text-white hover:text-indigo-600 transition">Contact</NavLink>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {!isAuthenticated ? (
              <>
                <NavLink to="/login" className="text-white hover:text-indigo-600 transition">Login</NavLink>

                <NavLink
                  to="/register"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Register
                </NavLink>

              </>


            ) : (
              <button
                onClick={logout}
                className="text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}


          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="p-2 rounded-md text-white hover:bg-indigo-500"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${open ? 'block' : 'hidden'} border-t border-gray-100 bg-zinc-900`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          <NavLink to="/" onClick={() => setOpen(false)} className="block text-indigo-600 px-2 py-2">Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className="block text-indigo-600 px-2 py-2">About</NavLink>

          <NavLink to="/services" onClick={() => setOpen(false)} className="block text-indigo-600 px-2 py-2">Services</NavLink>
          <NavLink to="/spam-detection" onClick={() => setOpen(false)} className="block text-indigo-600 px-2 py-2">spam-detection</NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)} className="block text-indigo-600 px-2 py-2">Contact</NavLink>

          <div className="pt-2 border-t border-gray-100">
            {!isAuthenticated ? (

              <>
                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block text-indigo-600 px-2 py-2"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="block mt-2 px-3 py-2 bg-indigo-600 text-white rounded-md text-center hover:bg-indigo-700"
                >
                  Register
                </NavLink>

              </>

            ) : (
              <button
                onClick={() => { logout(); setOpen(false); }}
                className="block w-full bg-red-600 text-white px-3 py-2 mt-2 rounded-md text-center"
              >
                Logout
              </button>
            )}


          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
