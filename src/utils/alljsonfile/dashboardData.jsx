import {  BsCalendarEvent , BsReverseLayoutTextSidebarReverse  } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GoIssueReopened , GoTasklist } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBarChart,AiFillSetting, AiOutlineIssuesClose ,AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";

export const DashboardMenus = [


  {title: "Dashboard" , icon: <AiOutlineDashboard />},

{
  title: "Tasks",
  icon: <GoTasklist />,
  submenu: true,
  submenuItems: [
    {title: "Todo" , icon: <RiTodoLine />},
        {title: "My issues" ,icon: <AiOutlineIssuesClose />},
        {title: "My Reopen issue" ,icon: <GoIssueReopened />},
        {title: "My QA Test Tasks" ,icon: <AiOutlineBarChart />},
  ],
},

{
  title: "Events",
  icon: <BsCalendarEvent />,
  submenuEvent: true,
  EventsubmenuItems: [
    {title: "Chats" , icon: <AiOutlineBarChart />},
  ],
},

{ title: " Setting" , icon: <AiFillSetting />},

{
  title: "Users",
  icon: <FiUsers />,
  submenuUser: true,
  UsersubmenuItems: [
    {title: "My Profile" , icon: <CgProfile />},
  
  { title: " Logout" , icon: <AiOutlineLogout />},
  ],
},




];
