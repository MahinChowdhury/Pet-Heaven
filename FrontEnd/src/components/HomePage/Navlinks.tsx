import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

const Navlinks = () => {
  const [showPetList, setShowPetList] = useState(false);

  const handlePetListClick = () => {
    setShowPetList(!showPetList);
  };

  const handlePetListLeave = () => {
    setShowPetList(false);
  };

  return (
    <>
      <Link className="mx-2 text-xl font-semibold text-red-900" to="/">
        Home
      </Link>
      <div className="relative inline-block group">
        <Link
          className="mx-2 text-xl font-semibold text-red-900 cursor-pointer"
          onClick={handlePetListClick}
        >
          Pet List
        </Link>
        {showPetList && (
          <div className="absolute w-28 z-10 mt-2 space-y-2 py-2 bg-white border border-gray-300 rounded-lg shadow-lg">
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
      <Link className="mx-2 text-xl font-semibold text-red-900" to="/login">
        Login
      </Link>
    </>
  );
};

export default Navlinks;
