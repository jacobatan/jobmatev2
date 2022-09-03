import Cookies from 'js-cookie';
import { Outlet, Navigate } from 'react-router-dom'

type tProtectedRoutes = {
  route: string;  // default route depending on the existance of said token
  exist: boolean; // if we want the token to exist or not
}

const ProtectedRoutes = ({ exist, route }: tProtectedRoutes) => {
  const auth = Cookies.get();
  return (
    (auth.token === undefined) === exist ? <Outlet /> : <Navigate to={route} />
  )
}

export default ProtectedRoutes
