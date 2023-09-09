import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { DashboardMenus } from "../../../utils/alljsonfile/dashboardData";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuEventOpen, setSubmenuEventOpen] = useState(false);
  const [submenuUserOpen, setSubmenuUserOpen] = useState(false);
  const location = useLocation();


  const handleClick = (e) => {
    console.log(e, ".dvbnjvjvjvhdfjvdvd");
  };

  return (
    <div>
      <div
        className={`bg-white border-r h-full  ${
          sidebarOpen ? "w-72" : "w-20"
        } duration-300  relative text-left`}
      >
        {/* <BiArrowBack className={` bg-white text-3xl p-2 rounded-full border border-light-blue absolute top-9 -right-3 cursor-pointer ${!sidebarOpen && 'rotate-180'}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}/> */}

        <div className="inline-flex gap-3  px-6 min-h-[64px] items-center w-full bg-white sticky top-0">


{!sidebarOpen && (
            //   <img src="/images/tbrand-logo.png" className="w-24 h-auto" />
            // ) : (
              <img src="/images/tbrand-logo.png" className="w-24 h-auto" />
            )
          }
          <h1
            className={`text-xl font-medium origin-left text-[#2a3547] duration-300 ${
              !sidebarOpen && "scale-0"
            }`}
          >
            Company Name
          </h1>
        </div>
        {/* <div className="relative h-full"> */}
          <ul className=" px-6 pt-2 max-[1024px]:px-4 sticky top-16">
            {DashboardMenus?.map((menudata, index) => {
              return (
                <>
                  <li
                    onClick={(e) => handleClick(index)}
                    key={index}
                    className={`text-[#2a3547]  text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md ${location.pathname === `/${menudata?.linkpage}` ?'bg-[#ecf2ff] text-[#5d87ff]' : 'hover:bg-[#ecf2ff] hover:text-[#5d87ff]'} ${
                      menudata?.spacing ? "mt-9" : "mt-2"
                    } ${sidebarOpen ? "w-full" : 'w-[38px]'}`}
                  >
                    {menudata?.icon ? (
                      <span className="text-2xl pr-2 block float-left">
                        {menudata?.icon ? menudata?.icon : <RiDashboardFill />}
                      </span>
                    ) : (
                      ""
                    )}
                    <Link
                      to={`/${menudata?.linkpage}`}
                      className={`text-[14px] font-medium flex-1 duration-200 `}
                    >
                      {sidebarOpen ? menudata?.title : ""}
                    </Link>

                    {/* ===== Task Sub  Drop button======== */}

                    {menudata?.submenu && sidebarOpen && (
                      <BsChevronDown
                        className={`${submenuOpen && "rotate-180"}`}
                        onClick={() => {
                          setSubmenuOpen(!submenuOpen);
                        }}
                      />
                    )}

                    {/* ===== Event Sub Drop button======== */}
                    {menudata?.submenuEvent && sidebarOpen && (
                      <BsChevronDown
                        className={`${submenuEventOpen && "rotate-180"}`}
                        onClick={() => {
                          setSubmenuEventOpen(!submenuEventOpen);
                        }}
                      />
                    )}
                    {menudata?.submenuUser && sidebarOpen && (
                      <BsChevronDown
                        className={`${submenuUserOpen && "rotate-180"}`}
                        onClick={() => {
                          setSubmenuUserOpen(!submenuUserOpen);
                        }}
                      />
                    )}
                  </li>
                  {/* ===== Task Sub ======== */}
                  {menudata?.submenu && submenuOpen && sidebarOpen && (
                    <ul>
                      {menudata?.submenuItems?.map((submenuItem, index) => {
                        return (
                          <>
                            <Link to={`/${submenuItem?.linkpage}`}>
                              <li
                                key={index}
                                className={`text-[#2a3547] text-[14px] max-[771px]:px-4 font-medium flex items-center gap-x-2 cursor-pointer p-2 hover:bg-[#ecf2ff] hover:text-[#5d87ff] rounded-md  ${
                                  sidebarOpen ? "px-5" : "px-1.5"
                                }`}
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
                                {submenuItem?.title}
                              </li>
                            </Link>
                          </>
                        );
                      })}
                    </ul>
                  )}

                  {/* ===== Event Sub ======== */}
                  {menudata?.submenuEvent &&
                    submenuEventOpen &&
                    sidebarOpen && (
                      <ul>
                        {menudata?.EventsubmenuItems?.map(
                          (submenuItem, index) => {
                            return (
                              <>
                                <Link to={`/${submenuItem?.linkpage}`}>
                                  <li
                                    key={index}
                                    className={`text-[#2a3547] text-[14px] max-[771px]:px-4 font-medium flex items-center gap-x-2 cursor-pointer p-2 hover:bg-[#ecf2ff] hover:text-[#5d87ff] rounded-md  ${
                                      sidebarOpen ? "px-5" : "px-1.5"
                                    }`}
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
                                    {submenuItem?.title}
                                  </li>
                                </Link>
                              </>
                            );
                          }
                        )}
                      </ul>
                    )}

                  {/* ===== User Sub ======== */}
                  {menudata?.submenuUser && submenuUserOpen && sidebarOpen && (
                    <ul>
                      {menudata?.UsersubmenuItems?.map((submenuItem, index) => {
                        return (
                          <>
                            <Link to={`/${submenuItem?.linkpage}`}>
                              <li
                                key={index}
                                className={`text-[#2a3547] text-[14px] max-[771px]:px-4 font-medium flex items-center gap-x-2 cursor-pointer p-2 hover:bg-[#ecf2ff] hover:text-[#5d87ff] rounded-md  ${
                                  sidebarOpen ? "px-5" : "px-1.5"
                                }`}
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
                                {submenuItem?.title}
                              </li>
                            </Link>
                          </>
                        );
                      })}
                    </ul>
                  )}

                  <ul>
                    {menudata?.homesubmenu?.map((submenuItem, index) => {
                      return (
                        <>
                          <li
                            key={index}
                            className={`text-[#2a3547] text-[14px] max-[771px]:px-4 font-medium flex items-center gap-x-2 cursor-pointer p-2 hover:bg-[#ecf2ff] hover:text-[#5d87ff] rounded-md  ${
                              sidebarOpen ? "px-5" : "px-1.5"
                            }`}
                          >
                            {sidebarOpen && submenuItem?.title}
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </>
              );
            })}
          </ul>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
