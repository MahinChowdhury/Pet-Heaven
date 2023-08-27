import Login from "./components/authentication/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/authentication/Register";
import Home from "./components/HomePage/Home";
import ForgotPassword from "./components/authentication/ForgetPassword";
import ResetPassword from "./components/authentication/ResetPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
