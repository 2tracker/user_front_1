import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";

function Header({ setSidebarOpen, sidebarOpen }) {

const [cartPopup , setCartPopup] = useState(false)



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
        <div className=" w-[45px] h-[45px] p-3" onClick={() => setCartPopup(!cartPopup)}>
          <div className="relative">
            <AiOutlineShoppingCart className="w-6 h-6 " />
            <div className="absolute w-4 h-4 rounded-full top-[-8px] right-[-8px] bg-black flex items-center justify-center">
              <p className="text-white text-sm">1</p>
            </div>
          </div>
        </div>

        {/* ========= notification ======== */}
        <div className=" w-[45px] h-[45px] p-3">
          <div className="relative">
            <MdOutlineNotificationsActive className="w-6 h-6 " />
            <div className="absolute w-2 h-2 rounded-full top-[-5px] right-[-4px] bg-dark-blue flex items-center justify-center"></div>
          </div>
        </div>

        {/* ========= User ======== */}
        <div className=" w-[59px] h-[59px] p-3">
          <img
            src="images/user-1.jpg"
            className="rounded-full w--[35px] h-[35px]"
          />
        </div>
      </div>
    </div>

{cartPopup ? 
   <div
   className="overlay"
 >
   <div className="drawer">
      <div className="pt-6 px-6 text-left">
          <h5>Shopping Cart</h5>
      </div>
<div className="px-6">
<div>
        <img src="images/empty-shopping-cart.svg"/>
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
  : ""
}

    </>
  );
}

export default Header;
