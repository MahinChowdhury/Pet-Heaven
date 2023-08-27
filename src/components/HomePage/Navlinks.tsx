import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <>
      <Link className="mx-2 text-xl font-semibold text-red-900" to="/">
        Home
      </Link>
      <Link className="mx-2 text-xl font-semibold text-red-900" to="/petlist">
        Pet list
      </Link>
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
