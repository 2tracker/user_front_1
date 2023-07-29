import * as React from "react";
import { BsDot } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function TaskComponent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="container mx-auto">
      <div className="p-6">
        <div class="p-[30px] bg-[#ecf2ff] rounded-lg text-left mb-6 flex items-center relative overflow-hidden">
          <div className="w-full">
            <h4 class="text-[22px] text-[#2A3547] font-semibold">
              Tickets app
            </h4>
            <div className="flex items-center">
              <p class="text-[14px] text-[#2a3547]">Home</p>
              <BsDot className="mx-2" />
              <p class="text-[14px] text-[#2a3547]">Tickets</p>
            </div>
          </div>
          <div className="w-1/3 flex justify-end">
            <div className="absolute top-0">
              <img
                src="images/bredcrumb-bg.png"
                className=" w-[165px] h-[165px] "
              />
            </div>
          </div>
        </div>

        <div className="border rounded-md p-6">
          <div className="mb-8 grid grid-cols-4 gap-6 max-[834px]:grid-cols-2 max-[479px]:grid-cols-2">
            <div className="bg-[#ecf2ff] cursor-pointer rounded-lg p-[30px] text-[#5d87ff] duration-200 hover:scale-[1.05]">
              <h3 className="font-semibold text-[24px] leading-7">7</h3>
              <h6 className="font-semibold text-[16px] leading-5">
                Total Tickets
              </h6>
            </div>
            <div className="bg-[#fef5e5] cursor-pointer rounded-lg p-[30px] text-[#ffae1f] duration-200 hover:scale-[1.05]">
              <h3 className="font-semibold text-[24px] leading-7">2</h3>
              <h6 className="font-semibold text-[16px] leading-5">
                Pending Tickets
              </h6>
            </div>
            <div className="bg-[#e6fffa] cursor-pointer rounded-lg p-[30px] text-[#13deb9] duration-200 hover:scale-[1.05]">
              <h3 className="font-semibold text-[24px] leading-7">2</h3>
              <h6 className="font-semibold text-[16px] leading-5">
                Open Tickets
              </h6>
            </div>

            <div className="bg-[#fdede8] cursor-pointer rounded-lg p-[30px] text-[#fa896b] duration-200 hover:scale-[1.05]">
              <h3 className="font-semibold text-[24px] leading-7">3</h3>
              <h6 className="font-semibold text-[16px] leading-5">
                Closed Tickets
              </h6>
            </div>
          </div>
          <div>
            <Paper className="!w-full !overflow-hidden !shadow-none">
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="!font-semibold">Id</TableCell>
                      <TableCell className="!font-semibold w-[40%]">
                        Ticket
                      </TableCell>
                      <TableCell className="!font-semibold">
                        Assigned To
                      </TableCell>
                      <TableCell className="!font-semibold">Status</TableCell>
                      <TableCell className="!font-semibold">Date</TableCell>
                      <TableCell className="!font-semibold">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover role="checkbox">
                      <TableCell>1</TableCell>
                      <TableCell>
                        <p className="text-[16px] font-semibold">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <p className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[250px]">
                          ab illo inventore veritatis et quasi architecto beatae
                          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                          quia voluptas sit aspernatur aut odit aut fugit, sed
                          quia consequuntur magni dolores eos
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 py-1 items-center">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/images/user-2.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex rounded-full h-6 bg-[#fdede8] items-center justify-center">
                          <p className="text-[12px] text-[#2a3547] px-2">
                            Closed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-[14px]">Wed, May 5</p>
                      </TableCell>
                      <TableCell>
                        <div className="delete-tooltip">
                          <Tooltip title="Delete Ticket">
                            <IconButton>
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow hover role="checkbox">
                      <TableCell>2</TableCell>
                      <TableCell>
                        <p className="text-[16px] font-semibold">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <p className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[250px]">
                          ab illo inventore veritatis et quasi architecto beatae
                          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                          quia voluptas sit aspernatur aut odit aut fugit, sed
                          quia consequuntur magni dolores eos
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 py-1 items-center">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/images/user-2.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex rounded-full h-6 bg-[#fdede8] items-center justify-center">
                          <p className="text-[12px] text-[#2a3547] px-2">
                            Closed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-[14px]">Wed, May 5</p>
                      </TableCell>
                      <TableCell>
                        <div className="delete-tooltip">
                          <Tooltip title="Delete Ticket">
                            <IconButton>
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow hover role="checkbox">
                      <TableCell>3</TableCell>
                      <TableCell>
                        <p className="text-[16px] font-semibold">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <p className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[250px]">
                          ab illo inventore veritatis et quasi architecto beatae
                          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                          quia voluptas sit aspernatur aut odit aut fugit, sed
                          quia consequuntur magni dolores eos
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 py-1 items-center">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/images/user-2.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex rounded-full h-6 bg-[#fdede8] items-center justify-center">
                          <p className="text-[12px] text-[#2a3547] px-2">
                            Closed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-[14px]">Wed, May 5</p>
                      </TableCell>
                      <TableCell>
                        <div className="delete-tooltip">
                          <Tooltip title="Delete Ticket">
                            <IconButton>
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow hover role="checkbox">
                      <TableCell>4</TableCell>
                      <TableCell>
                        <p className="text-[16px] font-semibold">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <p className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[250px]">
                          ab illo inventore veritatis et quasi architecto beatae
                          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                          quia voluptas sit aspernatur aut odit aut fugit, sed
                          quia consequuntur magni dolores eos
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 py-1 items-center">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/images/user-2.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex rounded-full h-6 bg-[#fdede8] items-center justify-center">
                          <p className="text-[12px] text-[#2a3547] px-2">
                            Closed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-[14px]">Wed, May 5</p>
                      </TableCell>
                      <TableCell>
                        <div className="delete-tooltip">
                          <Tooltip title="Delete Ticket">
                            <IconButton>
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow hover role="checkbox">
                      <TableCell>5</TableCell>
                      <TableCell>
                        <p className="text-[16px] font-semibold">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <p className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[250px]">
                          ab illo inventore veritatis et quasi architecto beatae
                          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                          quia voluptas sit aspernatur aut odit aut fugit, sed
                          quia consequuntur magni dolores eos
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 py-1 items-center">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/images/user-2.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex rounded-full h-6 bg-[#fdede8] items-center justify-center">
                          <p className="text-[12px] text-[#2a3547] px-2">
                            Closed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-[14px]">Wed, May 5</p>
                      </TableCell>
                      <TableCell>
                        <div className="delete-tooltip">
                          <Tooltip title="Delete Ticket">
                            <IconButton>
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
        
            </Paper>
          </div>
        </div>
      </div>

      <Button className="crete-task-button !fixed bottom-6 right-8 hover:rounded-full  hover:inline-flex">
      <Tooltip title="Crate Ticket">

        <Link to="/ticketcreate" className="bg-[#5d87ff] rounded-full w-[56px] h-[56px] flex items-center justify-center">
            <FaPlus className="text-white"/>
        </Link>
        </Tooltip>
      </Button>
    </div>
  );
}
