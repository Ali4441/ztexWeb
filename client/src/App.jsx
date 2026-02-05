import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Logout from './pages/Logout';
import { Toaster } from "react-hot-toast";
import SpamDetectionPage from './pages/SpamDetectionPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Navbar />
        <Home />
      </div>
  },
  {
    path: "/about",
    element:
      <div>
        <Navbar />
        <About />
      </div>
  },
  {
    path: "/contact",
    element:
      <div>
        <Navbar />
        <Contact />
      </div>
  },
  {
    path: "/services",
    element:
      <div>
        <Navbar />
        <Services />
      </div>
  },


  {
    path: "/spam-detection",
    element:
      <div>
        <Navbar />
        <SpamDetectionPage />
      </div>
  },

  {
    path: "/login",
    element:
      <div>
        <Navbar />
        <Login />
      </div>
  },
  {
    path: "/logout",
    element:
      <div>
        <Navbar />
        <Logout />
      </div>
  },
  {
    path: "/register",
    element:
      <div>
        <Navbar />
        <Register />
      </div>
  },
  {
    path: "/NotFound",
    element:
      <div>
        <Navbar />
        <NotFound />
      </div>
  },



]);
const App = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </div>
  )
};


export default App
