import { useState } from 'react'
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple Regex Patterns
    const nameRegex = /^[a-zA-Z ]{2,30}$/; // letters and spaces, 2-30 chars
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    // min 6 chars, at least 1 letter and 1 number

    // Validate Name
    if (!nameRegex.test(user.name)) {
      return toast.error("Name should be 2-30 letters only!");
    }

    // Validate Email
    if (!emailRegex.test(user.email)) {
      return toast.error("Please enter a valid email!");
    }

    // Validate Password
    if (!passwordRegex.test(user.password)) {
      return toast.error("Password must be at least 6 characters and include a number!");
    }

    try {
      const response = await axios.post(
        "https://ztexweb.onrender.com/api/register",
        user,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success === true) {
        toast.success("Registration successfully!");

        setTimeout(() => {
          navigate('/Login');

        }, 500);

      }

      // Reset form
      setUser({ name: "", email: "", password: "" });



    } catch (error) {

      toast.error(error?.response?.data?.message || "Registration failed!");
    }
  };


  return (
    <section className="flex items-center justify-center bg-[#121111] pt-20">
      <main className="w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img src="/image/register.png" alt="logo" className="w-96 h-96 object-cover" />
            </div>

            <div className="bg-zinc-800/20 p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold mb-6 text-gray-500">Registration form</h1>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                    onChange={handleInput}
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
                    onChange={handleInput}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name='password'
                    placeholder='enter your password'
                    id='password'
                    required
                    autoComplete='off'
                    value={user.password}
                    onChange={handleInput}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mt-6">
                  Submit
                </button>
              </form>
              <div className='w-full flex items-center justify-center  m-5'>
                <h3>Already have an account?<NavLink to="/login" className="text-blue-600">Sign in</NavLink>

                </h3>
              </div>
            </div>

          </div>
        </div>
        {/* footer */}
        <div className="bg-[#e8e8f1] text-black w-full py-8 mt-5">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-4">
            {[
              { number: "50+", text: "Registered Companies" },
              { number: "100,000+", text: "Happy Clients" },
              { number: "500+", text: "Well Known Developers" },
              { number: "24/7", text: "Service" },
            ].map((item, i) => (
              <div key={i}>
                <h2 className="text-3xl font-bold">{item.number}</h2>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Toaster position="bottom-right" />
    </section>
  )
}

export default Register
