import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { Box, Button, Divider, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

function Header({ setSidebarOpen, sidebarOpen }) {
  const [cartPopup, setCartPopup] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="px-6 flex items-center bg-white sticky top-0 w-full min-h-[64px] justify-between">
        <div className="flex items-center ">
          <div className="inline-flex gap-3 p-3">
            <FaBars
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`bg-white text-3xl p-1 cursor-pointer rounded block float-left duration-500 ${
                sidebarOpen && "rotate-[360deg]"
              }`}
            />
          </div>
          {/* <div className="p-3">
          <BsSearch
            className={`text-black text-md block float-left cursor-pointer `}
          />
        </div> */}
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="country-flag p-2 rounded-full w-5 h-5 bg-black"></div>

          {/* ========= Cart ======== */}
          {/* <div
            className=" w-[45px] h-[45px] p-3"
            onClick={() => setCartPopup(!cartPopup)}
          >
            <div className="relative">
              <AiOutlineShoppingCart className="w-6 h-6 " />
              <div className="absolute w-4 h-4 rounded-full top-[-8px] right-[-8px] bg-black flex items-center justify-center">
                <p className="text-white text-sm">1</p>
              </div>
            </div>
          </div> */}

          {/* ========= notification ======== */}
          <div className=" w-[45px] h-[45px] p-3">
            <div className="relative">
              <MdOutlineNotificationsActive className="w-6 h-6 " />
              <div className="absolute w-2 h-2 rounded-full top-[-5px] right-[-4px] bg-dark-blue flex items-center justify-center"></div>
            </div>
          </div>

          {/* ========= User ======== */}
          <div
            className=" w-[59px] h-[59px] p-3"
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img
              src="images/user-1.jpg"
              className="rounded-full w--[35px] h-[35px]"
            />
          </div>
        </div>
      </div>

      {/* {cartPopup ? (
        <div className="overlay">
          <div className="drawer">
            <div className="pt-6 px-6 text-left">
              <h5>Shopping Cart</h5>
            </div>
            <div className="px-6">
              <div>
                <img src="images/empty-shopping-cart.svg" />
              </div>
              <div className=" px-6 pb-2 text-center">
                <h5>Cart is Empty</h5>
              </div>
              <div>
                <button className=" px-4 py-[6px] bg-dark-blue text-white text-[14px]">
                  Go back to shopping
                </button>
              </div>
            </div>
          </div>
          <div className="fill" onClick={() => setCartPopup(false)} />
        </div>
      ) : (
        ""
      )} */}

      {/* =========== Profile Dropdown =========== */}

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          className: "p-8 overflow-visible profile-popup w-1/6 h-auto !max-h-auto !overflow-auto",
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 1px 5px rgba(0,0,0,0.20))",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
          <div>
            <p className="text-[18px] text-black font-medium">User Profile</p>
          </div>
          <div className="flex gap-3 py-6">
            <div className="w-20 h-20 rounded-full ">
              <img
                alt="profileImage"
                src="/images/user-2.jpg"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-[14px] font-medium text-black">
                Mathew Anderson
              </p>
              <p className="text-[14px] font-normal text-black">Designer</p>
              <div className=" flex items-center gap-2">
                <MdOutlineEmail className="w-4 h-auto" />
                <p className="text-[14px] text-[#2a3547] font-normal">
                  info@timetask.com
                </p>
              </div>
            </div>
          </div>

          <Divider />
          <div className="py-4 flex items-center gap-3">
            <div className="p-3 bg-[#ecf2ff] rounded-md">
              <img
                alt="profileImage"
                src="/images/profile-account.svg"
                className="w-[22px] h-[22px]"
              />
            </div>
            <Link to={"/my-profile"}>
              <h6 className="text-[14px] font-medium text-black hover:text-[#5d87ff]">
                My Profile
              </h6>
              <h6 className="text-[14px] font-normal text-black">
                Account Settings
              </h6>
            </Link>
          </div>
          <div className="py-4 flex items-center gap-3 ">
            <div className="flex items-center justify-center bg-[#ecf2ff] rounded-md w-[45px] h-[45px]">
              <img
                alt="profileImage"
                src="/images/profile-account.svg"
                className="w-auto h-auto"
              />
            </div>
            <Link to={"#"}>
              <h6 className="text-[14px] font-medium text-black hover:text-[#5d87ff]">
                My Inbox
              </h6>
              <h6 className="text-[14px] font-normal text-black">
              Messages & Emails
              </h6>
            </Link>
          </div>
          <div className="py-4 flex items-center gap-3">
            <div className="p-3 bg-[#ecf2ff] rounded-md">
              <img
                alt="profileImage"
                src="/images/profile-account.svg"
                className="w-[22px] h-[22px]"
              />
            </div>
            <Link to={"#"}>
              <h6 className="text-[14px] font-medium text-black hover:text-[#5d87ff]">
                My Task
              </h6>
              <h6 className="text-[14px] font-normal text-black">
              To-do and Daily Tasks
              </h6>
            </Link>
          </div>

          <div className="mt-2">
            <button className="w-full p-2 border border-[#5d87ff] rounded-md text-[16px] text-[#5d87ff]  hover:text-white hover:bg-[#5d87ff] hover:border-[#5d87ff] duration-300">Logout</button>
          </div>
         
      </Menu>
    </>
  );
}

export default Header;
