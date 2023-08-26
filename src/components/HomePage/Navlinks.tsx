import { NavLink } from "react-router-dom";

const Navlinks = () => {
  return (
    <>
      <NavLink className="mx-2 text-xl font-semibold text-red-900" to="/">
        Home
      </NavLink>
      <NavLink
        className="mx-2 text-xl font-semibold text-red-900"
        to="/petlist"
      >
        Pet list
      </NavLink>
      <NavLink
        className="mx-2 text-xl font-semibold text-red-900"
        to="/adoption"
      >
        Adoption
      </NavLink>
      <NavLink
        className="mx-2 text-xl font-semibold text-red-900"
        to="/process"
      >
        Process
      </NavLink>
      <NavLink
        className="mx-2 text-xl font-semibold text-red-900"
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink className="mx-2 text-xl font-semibold text-red-900" to="/login">
        Login
      </NavLink>
    </>
  );
};

export default Navlinks;
