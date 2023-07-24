import React from "react";
import { GoDotFill } from "react-icons/go";
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
import Chart from "react-apexcharts";

import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { Image } from "@mui/icons-material";
import { DonutChart } from "../DonutChart";
import { HighchartsReact } from "highcharts-react-official";
import Highcharts from 'highcharts'




function ProjectTable() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const options = {
    title: {
      text: 'My chart'
    },
    chart: {
      type: 'pie'
  },
    series: [{
      data: [50,25]
    }]
  }
  

  return (
    <div className="container mx-auto">
      <div className="p-6">
        <div className="grid grid-cols-12 max-[576px]:grid-cols-1  gap-6">
          <div className="col-span-9  rounded-lg border p-[30px] max-[834px]:col-span-8 max-[576px]:col-span-1">
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
                  <TableBody className="!h-[300px] !overflow-y-scroll ">
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
          <div className="col-span-3 flex flex-col gap-4 max-[834px]:col-span-4  max-[576px]:col-span-1">
            <div className="p-6 border rounded-lg text-left h-auto">
              <div className="grid grid-cols-2 items-center max-[1440px]:grid-cols-1">
                <div>
                  <h5 className="text-[18px] font-semibold text-left">
                    Yearly Breakup
                  </h5>
                  
                    <div className="pt-6 ">
                      <h4 className="text-[24px] font-semibold">$36,358</h4>
                      <div className="pt-1 flex items-center gap-2">
                        <img className="bg-[#e6fffa] rounded-full" src="/images/grow-up.svg"/>
                        <h6 className="text-[14px] font-semibold">+9%</h6>
                        <h6 className="text-[14px] font-normal">last year</h6>
                      </div>
                      <div className="flex items-center gap-5 mt-10">
                        <div className="flex items-center">
                              <GoDotFill className="text-[#5d87ff]"/> <p className="text-[14px] ml-2 text-[#2a3547]">2023</p>
                        </div>
                        <div className="flex items-center">
                              <GoDotFill className="text-[#ecf2ff]"/> <p className="text-[14px] ml-2 text-[#2a3547]">2023</p>
                        </div>

                      </div>
                    </div>
             
                </div>
                <div className="pie-chart-table h-full">
                <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />

                </div>
              </div>
            </div>
            <div className="p-6 border rounded-lg text-left h-full">
              <div className="grid grid-cols-2">
                <div>
                  <h5 className="text-[18px] font-semibold text-left">
                    Yearly Breakup
                  </h5>
                  <h4 className="text-[24px]">$36,358</h4>
                  <div>
                  </div>

                  <div>Chart</div>
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
