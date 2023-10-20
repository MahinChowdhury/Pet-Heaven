import Navbar from "../HomePage/Navbar";
import { Link } from "react-router-dom";
import yesBabyGif from "/yes-baby.gif";

const AdoptionSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="m-10">
        <img src={yesBabyGif} alt="Congratulations GIF" className="mb-10" />
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Congratulations!
        </h1>
        <div className="text-xl text-red-500 mb-4">
          Your adoption process Completed Successfully. Our team is on its way
          for the delivery.
        </div>
        <div className="text-lg text-gray-700">
          Meanwhile, you can{" "}
          <Link
            to="/allpets"
            className="text-blue-600 font-semibold hover:underline"
          >
            Adopt more pets
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdoptionSuccess;
