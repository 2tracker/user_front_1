import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Highcharts from 'highcharts'
import { HighchartsReact } from "highcharts-react-official";
import { GetDOB } from "../../../auth/dashboardApi";
import moment from 'moment';
import { Button } from "@mui/material";



function ProjectTable() {
  const [age, setAge] = React.useState("");
  const [getDob,setGeDob] = React.useState([])

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
  
useEffect(()=>{
  GetDOB().then((res)=>{
    setGeDob(res)
  }).catch((err)=>{
    console.log(err,"DOB ERROR");
  })
},[])
  return (
    <div className="container mx-auto">
      <div className="p-6">
        <div className="grid grid-cols-12 max-[576px]:grid-cols-1  gap-6">
          <div className="col-span-9  rounded-lg border p-[30px] max-[834px]:col-span-8 max-[576px]:col-span-1">
            <div className="flex items-center justify-between pb-5">
              <h5 className="text-[18px] font-semibold text-left">
                Birthdays
              </h5>
            </div>
            <div>
              <TableContainer component={Paper} sx={{ maxHeight: 300 }} className="user-table-data">
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
                      <TableCell className="!font-bold">
                        Birthday Excitement
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="h-full min-h-[300px] !overflow-y-auto ">
                  {getDob.map((item,index)=>{
                    return (
                      <>
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
                              {item?.firstName} {item?.lastName}
                            </p>
                            <p className="text-[12px] text-[#2a3547]">
                              {item?.role}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{moment(item?.DOB).format('DD/MM/YYYY')}</TableCell>
                      <TableCell>{item?.daysToBday} Days</TableCell>
                      <TableCell><button className={`w-[130px] h-[30px] ${item?.daysToBday > 130 ? 'text-orange-600 bg-orange-200' : 'text-blue-500 bg-blue-200'} ${item?.daysToBday === 0 && 'text-blue-500 bg-white'} font-semibold text-[16px]   rounded-2xl`}>
                        {item?.daysToBday > 130 ? 'Low' : 'Something' } {item?.daysToBday === 0 && 'My Birthday'}
                        </button></TableCell>
                      
                    </TableRow>
                      </>
                    )
                  })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="text-right">
              <Button className="rounded-md">View All</Button>
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
                options={options}/>

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
