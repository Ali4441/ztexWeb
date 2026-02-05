import React from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../store/AuthProvider';

import { useContext } from 'react';
const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="bg-[#121111] text-white w-full ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl space-y-6">
          <p className="text-zinc-400">Welcome  {user ? user.name : `to are website`}</p>

          <h1 className="text-4xl md:text-5xl font-bold">Why Choose Us?</h1>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white">Expertise:</strong> Our team consists of
              experienced IT professionals who are passionate about staying up-to-date with
              the latest industry trends.
            </p>

            <p>
              <strong className="text-white">Customization:</strong> We understand that every
              business is unique. That's why we create solutions tailored to your specific
              needs and goals.
            </p>

            <p>
              <strong className="text-white">Customer-Centric Approach:</strong> We prioritize
              your satisfaction and provide top-notch support to address your IT concerns.
            </p>

            <p>
              <strong className="text-white">Affordability:</strong> We offer competitive
              pricing without compromising on the quality of our services.
            </p>

            <p>
              <strong className="text-white">Reliability:</strong> Count on us to be there
              when you need us. We're committed to ensuring your IT environment is reliable
              and available 24/7.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <NavLink to="/contact">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold">
                Connect Now
              </button>
            </NavLink>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-12 md:mt-0">
          <img
            src="/image/register.png"
            alt="Why Choose Us Illustration"
            className="w-[420px] md:w-[480px]"
          />
        </div>
      </div>

      {/* FOOTER STATS */}
      <div className="bg-[#e8e8f1] text-black w-full py-4 mt-4">
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
    </section>
  );
}

export default About
