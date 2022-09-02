import Cookies from 'js-cookie';
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  // let auth = { 'token': false }
  const auth = Cookies.get();
  return (
    auth.token ? <Outlet /> : <Navigate to="/login" />
  )
}

export default ProtectedRoutes
