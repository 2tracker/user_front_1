import {
    Button,
  FormControl,
  FormLabel,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";

function CreateTikcket() {
  const [italic, setItalic] = useState(false);
  const [fontWeight, setFontWeight] = useState("normal");
  const [anchorEl, setAnchorEl] = useState(null);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className="container mx-auto">
      <div className="p-6">
        <div className="grid grid-cols-12 max-[576px]:grid-cols-1  gap-6">
          <div className="col-span-8 text-left rounded-lg border p-[30px] max-[834px]:col-span-8 max-[576px]:col-span-1">
            <h4 className="text-[22px] pb-5 font-semibold">Create Ticket</h4>
            <div>
              <FormControl className="!w-full gap-5">
                <TextField
                  id="outlined-basic"
                  label="Ticket Title"
                  variant="outlined"
                  className=" !w-full !text-base  !border  !border-gray-300 !rounded-lg !focus:outline-none !focus:border-blue-400"
                />
                <TextField
                  placeholder="Ticket discription"
                  multiline
                  label="Your comment"
                  rows={2}
                  maxRows={4}
                />
              </FormControl>

             <div className="mt-5">
             <Button  className="!bg-blue-400 !w-[200px] hover:bg-blue-500 !text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">Submit</Button>

            </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-4 max-[834px]:col-span-4  max-[576px]:col-span-1 border rounded-lg p-[30px]">
            <div className="flex flex-col gap-5">
            <FormControl className="!w-full">
        <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            <FormControl className="!w-full">
        <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField
                  id="outlined-basic"
                  label="text"
                  variant="outlined"
                  className=" !w-full !text-base  !border  !border-gray-300 !rounded-lg !focus:outline-none !focus:border-blue-400"
                />
      <div className="text-right">
      <Button  className="!bg-blue-400  hover:bg-blue-500 !text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">Save</Button>

      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTikcket;
