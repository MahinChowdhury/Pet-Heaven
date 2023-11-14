import "./Dashboard.css";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MainDash from "./MainDash";
import RightBar from "./Rightbar";
import AddPets from "./AddPets";
import Adoptions from "./Adoptions";
import Users from "./Users";
import RecReq from "./RecReq";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [adminPage, setAdminPage] = useState(0);

  const handleSidebarItemClick = (index) => {
    setAdminPage(index);
  };

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the 'adminname' cookie has a value
    const adminname = Cookies.get("adminname");
    if (adminname === "") {
      navigate("/login");
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="AppGlass">
        <Sidebar onSidebarItemClick={handleSidebarItemClick} />
        {adminPage === 0 && <MainDash />}
        {adminPage === 0 && <RightBar />}
        {adminPage === 1 && <AddPets />}
        {adminPage === 2 && <Adoptions />}
        {adminPage === 3 && <Users />}
        {adminPage === 4 && <RecReq />}
      </div>
    </div>
  );
};

export default Dashboard;
