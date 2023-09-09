import { BsCalendarEvent } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GoIssueReopened , GoTasklist } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBarChart,AiFillSetting, AiOutlineIssuesClose ,AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";

export const DashboardMenus = [

{title: "Dashboard" , icon: <AiOutlineDashboard className="w-[22px] h-[22px]"/> , linkpage : "dashboard"},

{
  title: "Tasks",
  icon: <GoTasklist className="w-[22px] h-[22px]"/>,
  submenu: true,
  linkpage: "task",
  submenuItems: [
        {title: "Todo" ,  linkpage : "todo",},
        {title: "My issues" , linkpage : "todo",},
        {title: "My Reopen issue"  , linkpage : "my-issues",},
        {title: "My QA Test Tasks" , linkpage : "test-task",},
  ],
},

{
  title: "Events",
  icon: <BsCalendarEvent className="w-[22px] h-[22px]"/>,
  submenuEvent: true,
  EventsubmenuItems: [
    {title: "Chats"  , linkpage : "chats"},
  ],
},

{ title: " Setting" , icon: <AiFillSetting className="w-[22px] h-[22px]"/> , linkpage : "setting"},

{
  title: "Users",
  icon: <FiUsers className="w-[22px] h-[22px]"/>,
  submenuUser: true,
  UsersubmenuItems: [
    {title: "My Profile", linkpage : "myprofile"},
  
  { title: " Logout" , icon: <AiOutlineLogout className="w-[22px] h-[22px]"/> },
  ],
},

];
