import { useContext, useState } from 'react'
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../store/AuthProvider';
const Login = () => {

  const { login } = useContext(AuthContext);
  const [user, setUser] = useState({ email: "", password: "" });

  const HandleIpute = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSumite = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        user,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success === true) {

        login(response.data.token, response.data.user);
        toast.success("Login successfully!");

        // Delay navigate so toast is visible
        setTimeout(() => {
          navigate('/');
        }, 500);
      }

      setUser({ email: "", password: "" });

    } catch (error) {

      toast.error(error?.response?.data?.message || "Login failed!");
    }

  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-900">
      <main className="w-full">
        <div className="max-w-md mx-auto px-4">
          <div className=" bg-zinc-800/20 w-full p-8 rounded-lg shadow-lg flex items-center flex-col">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Login</h1>

            <form onSubmit={handleSumite} className="space-y-4">
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name='password'
                  placeholder='enter your password'
                  id='password'
                  required
                  autoComplete='off'
                  value={user.password}
                  onChange={HandleIpute}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mt-6">
                Login Now
              </button>
            </form>
            <div className='w-full flex items-center justify-center  m-5'>
              <h3>Don't have an account?<a href="./register" className='text-blue-600'>Sign up for free</a>
              </h3>
            </div>

          </div>
        </div>
      </main>

    </section>
  )
}

export default Login


