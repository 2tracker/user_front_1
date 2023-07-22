import React from "react";
import { BiBriefcase } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chart  from 'react-apexcharts'

import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function ProjectTable() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };





  return (
    <div className="container mx-auto">
      <div className="p-6">
        <div className="grid grid-cols-12 p-6 gap-6">
          <div className="col-span-8  rounded-lg border p-[30px]">
            <div className="flex items-center justify-between pb-5">
              <h5 className="text-[18px] font-semibold text-left">
                Top Projects
              </h5>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    className="month-select"
                  >
                    <MenuItem value={10}>March 2023</MenuItem>
                    <MenuItem value={20}>April 2023</MenuItem>
                    <MenuItem value={30}>May 2023</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <TableContainer component={Paper} className="user-table-data">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow className="user-table-title">
                      <TableCell className="!font-bold">Person</TableCell>
                      <TableCell className="!font-bold">
                        Birthday Date
                      </TableCell>
                      <TableCell className="!font-bold">
                        Waiting Birthday
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <div className="flex gap-3 py-1">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/images/user-2.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                            <p className="text-[12px] text-[#2a3547]">
                              Web Designer
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>08/12/2001</TableCell>
                      <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <div className="flex gap-3 py-1">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/images/user-2.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                            <p className="text-[12px] text-[#2a3547]">
                              Web Designer
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>08/12/2001</TableCell>
                      <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <div className="flex gap-3 py-1">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/images/user-2.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                            <p className="text-[12px] text-[#2a3547]">
                              Web Designer
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>08/12/2001</TableCell>
                      <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <div className="flex gap-3 py-1">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/images/user-2.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                            <p className="text-[12px] text-[#2a3547]">
                              Web Designer
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>08/12/2001</TableCell>
                      <TableCell>15</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <div className="col-span-4 p-6 border rounded-lg text-left">
            <div className="grid grid-cols-2">
              <div>
              <h5 className="text-[18px] font-semibold text-left">
              Yearly Breakup
              </h5>
              <h4 className="text-[24px]">$36,358</h4>

              <div>
      Chart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectTable;
