import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface Row {
  id: string;
  adopter: string;
  petname: string;
  date: string;
  contact: string;
  address: string;
  status: string;
}

const makeStyle = (status: string) => {
  if (status === "Approved" || status === "Delivered") {
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

const RequestTable: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    // Fetch adoptions data from the server when the component mounts
    fetch("http://localhost:3001/adoptionsRequests")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
      })
      .catch((error) => {
        console.error("Error fetching adoption data:", error);
      });
  }, []);
  // Empty dependency array ensures the effect runs only once when the component mounts

  const handleApprove = (id) => {
    // Your axios request to update the status
    axios
      .put(`http://localhost:3001/updateStatus/${id}`, {
        status: "Approved", // Set the status to 'Approved' or whatever you need
      })
      .then((response) => {
        console.log(response.data);
        // Update the data after the status is successfully updated
        fetch("http://localhost:3001/adoptionsRequests")
          .then((response) => response.json())
          .then((data) => {
            setRows(data);
          })
          .catch((error) => {
            console.error("Error fetching adoption data:", error);
          });
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };
  const handleDeliver = (id) => {
    // Your axios request to update the status
    axios
      .put(`http://localhost:3001/updateStatus/${id}`, {
        status: "Delivered", // Set the status to 'Approved' or whatever you need
      })
      .then((response) => {
        console.log(response.data);
        // Update the data after the status is successfully updated
        fetch("http://localhost:3001/adoptionsRequests")
          .then((response) => response.json())
          .then((data) => {
            setRows(data);
          })
          .catch((error) => {
            console.error("Error fetching adoption data:", error);
          });
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  return (
    <div className="Table p-10 rounded-3xl">
      <h3 className="mb-6">Recent Orders</h3>
      <div style={{ overflowX: "auto" }}>
        <TableContainer
          className="px-16 py-4"
          component={Paper}
          style={{
            boxShadow: "0px 13px 20px 0px #80808029",
            maxHeight: "600px", // Set the max height as per your requirement
            overflowY: "auto",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Adopter</TableCell>
                <TableCell align="left">Petname</TableCell>
                <TableCell align="left">Contact</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell align="left">{row.adopter}</TableCell>
                  <TableCell align="left">{row.petname}</TableCell>
                  <TableCell align="left">{row.contact}</TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span
                      className="status cursor-pointer"
                      style={makeStyle(row.status)}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    {row.status === "Approved" ? (
                      <div
                        className="bg-transparent cursor-pointer text-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
                        onClick={() => handleDeliver(row.id)}
                      >
                        Deliver
                      </div>
                    ) : (
                      <div
                        className="bg-transparent cursor-pointer text-center hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
                        onClick={() => handleApprove(row.id)}
                      >
                        Approve
                      </div>
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

export default RequestTable;
