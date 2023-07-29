import { useState } from "react";
import Header from "../Header"
import Sidebar from "../Sidebar"

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);


  return (
    <>

<div className="flex h-full">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <div className=" w-full">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>{children}</main>
          </div>
        </div>
    
    </>
  )
}

export default Layout