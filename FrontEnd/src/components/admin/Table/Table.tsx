import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useEffect, useState } from "react";

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

const BasicTable: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    // Fetch adoptions data from the server when the component mounts
    fetch("http://localhost:3001/allAdoptions")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
      })
      .catch((error) => {
        console.error("Error fetching adoption data:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="Table p-10 rounded-3xl">
      <h3 className="mb-6">Recent Orders</h3>
      <div style={{ overflowX: "auto" }}>
        <TableContainer
          className="px-16 py-4"
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default BasicTable;
