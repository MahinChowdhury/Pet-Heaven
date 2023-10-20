import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import Cookies from "js-cookie";

const Navlinks = () => {
  const [showPetList, setShowPetList] = useState(false);

  const username = Cookies.get("username");
  const navigate = useNavigate();

  const handlePetListClick = () => {
    setShowPetList(true);
  };

  const handlePetListLeave = () => {
    setShowPetList(false);
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
          <div className="absolute w-28 z-10 space-y-2 py-2 bg-white border border-gray-300 rounded-lg shadow-lg">
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
              to="/others"
              onClick={handlePetListLeave}
            >
              Others
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-200"
              to="/allpets"
              onClick={handlePetListLeave}
            >
              All Pets
            </Link>
          </div>
        )}
      </div>
      <Link className="mx-2 text-xl font-semibold text-red-900" to="/adoption">
        Adoption
      </Link>
      <Link className="mx-2 text-xl font-semibold text-red-900" to="/process">
        Process
      </Link>
      <Link className="mx-2 text-xl font-semibold text-red-900" to="/contact">
        Contact
      </Link>

      {username ? (
        <div className="mx-2 text-xl font-semibold text-red-900">
          Welcome, {username}! <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link className="mx-2 text-xl font-semibold text-red-900" to="/login">
          Login
        </Link>
      )}
    </>
  );
};

export default Navlinks;
