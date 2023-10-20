import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdoptModal = ({ isOpen, onClose, petName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [pName, setPName] = useState({ petName });

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleContactChange = (e) => {
    setContact(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/addOrder", {
        name,
        email,
        contact,
        address,
        pName: petName,
      })
      .then((res) => {
        console.log(res);
        console.log("Order added successfully.");

        setName("");
        setEmail("");
        setAddress("");
        setContact("");
        setPName("");

        onClose();

        navigate("/adoptionSuccess");
      })
      .catch((err) => {
        console.error("Pet adding failed", err);
      });
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-800 opacity-50"></div>

      <div className="modal-container bg-white w-4/12 mx-auto rounded shadow-lg z-50">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="py-4 px-8">
            <div className="modal-header flex justify-between p-4 border-b">
              <h1 className="text-2xl font-semibold">Adoption Form</h1>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                X
              </button>
            </div>

            <div className="mt-4">
              <label htmlFor="name" className="block text-gray-600">
                Your Name:
              </label>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                id="name"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="block text-gray-600">
                Email:
              </label>
              <input
                value={email}
                onChange={handleEmailChange}
                type="text"
                id="email"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="contact" className="block text-gray-600">
                Contact Number:
              </label>
              <input
                value={contact}
                onChange={handleContactChange}
                type="text"
                id="contact"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="address" className="block text-gray-600">
                Address:
              </label>
              <textarea
                value={address}
                onChange={handleAddressChange}
                id="address"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 form-checkbox h-5 w-5 text-blue-500"
                  required
                />
                I agree to all the terms & conditions
              </label>
            </div>

            <div className="mt-8 text-right">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdoptModal;
