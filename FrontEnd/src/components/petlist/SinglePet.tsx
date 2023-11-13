import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../HomePage/Navbar";
import Cookies from "js-cookie";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import AdoptModal from "../utilities/Modals/AdoptModal";

const SinglePet = () => {
  const { id } = useParams();
  const [petData, setPetData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Fetch pet data by ID from the server when the component mounts
    axios
      .get(`http://localhost:3001/pets/${id}`)
      .then((response) => {
        console.log(response.data);
        setPetData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  }, [id]);

  const navigate = useNavigate();

  const handleAdoptNow = () => {
    const username = Cookies.get("username");

    console.log(username);

    if (username === "") {
      navigate("/login");
    } else {
      openModal();
    }
  };

  return (
    <>
      <AdoptModal
        isOpen={isModalOpen}
        onClose={onClose}
        petName={petData.name}
      />
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="container mx-auto p-4">
          <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={`http://localhost:3001/petImages/${petData.image}`}
              alt={petData.name}
              className="w-full h-auto"
            />
            <div className="p-4">
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-3xl font-semibold text-center"
              >
                {petData.name} :{" "}
                <span className="text-sm">{petData.breed}</span>
              </Typography>
              <p className="text-lg mt-4 mb-4">
                <span className="font-semibold">Type :</span> {petData.type}
              </p>
              <p className="text-lg mt-4 mb-4 text-red-500">
                <span className="font-semibold">Adoption Fee :</span> $
                {petData.price}
              </p>
              <p className="text-lg mt-4 mb-4">
                <span className="font-semibold">Age :</span> {petData.age}{" "}
                months
              </p>
              <p className="text-lg mt-4 mb-4">
                <span className="font-semibold">Gender :</span> {petData.gender}
              </p>
              <p className="text-lg mb-4">{petData.description}</p>
              <div className="mt-6">
                <button
                  onClick={handleAdoptNow}
                  className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Adopt Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePet;
