import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Navbar from "../HomePage/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Recent = () => {
  const [row, setRow] = useState([]);

  const username = Cookies.get("username");

  useEffect(() => {
    // Fetch pet data from the server when the component mounts
    axios
      .get(`http://localhost:3001/recent?username=${username}`) // Adjust the URL to match your server endpoint
      .then((response) => {
        console.log(response.data);
        setRow(response.data); // Update the data state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  }, []);

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
    } else if (status === "Cancel") {
      return {
        background: "#e6d7d78f",
        color: "red",
      };
    } else {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };

  const handleCancel = (Id) => {
    // Make an API request to delete the adoption with the given ID
    axios
      .delete(`http://localhost:3001/deleteAdoption/${Id}`)
      .then((response) => {
        console.log("Adoption canceled:", response.data);
        // Optionally, update the state or fetch data again after cancellation
        fetch("`http://localhost:3001/recent?username=${username}`")
          .then((response) => response.json())
          .then((data) => {
            setRow(data);
          })
          .catch((error) => {
            console.error("Error fetching adoption data:", error);
          });
      })
      .catch((error) => {
        console.error("Error canceling adoption:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center font-bold text-2xl text-red-900 mb-6 mt-6">
        Your Recent Adoptions
      </h1>
      <div className="p-16" style={{ overflowX: "auto" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Pet Name</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.petname}</TableCell>
                  <TableCell>{row.contact}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <span
                      className="status cursor-pointer"
                      style={makeStyle(row.status)}
                    >
                      {row.status}
                    </span>
                    {row.status === "Pending" && (
                      <span
                        className="status ml-2 cursor-pointer"
                        style={makeStyle("Cancel")}
                        onClick={() => handleCancel(row.id)}
                      >
                        Cancel
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Recent;
