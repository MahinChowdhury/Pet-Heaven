import Login from "./components/authentication/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/authentication/Register";
import Home from "./components/HomePage/Home";
import ForgotPassword from "./components/authentication/ForgetPassword";
import ResetPassword from "./components/authentication/ResetPassword";
import Dashboard from "./components/admin/Dashboard";
import Petlist from "./components/petlist/Petlist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Authentication */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Password Reset */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* adminPanel */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/petlists" element={<Petlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
