import React from 'react';
import { AuthContext } from '../store/AuthProvider';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-[#121111] text-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-24 px-6">

        {/* LEFT TEXT CONTENT */}
        <div className="max-w-xl space-y-6">
          <p className="text-gray-400 text-lg">We are the World Best IT Company</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to zteX <br />
            Technical <span className="text-amber-900">
              {user && user.name}
            </span>
          </h1>

          <p className="text-gray-300">
            Are you ready to take your business to the next level with cutting-edge IT
            solutions? Look no further! At Thapa Technical, we specialize in providing
            innovative IT services and solutions tailored to meet your unique needs.
          </p>

          <div className="flex gap-4 pt-4 items-center">
            <NavLink to="/contact">
              <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold">
                Connect Now
              </button>
            </NavLink>
            <NavLink to="https://jobs.ztex.co/?unit=mile&radius=100&schedule=daily&page=1&search=1">
              <button className="border border-indigo-500 hover:bg-indigo-600/20 px-6 py-3 rounded-lg font-semibold">
                Learn More
              </button>
            </NavLink>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-12 md:mt-0">
          <img src="/image/register.png" alt="Developers working illustration" className="w-[420px]" />
        </div>

      </div>

      {/* STATS SECTION */}
      <div className="bg-[#e8e8f1] text-black w-full py-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center">

          <div className="py-4 border-b md:border-b-0 md:border-r border-gray-300">
            <h2 className="text-3xl font-bold">50+</h2>
            <p className="text-gray-600">Registered Companies</p>
          </div>

          <div className="py-4 border-b md:border-b-0 md:border-r border-gray-300">
            <h2 className="text-3xl font-bold">100,00+</h2>
            <p className="text-gray-600">Happy Clients</p>
          </div>

          <div className="py-4 border-b md:border-b-0 md:border-r border-gray-300">
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="text-gray-600">Well Known Developers</p>
          </div>

          <div className="py-4">
            <h2 className="text-3xl font-bold">24/7</h2>
            <p className="text-gray-600">Service</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
