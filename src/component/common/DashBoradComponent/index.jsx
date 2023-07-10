import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { DashboardMenus } from "../../../utils/alljsonfile/dashboardData";
import Header from "../Header";

function DashBoradComponent() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div>
      <>
        <div className="flex">
          <div
            className={`bg-white border-r h-screen relative ${
              sidebarOpen ? "w-72" : "w-20"
            } duration-300  relative text-left`}
          >
            {/* <BiArrowBack className={` bg-white text-3xl p-2 rounded-full border border-light-blue absolute top-9 -right-3 cursor-pointer ${!sidebarOpen && 'rotate-180'}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}/> */}

            <div className="inline-flex gap-3  px-6 min-h-[64px] items-center w-full bg-white sticky top-0">
              <FaBars
                className={`bg-white text-3xl p-1 overflow-visible cursor-pointer rounded block float-left duration-500 `}
              />
              <h1
                className={`text-xl font-medium origin-left text-[#2a3547] duration-300 ${
                  !sidebarOpen && "scale-0"
                }`}
              >
                Tracker
              </h1>
            </div>
            <ul className=" px-6 pt-2">
              {DashboardMenus?.map((menudata, index) => {
                return (
                  <>
                    <li
                      key={index}
                      className={`text-[#2a3547] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md  ${
                        menudata?.spacing ? "mt-9" : "mt-2"
                      }`}
                    >
                      {menudata?.icon ? (
                        <span className="text-2xl block float-left">
                          {menudata?.icon ? (
                            menudata?.icon
                          ) : (
                            <RiDashboardFill />
                          )}
                        </span>
                      ) : (
                        ""
                      )}
                      <span
                        className={`text-base font-medium flex-1 duration-200 `}
                      >
                        {sidebarOpen ? menudata?.title : '...'}
                      </span>
                      
                    </li>

                    {/* ===== Home Sub ======== */}
                    <ul>
                      {menudata?.homesubmenu?.map((submenuItem, index) => {
                        return (
                          <>
                            <li
                              key={index}
                              className={`text-[#2a3547] text-base font-medium flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#ecf2ff] hover:text-[#5d87ff] hover:text-black rounded-md  ${sidebarOpen ? 'px-5' : 'px-1.5' }`}
                            >
                              {submenuItem?.icon ? (
                                <span className="text-2xl block float-left">
                                  {submenuItem?.icon ? (
                                    submenuItem?.icon
                                  ) : (
                                    <RiDashboardFill />
                                  )}
                                </span>
                              ) : (
                                ""
                              )}
                              {sidebarOpen && submenuItem?.title}
                  
                            </li>
                          </>
                        );
                      })}
                    </ul>

                    {/* ======= App ======== */}
                    <ul>
                      {menudata?.appsubmenu?.map((submenuItem, index) => {
                        return (
                          <>
                            <li
                              key={index}
                              className={`text-[#2a3547] text-base font-medium flex items-center justify-between cursor-pointer p-2 hover:bg-[#ecf2ff] hover:text-[#5d87ff] hover:text-black rounded-md ${sidebarOpen ? 'px-5' : 'px-1.5' }`}
                            >
                             <div className="flex gap-x-4">
                             {submenuItem?.icon ? (
                                <span className="text-2xl block float-left ">
                                  {submenuItem?.icon ? (
                                    submenuItem?.icon
                                  ) : (
                                    <RiDashboardFill />
                                  )}
                                </span>
                              ) : (
                                ""
                              )}
                              {sidebarOpen && submenuItem?.title}
                             </div>
                              {submenuItem?.submenublog  && (
                                <BsChevronDown
                                  className={`${submenuOpen && "rotate-180"}`}
                                  onClick={() => {
                                    setSubmenuOpen(!submenuOpen);
                                  }}
                                />
                              )}
                            </li>

                            {submenuItem?.submenublog &&
                              submenuOpen &&
                              sidebarOpen && (
                                <ul>
                                  {submenuItem?.subBlogItems?.map(
                                    (submenuBlog, index) => {
                            
                                      return (
                                        <>
                                          <li
                                            key={index}
                                            className="text-[#2a3547] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md px-5"
                                          >
                                            {submenuBlog?.title}
                                          </li>
                                        </>
                                      );
                                    }
                                  )}
                                </ul>
                              )}
                          </>
                        );
                      })}
                    </ul>

                  </>
                );
              })}
            </ul>
          </div>
          <div className=" w-full">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
        </div>
      </>
    </div>
  );
}

export default DashBoradComponent;
