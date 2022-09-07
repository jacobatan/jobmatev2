import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import IncludeNavbar from "./utils/IncludeNavbar";
import { LoginContext } from "./context/Context";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter >
      <LoginContext.Provider value={{ open: open, setOpen: setOpen }}>
        <Routes>
          <Route path="/" element={<IncludeNavbar />}>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoutes exist={false} route="/login" />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<ProtectedRoutes exist={true} route="/dashboard" />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Route>
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter >
  )
}

export default App;
