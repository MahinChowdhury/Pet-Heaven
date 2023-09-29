import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useState, useEffect } from "react";
import AddPetModal from "../../utilities/Modals/AddPetModal";
import axios from "axios";
import myimg from "../../../../../BackEnd/petImages/J01 (9).jpg";

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

const makeStyle = (status: string) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

const PetTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

    axios
      .get("http://localhost:3001/pets") // Adjust the URL to match your server endpoint
      .then((response) => {
        console.log(response.data);
        setRows(response.data); // Update the rows state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  };

  useEffect(() => {
    // Fetch pet data from the server when the component mounts
    axios
      .get("http://localhost:3001/pets") // Adjust the URL to match your server endpoint
      .then((response) => {
        console.log(response.data);
        setRows(response.data); // Update the rows state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  }, []);

  return (
    <div className="Table p-10 rounded-3xl">
      <div className="flex flex-wrap justify-between mb-4">
        <div>
          <h3 className="mb-6">All Pets</h3>
          <img src="../../../BackEnd/petImages/J01 (9).jpg" alt="" />
        </div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold cursor-pointer hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={openModal}
        >
          Add New Pet
        </button>
        <AddPetModal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      <TableContainer
        className="px-6 py-4"
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Pet Name</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Breed</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={`http://localhost:3001/petImages/` + row.image}
                    alt=""
                    className="w-24"
                  />
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.breed}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.gender}</TableCell>
                <TableCell align="left">{row.age}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left" className="Details cursor-pointer">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PetTable;
