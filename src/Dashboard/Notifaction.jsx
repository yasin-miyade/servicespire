import React from 'react'
import { useState } from 'react';
import HeaderDashb from "./HeaderDashb";

function Notifaction() {

    const [isCollapsed, setIsCollapsed] = useState(true);
      
        const toggleSidebar = () => {
          setIsCollapsed(!isCollapsed);
        };

  return (
    <>
        <div className="flex min-h-screen bg-gray-100">
        <HeaderDashb isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div
        className={`transition-all duration-300 p-5 mt-1 w-full ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}>
            hiiiii
        </div>
        </div>
    </>
  )
}

export default Notifaction