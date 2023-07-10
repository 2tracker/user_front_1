import React from "react";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header({ setSidebarOpen, sidebarOpen }) {
  return (
    <div className='px-6 flex items-center bg-white fixed top-0 w-full min-h-[64px] justify-between'>
      <div className="flex items-center ">
        <div className="inline-flex gap-3 p-3">
          <FaBars
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`bg-white text-3xl p-1 cursor-pointer rounded block float-left duration-500 ${
              sidebarOpen && "rotate-[360deg]"
            }`}
          />
        </div>
        <div className="p-3">
          <BsSearch
            className={`text-black text-md block float-left cursor-pointer `}
          />
        </div>
        <div className="px-[15px] py-[5px] ">
          <Link href="#" className="text-[#2a3547] text-[14px]">
            Chat
          </Link>
        </div>
        <div className="px-[15px] py-[5px] ">
          <Link href="#" className="text-[#2a3547] text-[14px]">
            Calendar
          </Link>
        </div>
        <div className="px-[15px] py-[5px] ">
          <Link href="#" className="text-[#2a3547] text-[14px]">
            Email
          </Link>
        </div>
      </div>
<div className="flex">
        <div className="country-flag p-2 rounded-full w-5 h-5 bg-black">
            <p>dbcvdjhvdv</p>
        </div>
      </div>
</div>
  );
}

export default Header;
