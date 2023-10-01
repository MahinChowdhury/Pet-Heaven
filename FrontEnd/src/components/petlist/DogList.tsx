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

const DogList = () => {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    // Fetch pet data from the server when the component mounts
    axios
      .get("http://localhost:3001/dogs") // Adjust the URL to match your server endpoint
      .then((response) => {
        console.log(response.data);
        setRows(response.data); // Update the rows state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <PetFilter />

      <div className="flex justify-evenly flex-wrap">
        {rows.map((row) => (
          <div key={row.id} className="w-1/4 p-4">
            <PetCard
              petName={row.name}
              description={row.description}
              imagesrc={`http://localhost:3001/petImages/` + row.image}
              breed={row.breed}
              price={row.price}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DogList;
