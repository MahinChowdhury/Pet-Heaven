import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Maindash from "./Maindash";
import Rightbar from "./Rightbar";
import AuthUser from "../authentication/AuthUser";
import Login from "../authentication/login";

const Dashboard = () => {
  const { getToken } = AuthUser();

  if (!getToken()) {
    return <Login />;
  }

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
