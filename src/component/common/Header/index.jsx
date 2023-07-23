import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { Box, Button, Divider, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { NotificationData } from "../../../utils/alljsonfile/notificationData";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Header({ setSidebarOpen, sidebarOpen }) {
  const [cartPopup, setCartPopup] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openPopup, setOpenPopup] = React.useState(false);

  const [notificationOpen, setNotificationOpen] = React.useState(null);
  const open = Boolean(anchorEl);
  const NotificationDropopen = Boolean(notificationOpen);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickNotification = (event) => {
    setNotificationOpen(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setNotificationOpen(null);
  };


  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <div className="px-6 flex items-center bg-white sticky top-0 w-full min-h-[64px] justify-between shadow-sm z-50">
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
          <div className="time-button">
            <Button className="!border " onClick={handleClickOpen}>Start</Button>
            <Dialog
        open={openPopup}
        onClose={handleClosePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Disagree</Button>
          <Button onClick={handleClosePopup} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
          </div>




          {/* ========= notification ======== */}
          <div className=" w-[45px] h-[45px] p-3">
            <div
              className="relative"
              onClick={handleClickNotification}
              aria-controls={
                NotificationDropopen ? "notification-drop" : undefined
              }
              aria-haspopup="true"
              aria-expanded={NotificationDropopen ? "true" : undefined}
            >
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
          className:
            "p-8 overflow-visible profile-popup w-1/6 h-auto !max-h-auto !overflow-auto",
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
              src="/images/icon-inbox.svg"
              className="w-[22px] h-[22px]"
            />
          </div>
          <Link to={"/myprofile"}>
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
              src="/images/icon-tasks.svg"
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
          <button className="w-full p-2 border border-[#5d87ff] rounded-md text-[16px] text-[#5d87ff]  hover:text-white hover:bg-[#5d87ff] hover:border-[#5d87ff] duration-300">
            Logout
          </button>
        </div>
      </Menu>

      {/* ================= Notification Dropdown ========================== */}

      <Menu
        anchorEl={anchorEl}
        id="notification-drop"
        open={NotificationDropopen}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          className:
            "px-8 py-4 overflow-visible profile-popup w-1/6 h-auto !max-h-auto !overflow-auto !top-[65px] !left-[80%]",
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 1px 5px rgba(0,0,0,0.20))",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="flex justify-between items-center">
          <p className="text-[18px] text-black font-medium">Notifications</p>
          <div>
            <button className="px-2 bg-[#5d87ff] rounded-3xl text-white text-[12px] font-semibold flex items-center justify-center">
              5new
            </button>
          </div>
        </div>
        {NotificationData?.map((datanotification, index) => {
          return (
            <div key={index}>
              <div className="flex gap-3 pt-4">
                <div className="w-12 h-12 rounded-full ">
                  <img
                    alt="profileImage"
                    src={datanotification?.userimage}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#2a3547]">
                    {datanotification?.username}
                  </p>
                  <p className="text-[14px] text-[#2a3547]">
                    {datanotification?.usersubtext}
                  </p>
                </div>
              </div>
            </div>
          );
        })}


        <div className="mt-5">
          <button className="w-full p-2 border border-[#5d87ff] rounded-md text-[16px] text-[#5d87ff]  hover:text-white hover:bg-[#5d87ff] hover:border-[#5d87ff] duration-300">
            See all Notifications
          </button>
        </div>
      </Menu>
    </>
  );
}

export default Header;
