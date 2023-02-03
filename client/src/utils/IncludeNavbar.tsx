import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const IncludeNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default IncludeNavbar;
