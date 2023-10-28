import Navbar from "../HomePage/Navbar";
import PetCard from "./PetCard";
import PetFilter from "./PetFilter";
import axios from "axios";
import { useState, useEffect } from "react";

interface Row {
  id: string;
  name: string;
  type: string;
  breed: string;
  description: string;
  age: string;
  gender: string;
  price: string;
  image: string;
}

const OtherList = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [filteredRows, setFilteredRows] = useState<Row[]>([]);
  const [showFilterStatus, setShowFilterStatus] = useState("");

  const fetchFilteredData = (filters) => {
    filters["type"] = "Others";
    console.log(filters);

    axios
      .get("http://localhost:3001/petsFilter", { params: filters })
      .then((response) => {
        console.log(response.data);
        setFilteredRows(response.data); // Update the filteredRows state with the filtered data
      })
      .catch((error) => {
        console.error("Error fetching filtered pet data:", error);
      });
  };

  useEffect(() => {
    // Fetch pet data from the server when the component mounts
    axios
      .get("http://localhost:3001/Others") // Adjust the URL to match your server endpoint
      .then((response) => {
        console.log(response.data);
        setRows(response.data); // Update the rows state with the fetched
        if (filteredRows.length === 0) {
          setShowFilterStatus("No such Pet Found!");
        }
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <PetFilter onSearch={fetchFilteredData} />

      {filteredRows.length === 0 && (
        <div className="text-center text-red-600 text-md font-semibold">
          {showFilterStatus}
        </div>
      )}

      {filteredRows.length === 0 && (
        <div className="text-center text-red-600 text-md font-semibold">
          {showFilterStatus}
        </div>
      )}

      <div className="flex justify-evenly flex-wrap">
        {filteredRows.length > 0
          ? filteredRows.map((row) => (
              <div key={row.id} className="w-1/4 p-4">
                <PetCard
                  petName={row.name}
                  description={row.description}
                  imagesrc={`http://localhost:3001/petImages/` + row.image}
                  breed={row.breed}
                  price={row.price}
                  id={row.id}
                />
              </div>
            ))
          : rows.map((row) => (
              <div key={row.id} className="w-1/4 p-4">
                <PetCard
                  petName={row.name}
                  description={row.description}
                  imagesrc={`http://localhost:3001/petImages/` + row.image}
                  breed={row.breed}
                  price={row.price}
                  id={row.id}
                />
              </div>
            ))}
      </div>
    </>
  );
};

export default OtherList;
