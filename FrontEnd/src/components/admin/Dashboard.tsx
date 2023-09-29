import "./Dashboard.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import MainDash from "./MainDash";
import RightBar from "./Rightbar";
import AddPets from "./AddPets";
import Adoptions from "./Adoptions";
import Users from "./Users";
import Settings from "./Settings";

const Dashboard = () => {
  const [adminPage, setAdminPage] = useState(0);

  const handleSidebarItemClick = (index) => {
    setAdminPage(index);
  };

  return (
    <div className="dashboard">
      <div className="AppGlass">
        <Sidebar onSidebarItemClick={handleSidebarItemClick} />
        {adminPage === 0 && <MainDash />}
        {adminPage === 0 && <RightBar />}
        {adminPage === 1 && <AddPets />}
        {adminPage === 2 && <Adoptions />}
        {adminPage === 3 && <Users />}
        {adminPage === 4 && <Settings />}
      </div>
    </div>
  );
};

export default Dashboard;
