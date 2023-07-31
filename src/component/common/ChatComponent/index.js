import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HiChevronDown } from "react-icons/hi";

function ChatComponent(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="p-6">
        <div className="p-[30px] bg-[#ecf2ff] rounded-lg text-left mb-6 flex items-center relative overflow-hidden">
          <div className="w-full">
            <h4 className="text-[22px] text-[#2A3547] font-semibold">
              Chats
            </h4>
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

        <div>
          <div className="grid grid-cols-12 border rounded-lg ">
            <div className="col-span-3 border-r">
              <div className="flex gap-3 items-center p-6">
                <div className="w-[54px] h-[54px] rounded-full relative">
                  <img
                    alt="profileImage"
                    src="/images/user-1.jpg"
                    className="rounded-full"
                  />
                  <div className="absolute -bottom-2 -right-1">
                    <RxDotFilled className="text-[#13deb9] w-7 h-7 " />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-[14px] font-semibold text-[#2a3547]">
                    Sunil Joshi
                  </p>
                  <p className="text-[12px] font-normal text-[#2a3547]">
                    Marketing Manager
                  </p>
                </div>
              </div>
              <div className="px-6 py-2">
                <TextField
                  id="search"
                  type="search"
                  placeholder="Search Contact"
                  className="contact-search w-full"
                  value={searchTerm}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AiOutlineSearch />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="py-2">
                <div className="px-6 pb-2 text-left">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="flex items-center gap-1 hover:!bg-[#2a354705] !text-black"
                  >
                    Recent Chats
                    <HiChevronDown />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
                <div className="relative h-full">
                    <div className="h-[400px] overflow-y-auto">
                    <div className="flex gap-3 items-center px-6 py-4 chat-user-info ">
                        <div className="w-[42px] h-[42px] rounded-full relative">
                          <img
                            alt="profileImage"
                            src="/images/user-2.jpg"
                            className="rounded-full"
                          />
                          <div className="absolute -bottom-2 -right-1">
                            <RxDotFilled className="text-[#13deb9] w-7 h-7 " />
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="text-[14px] font-semibold text-[#2a3547]">
                            Sunil Joshi
                          </p>
                          <p className="text-[12px] font-normal text-[#2a3547]">
                            Marketing Manager
                          </p>
                        </div>
                        <div className="">
                            <p className="text-[12px] font-normal text-[#2a3547]">10 minutes</p>
                        </div>
                      </div>
                    <div className="flex gap-3 items-center px-6 py-4  chat-user-info ">
                        <div className="w-[42px] h-[42px] rounded-full relative">
                          <img
                            alt="profileImage"
                            src="/images/user-2.jpg"
                            className="rounded-full"
                          />
                          <div className="absolute -bottom-2 -right-1">
                            <RxDotFilled className="text-[#13deb9] w-7 h-7 " />
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="text-[14px] font-semibold text-[#2a3547]">
                            Sunil Joshi
                          </p>
                          <p className="text-[12px] font-normal text-[#2a3547]">
                            Marketing Manager
                          </p>
                        </div>
                        <div className="">
                            <p className="text-[12px] font-normal text-[#2a3547]">10 minutes</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-span-9 relative">
              <div className="sticky top-0 p-6 border-b flex">
              <div className="flex gap-3 items-center  w-full">
                <div className="w-[40px] h-[40px] rounded-full relative">
                  <img
                    alt="profileImage"
                    src="/images/user-1.jpg"
                    className="rounded-full"
                  />
                  <div className="absolute -bottom-2 -right-1">
                    <RxDotFilled className="text-[#13deb9] w-7 h-7 " />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-[18px] font-semibold text-[#2a3547]">
                  James Johnson

                  </p>
                  <p className="text-[12px] font-normal text-[#2a3547]">
                    online
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                    <Button className="hover:rounded-full">
                    <IoCallOutline className="w-7 h-7 hover:rounded-full"/>
                    </Button>
                    <Button className="hover:rounded-full">
                    <IoCallOutline className="w-7 h-7 hover:rounded-full"/>
                    </Button>
                    <Button className="hover:rounded-full">
                    <IoCallOutline className="w-7 h-7 hover:rounded-full"/>
                    </Button>
              </div>
              

              </div>
              <div className="overflow-auto h-[60vh] w-full p-6 ">
              <div className="flex gap-3 ">
                <div className="w-[30px] h-[30px] rounded-full relative">
                  <img
                    alt="profileImage"
                    src="/images/user-1.jpg"
                    className="rounded-full"
                  />
                 
                </div>
                <div className="text-left">
                  <p className="text-[12px] font-semibold text-[#2a3547] mb-2">
                  James Johnson, 2 days ago
                  </p>
                  <p className="text-[14px] max-w-[320px] font-normal text-[#2a3547] bg-[#f2f6fa] mb-4 p-2 rounded-lg">
                    Marketing Manager
                  </p>
                </div>
              </div>
                    <div className="float-right">
                    <p className="text-[14px] max-w-[320px] text-left h-auto  font-normal text-[#2a3547] bg-[#f2f6fa] mb-4 p-2 rounded-lg">
                    Bacusihok bad feb uw tapcu necip pewizefek omupesez gandozan voviko
                  </p>
                    </div>

              </div>
              <div className="absolute bottom-0 p-6 border-t z-50 bg-white w-full">
sccdscsdcscs
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
