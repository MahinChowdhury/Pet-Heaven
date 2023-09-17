import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

interface Row {
  adopter: string;
  application: string;
  date: string;
  status: string;
}

function createData(
  adopter: string,
  application: string,
  date: string,
  status: string
): Row {
  return { adopter, application, date, status };
}

const rows: Row[] = [
  createData("Mira Islam", "Tom", "2 March 2022", "Approved"),
  createData("Fahmida Zaman ", "Stuart", "2 March 2022", "Pending"),
  createData("Sabrina Abedin", "Mili", "2 March 2022", "Approved"),
  createData("Rina Akter", "Angela", "2 March 2022", "Delivered"),
];

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

const BasicTable: React.FC = () => {
  return (
    <div className="Table p-10 rounded-3xl">
      <h3 className="mb-6">Recent Orders</h3>
      <TableContainer
        className="p-2"
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Adopter</TableCell>
              <TableCell align="left">Application</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.adopter}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.adopter}
                </TableCell>
                <TableCell align="left">{row.application}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
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

export default BasicTable;
