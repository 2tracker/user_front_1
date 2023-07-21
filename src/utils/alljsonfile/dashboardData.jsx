import { BsCalendarEvent } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GoIssueReopened , GoTasklist } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBarChart,AiFillSetting, AiOutlineIssuesClose ,AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";

export const DashboardMenus = [

{title: "Dashboard" , icon: <AiOutlineDashboard className="w-[22px] h-[22px]"/> , linkpage : "dashborad"},

{
  title: "Tasks",
  icon: <GoTasklist className="w-[22px] h-[22px]"/>,
  submenu: true,
  submenuItems: [
        {title: "Todo" , icon: <RiTodoLine className="w-[22px] h-[22px]"/> , linkpage : "todo",},
        {title: "My issues" ,icon: <AiOutlineIssuesClose className="w-[22px] h-[22px]"/> , linkpage : "todo",},
        {title: "My Reopen issue" ,icon: <GoIssueReopened className="w-[22px] h-[22px]"/> , linkpage : "my-issues",},
        {title: "My QA Test Tasks" ,icon: <AiOutlineBarChart className="w-[22px] h-[22px]"/> , linkpage : "test-task",},
  ],
},

{
  title: "Events",
  icon: <BsCalendarEvent className="w-[22px] h-[22px]"/>,
  submenuEvent: true,
  EventsubmenuItems: [
    {title: "Chats" , icon: <AiOutlineBarChart className="w-[22px] h-[22px]"/> , linkpage : "chats"},
  ],
},

{ title: " Setting" , icon: <AiFillSetting className="w-[22px] h-[22px]"/> , linkpage : "setting"},

{
  title: "Users",
  icon: <FiUsers className="w-[22px] h-[22px]"/>,
  submenuUser: true,
  UsersubmenuItems: [
    {title: "My Profile" , icon: <CgProfile className="w-[22px] h-[22px]"/> , linkpage : "myprofile"},
  
  { title: " Logout" , icon: <AiOutlineLogout className="w-[22px] h-[22px]"/> },
  ],
},

];
