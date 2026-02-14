import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../store/AuthProvider';
function Register() {
  const { user: userData } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: ""
  });
  useEffect(() => {
    if (userData) {
      setUser(prev => ({
        ...prev,
        name: userData.name || "",
        email: userData.email || ""
      }));
    }
  }, [userData]);
  const Navigate = useNavigate();
  const HandleIpute = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSumite = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await axios.post("https://ztexweb.onrender.com/api/contact", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // On success
      console.log("Response:", response.data);
      alert("Registered successfully!");

      // Reset form
      setUser({
        name: "",
        email: "",
        message: "",

      });
      Navigate('/contact');

    } catch (error) {
      console.error("Registration failed:", error);

      // Optional: backend message if available
      alert(
        error.response?.data?.message || "Registration failed!"
      );
    }
  };

  return (
    <section className=" flex items-center justify-center bg-[#121111]">
      <main className="w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div className="flex justify-center">
              <img src="/image/register.png" />
            </div>

            <div className="bg-black p-8 rounded-lg shadow-lg">


              <form onSubmit={handleSumite} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name='name'
                    placeholder='enter your username'
                    id='name'
                    required
                    autoComplete='off'
                    value={user.name}
                    onChange={HandleIpute}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name='email'
                    placeholder='enter your email'
                    id='email'
                    required
                    autoComplete='off'
                    value={user.email}
                    onChange={HandleIpute}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    type="text"
                    name='message'
                    placeholder='enter your message'
                    id='message'
                    required
                    autoComplete='off'
                    value={user.message}
                    onChange={HandleIpute}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"

                    rows={5}

                  />
                </div>

                <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mt-6">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* footer */}
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
      </main>
    </section>
  )
}

export default Register
