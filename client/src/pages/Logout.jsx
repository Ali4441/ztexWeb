import { useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../store/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const ranRef = useRef(false)

  useEffect(() => {
    if (ranRef.current) return;   // prevent double run in StrictMode
    ranRef.current = true;

    logout();
    toast.success("Logout successfully!");
    setTimeout(() => {
      navigate('/login');
    }, 300);

  }, [logout, navigate]);

  return null;
}

export default Logout;

