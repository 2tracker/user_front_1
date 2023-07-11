import { BsFillImageFill , BsReverseLayoutTextSidebarReverse , BsPerson } from "react-icons/bs";
import { AiOutlineFileText , AiOutlineBarChart , AiOutlineMail , AiOutlineSetting , AiOutlineLogout } from "react-icons/ai";

export const DashboardMenus = [


  {title: "Dashboard" , icon: <AiOutlineBarChart />},

{
  title: "Tasks",
  icon: <BsReverseLayoutTextSidebarReverse />,
  submenu: true,
  submenuItems: [
    {title: "Todo" , icon: <AiOutlineBarChart />},
        {title: "My issues" ,icon: <AiOutlineBarChart />},
        {title: "My Reopen issue" ,icon: <AiOutlineBarChart />},
        {title: "My QA Test Tasks" ,icon: <AiOutlineBarChart />},
  ],
},

{
  title: "Events",
  icon: <BsReverseLayoutTextSidebarReverse />,
  submenuEvent: true,
  EventsubmenuItems: [
    {title: "Chats" , icon: <AiOutlineBarChart />},
  ],
},

{ title: " Setting" , icon: <AiOutlineLogout />},

{
  title: "Users",
  icon: <BsReverseLayoutTextSidebarReverse />,
  submenuUser: true,
  UsersubmenuItems: [
    {title: "My Profile" , icon: <AiOutlineBarChart />},
  
  { title: " Logout" , icon: <AiOutlineLogout />},
  ],
},




];
