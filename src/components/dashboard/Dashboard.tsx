import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Maindash from "./Maindash";
import Rightbar from "./Rightbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="AppGlass">
        <Sidebar />
        <Maindash />
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
