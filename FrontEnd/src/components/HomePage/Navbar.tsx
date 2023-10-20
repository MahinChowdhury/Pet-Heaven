import { useState } from "react";
import CloseButton from "../utilities/CloseButton";
import MenuButton from "../utilities/MenuButton";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleNavbar = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <header className="bg-amber-100 sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-gray-500 p-2">
        <div className="ml-5 logo h-16 w-16 pt-2">
          <img src={logo} alt="logo" />
        </div>

        <Link className="ml-3 font-sans text-2xl font-bold text-red-900" to="/">
          Pet Heaven
        </Link>

        <div className="hidden w-1/2 lg:flex justify-between mx-auto">
          <Navlinks />
        </div>

        <div className="lg:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <CloseButton /> : <MenuButton />}
          </button>
        </div>
        {isOpen && (
          <div className="flex basis-full flex-col items-center">
            <Navlinks />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
