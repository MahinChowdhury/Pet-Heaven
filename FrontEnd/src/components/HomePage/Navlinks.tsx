import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import Cookies from "js-cookie";
import { BiUser } from "react-icons/bi";

const Navlinks = () => {
  const [showPetList, setShowPetList] = useState(false);
  const [showOtherList, setShowOtherList] = useState(false);
  const [showAdopOptions, setAdoptOptions] = useState(false);
  const [showUserOptions, setUserOptions] = useState(false);

  const username = Cookies.get("username");
  const navigate = useNavigate();

  const handlePetListClick = () => {
    setShowPetList(true);
  };

  const handlePetListLeave = () => {
    setShowPetList(false);
  };

  const handleOtherListClick = () => {
    setShowOtherList(true);
  };
  const handleOtherListLeave = () => {
    setShowOtherList(false);
  };
  const handleAdoptClick = () => {
    setAdoptOptions(true);
  };
  const handleAdoptLeave = () => {
    setAdoptOptions(false);
  };

  const handleUserClick = () => {
    setUserOptions(true);
  };

  const handleUserLeave = () => {
    setUserOptions(false);
  };

  const handleLogout = () => {
    Cookies.set("username", "");
    navigate("/");
  };

  return (
    <>
      <Link className="mx-2 text-xl font-semibold text-red-900" to="/">
        Home
      </Link>
      <div
        className="relative inline-block group"
        onMouseEnter={handlePetListClick}
        onMouseLeave={handlePetListLeave}
      >
        <div className="mx-2 text-xl font-semibold text-red-900 cursor-pointer">
          Pet List
        </div>
        {showPetList && (
          <div className="absolute font-semibold w-28 za10 space-y-2 py-2 bg-yellow-50 border border-gray-300 rounded-lg shadow-lg">
            <Link
              className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
              to="/cats"
              onClick={handlePetListLeave}
            >
              Cats
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
              to="/dogs"
              onClick={handlePetListLeave}
            >
              Dogs
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
              to="/birds"
              onClick={handlePetListLeave}
            >
              Birds
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
              to="/allpets"
              onClick={handlePetListLeave}
            >
              All Pets
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
              onMouseEnter={handleOtherListClick}
              onMouseLeave={handleOtherListLeave}
            >
              Others
              <div className="relative inline-block group">
                {showOtherList && (
                  <div className="absolute w-28 z-10 space-y-2 py-2 bg-yellow-50 border border-gray-300 rounded-lg shadow-lg">
                    <Link
                      className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
                      to="/rabbit"
                      onClick={handleOtherListLeave}
                    >
                      Rabbits
                    </Link>
                    <Link
                      className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
                      to="/horse"
                      onClick={handleOtherListLeave}
                    >
                      Horses
                    </Link>
                    <Link
                      className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
                      to="/tortoise"
                      onClick={handleOtherListLeave}
                    >
                      Tortoise
                    </Link>
                    <Link
                      className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
                      to="/guinea"
                      onClick={handleOtherListLeave}
                    >
                      Guinea Pigs
                    </Link>
                  </div>
                )}
              </div>
            </Link>
          </div>
        )}
      </div>
      <Link
        className="mx-2 text-xl font-semibold text-red-900"
        onMouseEnter={handleAdoptClick}
        onMouseLeave={handleAdoptLeave}
      >
        Adoption
        {showAdopOptions && (
          <div className="absolute w-28 z-10 space-y-2 py-2 bg-yellow-50 border border-gray-300 rounded-lg shadow-lg">
            <Link
              className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
              to="/process"
              onClick={handleOtherListLeave}
            >
              Process
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
              to="/contact"
              onClick={handleOtherListLeave}
            >
              Contact
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
              to="/about"
              onClick={handleOtherListLeave}
            >
              About Us
            </Link>
          </div>
        )}
      </Link>
      <div>
        {username ? (
          <div
            className="mx-2 text-xl font-semibold text-red-900"
            onMouseEnter={handleUserClick}
            onMouseLeave={handleUserLeave}
          >
            <div className="flex">
              <BiUser className="mr-3 mt-1" />
              {username}!
            </div>
            {showUserOptions && (
              <div className="absolute w-28 z-10 space-y-2 py-2 bg-yellow-50 border border-gray-300 rounded-lg shadow-lg">
                <Link
                  className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
                  to="/process"
                  onClick={handleOtherListLeave}
                >
                  Profile
                </Link>
                <Link
                  className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
                  to="/contact"
                  onClick={handleOtherListLeave}
                >
                  Recent Orders
                </Link>
                <button
                  className="ml-3 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700 dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link className="mx-2 text-xl font-semibold text-red-900" to="/login">
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default Navlinks;
