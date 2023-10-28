import { useState } from "react";

const PetFilter = ({ onSearch }) => {
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSearch = () => {
    const filters = {
      breed,
      age,
      gender,
    };

    if (breed != "" && age != "" && gender != "") {
      onSearch(filters);
    }
  };

  return (
    <div className="flex justify-center items-center px-20 mb-6 mt-6">
      <div className="flex items-center p-4 space-x-60  border-2 border-black">
        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <select
            name="type"
            id="type"
            className="border-none font-bold"
            onChange={(e) => setBreed(e.target.value)}
          >
            <option value="" className="font-bold">
              Breed
            </option>
            <option value="user">Breed</option>
            <option value="Bengali Cat">Bengali Cat</option>
            <option value="admin">Breed 2</option>
            <option value="admin">Breed 3</option>
          </select>
        </div>
        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <select
            name="type"
            id="type"
            className="border-none font-bold"
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="" className="font-bold">
              Age
            </option>
            <option value="1">1 month</option>
            <option value="2">2 month</option>
            <option value="3">3 month</option>
            <option value="6">6 month</option>
            <option value="12">12 month</option>
            <option value="24">24 month</option>
            <option value="36">36 month</option>
            <option value="48">48 month</option>
          </select>
        </div>
        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <select
            name="type"
            id="type"
            className="border-none font-bold"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" className="font-bold">
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={handleSearch}
          className="bg-gray-900 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
        >
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default PetFilter;
