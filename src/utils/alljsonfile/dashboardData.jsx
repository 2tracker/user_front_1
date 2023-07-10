import { BsFillImageFill , BsReverseLayoutTextSidebarReverse , BsPerson } from "react-icons/bs";
import { AiOutlineFileText , AiOutlineBarChart , AiOutlineMail , AiOutlineSetting , AiOutlineLogout } from "react-icons/ai";

export const DashboardMenus = [
  { title: "Home" , 
      homesubmenu:[
        {title: "Modern" , icon: <AiOutlineBarChart />},
        {title: "eCommerce" ,icon: <AiOutlineBarChart />}
      ]

},
  { title: "Apps" , 
     appsubmenu:[
        {title: "Modern" , icon: <AiOutlineBarChart />},
        {title: "eCommerce" ,icon: <AiOutlineBarChart />},
        {
          title: "Blog",
          icon: <BsReverseLayoutTextSidebarReverse />,
          submenublog: true,
          subBlogItems: [
            { title: "Post" },
            { title: "Details" },
          ],
        },
      ]

},
  

  { title: "Analytics" , icon: <AiOutlineBarChart /> },
  { title: "Inbox" , icon: <AiOutlineMail /> },

  { title: "Profile", spacing: true ,icon: <BsPerson />  },
  { title: "Setting" , icon: <AiOutlineSetting />},

  { title: "Logout" , icon: <AiOutlineLogout />},
  { title: "Analytics" , icon: <AiOutlineBarChart /> },
  { title: "Inbox" , icon: <AiOutlineMail /> },

  { title: "Profile", spacing: true ,icon: <BsPerson />  },
  { title: "Setting" , icon: <AiOutlineSetting />},

  { title: "Logout" , icon: <AiOutlineLogout />},
  { title: "Analytics" , icon: <AiOutlineBarChart /> },
  { title: "Inbox" , icon: <AiOutlineMail /> },

  { title: "Profile", spacing: true ,icon: <BsPerson />  },
  { title: "Setting" , icon: <AiOutlineSetting />},

  { title: "Logout" , icon: <AiOutlineLogout />},
];
