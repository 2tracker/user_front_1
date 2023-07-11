import { BsFillImageFill , BsReverseLayoutTextSidebarReverse , BsPerson } from "react-icons/bs";
import { AiOutlineFileText , AiOutlineBarChart , AiOutlineMail , AiOutlineSetting , AiOutlineLogout } from "react-icons/ai";

export const DashboardMenus = [


  {title: "Dashboard" , icon: <AiOutlineBarChart />},


  { title: "Tasks" , 
     appsubmenu:[
        {title: "Todo" , icon: <AiOutlineBarChart />},
        {title: "My issues" ,icon: <AiOutlineBarChart />},
        {title: "My Reopen issue" ,icon: <AiOutlineBarChart />},
        {title: "My QA Test Tasks" ,icon: <AiOutlineBarChart />},
        // {
        //   title: "Blog",
        //   icon: <BsReverseLayoutTextSidebarReverse />,
        //   submenublog: true,
        //   subBlogItems: [
        //     { title: "Post" },
        //     { title: "Details" },
        //   ],
        // },
      ]

},
  { title: "Events" , 
     appsubmenu:[
        {title: "Chats" , icon: <AiOutlineBarChart />},
        
      ]

},


{ title: "Users" , 
appsubmenu:[
  {title: "My Profile" , icon: <AiOutlineBarChart />},
  
  { title: " Logout" , icon: <AiOutlineLogout />},
]
},


];
