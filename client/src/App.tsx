import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";

// interface iUser {
//   name: string,
//   token: string
// }

function App() {
  // const queryClient = new QueryClient();
  const [user, setUser] = useState<any>("")
  return (
    <BrowserRouter >
      {/* <UserContext.Provider value={{ user, setUser }}> */}
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* </UserContext.Provider> */}
    </BrowserRouter >
  )
}

export default App;
