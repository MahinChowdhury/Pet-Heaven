import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPetModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [price, setPrice] = useState("");

  const [file, setFile] = useState("");
  const [fileurl, setFileurl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    // Handle image upload here, you can set the state with the image URL or other relevant data.
    // For simplicity, you can just set the state to the file object.
    setFile(e.target.files[0]);
    //console.log(fileurl);
    // axios.post("http://localhost:3001/upload", {
    //   file,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("file", file);

    // Add pet data to the formdata
    formdata.append("name", name);
    formdata.append("type", type);
    formdata.append("breed", breed);
    formdata.append("description", description);
    formdata.append("age", age);
    formdata.append("gender", gender);
    formdata.append("price", price);

    axios
      .post("http://localhost:3001/addpet", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data.fileUrl);
        console.log("Pet added successfully.");

        setName("");
        setType("");
        setDescription("");
        setGender("Male");
        setPrice("");
        setBreed("");
        setFile("");

        onClose();
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
              <h1 className="text-2xl font-semibold">Add New Pet</h1>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                X
              </button>
            </div>

            <div className="mt-4">
              <label htmlFor="name" className="block text-gray-600">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="type" className="block text-gray-600">
                Type:
              </label>
              <input
                type="text"
                id="type"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                value={type}
                onChange={handleTypeChange}
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="breed" className="block text-gray-600">
                Breed:
              </label>
              <input
                type="text"
                id="breed"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                value={breed}
                onChange={handleBreedChange}
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="description" className="block text-gray-600">
                description:
              </label>
              <textarea
                id="description"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                value={description}
                onChange={handleDescriptionChange}
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="age" className="block text-gray-600">
                Age:
              </label>
              <input
                type="text"
                id="age"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                value={age}
                onChange={handleAgeChange}
                required
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select a Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={gender}
                className="border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                required
                onChange={handleGenderChange}
              >
                <option value="male">Male</option>
                <option value="admin">Female</option>
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="price" className="block text-gray-600">
                Price:
              </label>
              <input
                type="text"
                id="price"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                value={price}
                onChange={handlePriceChange}
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="image" className="block text-gray-600">
                Image:
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="w-full border border-gray-300 p-2 rounded mt-1"
                onChange={handleImageChange}
              />
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

export default AddPetModal;
