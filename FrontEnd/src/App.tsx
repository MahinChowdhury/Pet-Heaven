import Login from "./components/authentication/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/authentication/Register";
import Home from "./components/HomePage/Home";
import ForgotPassword from "./components/authentication/ForgetPassword";
import ResetPassword from "./components/authentication/ResetPassword";
import Dashboard from "./components/admin/Dashboard";
import Petlist from "./components/petlist/Petlist";
import DogList from "./components/petlist/DogList";
import CatList from "./components/petlist/CatList";
import BirdList from "./components/petlist/BirdList";
import OtherList from "./components/petlist/OtherList";

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
        <Route path="/allpets" element={<Petlist />} />
        <Route path="/dogs" element={<DogList />} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/birds" element={<BirdList />} />
        <Route path="/others" element={<OtherList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
