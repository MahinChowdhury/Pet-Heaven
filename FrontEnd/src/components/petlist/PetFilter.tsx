const PetFilter = () => {
  return (
    <div className="flex justify-center items-center px-20 mb-6 mt-6">
      <div className="flex items-center p-4 space-x-60  border-2 border-black">
        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <select name="type" id="type" className="border-none font-bold">
            <option value="" className="font-bold">
              Breed
            </option>
            <option value="user">Breed</option>
            <option value="admin">Breed 1</option>
            <option value="admin">Breed 2</option>
            <option value="admin">Breed 3</option>
          </select>
        </div>
        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <select name="type" id="type" className="border-none font-bold">
            <option value="" className="font-bold">
              Age
            </option>
            <option value="user">1</option>
            <option value="admin">2</option>
            <option value="admin">3</option>
            <option value="admin">4</option>
          </select>
        </div>
        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <select name="type" id="type" className="border-none font-bold">
            <option value="" className="font-bold">
              Gender
            </option>
            <option value="user">Male</option>
            <option value="admin">Female</option>
          </select>
        </div>
        <div className="bg-gray-900 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
          <span>Search</span>
        </div>
      </div>
    </div>
  );
};

export default PetFilter;
