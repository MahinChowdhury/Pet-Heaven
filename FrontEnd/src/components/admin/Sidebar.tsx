import { useState } from "react";
import { SidebarData } from "../utilities/Data";
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Sidebar = ({ onSidebarItemClick }) => {
  const [selected, setSelected] = useState(0);

  const navigate = useNavigate();
  const handleSignOut = () => {
    Cookies.set("username", "");
    navigate("/");
  };

  const handleItemClick = (index) => {
    setSelected(index);
    onSidebarItemClick(index); // Call the function passed from Dashboard
  };

  return (
    <div className="flex items-center p-2 pt-4 flex-col shadow-lg">
      <div className="logo flex items-center justify-center mt-10 pl-4">
        <img src="/logo.png" alt="logo" className="logo h-16 w-16 pt-2" />
        <h1 className="pl-2 font-sans text-2xl font-bold text-red-900">
          Pet Heaven
        </h1>
      </div>
      {/* menu */}
      <div className="Menu mt-16 flex flex-col gap-8 p-4">
        {SidebarData.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center gap-4 h-10 hover:cursor-pointer transition-all duration-300 ease-in-out rounded-lg text-md p-4 ${
                selected === index ? "active" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div>
                <item.icon />
              </div>
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="flex items-center gap-4 h-10 hover:cursor-pointer transition-all duration-300 ease-in-out rounded-lg text-md p-4 mt-52">
          <div>
            <PiSignOutBold />
          </div>
          <div onClick={handleSignOut}>Signout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
